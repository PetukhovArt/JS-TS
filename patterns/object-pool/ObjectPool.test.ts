import { ObjectPool } from "./ObjectPool"; // Путь к вашему классу ObjectPool

class TestInstance {
  name = "random " + Math.random().toFixed(3);
  returnName = () => this.name;
}

describe("ObjectPool", () => {
  let pool: ObjectPool<TestInstance>;

  beforeEach(() => {
    pool = new ObjectPool<TestInstance>(() => new TestInstance());
  });

  test("should initialize with correct size", () => {
    expect(pool.getFreePool().length).toBe(10);
  });

  test("should get instance from pool", () => {
    const instance = pool.getInstance(0);
    expect(instance).toBeDefined();
    expect(instance.returnName()).toMatch(/random/);
  });

  test("should dispose instance after timeout", () => {
    jest.useFakeTimers();
    const instance = pool.getInstance(0);
    expect(pool.getFreePool().length).toBe(9);
    jest.advanceTimersByTime(10001); // Имитируем проход времени
    expect(pool.getFreePool().length).toBe(10); // Ожидаем, что объект был возвращен в пул
  });

  test("should handle parallel requests beyond max size", async () => {
    jest.useFakeTimers();
    const instances: TestInstance[] = [];
    const promises = Array.from({ length: 40 }, (_, index) => {
      return pool.getInstance(index);
    });

    // Имитируем параллельные запросы
    const results = await Promise.all(promises);
    results.forEach((instance, index) => {
      expect(instance).toBeDefined();
      instances[index] = instance;
    });

    // Проверяем, что все запросы были обработаны
    expect(instances.length).toBe(40);

    // Имитируем проход времени, чтобы проверить, что объекты были возвращены в пул
    jest.advanceTimersByTime(10001);
    //TODO error here
    expect(pool.getFreePool().length).toBeLessThanOrEqual(10);
    expect(pool.getActivePool().size).toBe(0);
  });
});
