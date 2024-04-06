type ObjIndexType = number;
type TimeoutType = ReturnType<typeof setTimeout> | null;

/**
 * Пул инициализируется по умолчанию в родительских классах
 * универсальный , принимать полиморфные объекты (конструктор)
 * минимум , норм и максимум свободных объектов (конструктор)
 * при остатке свободных объектов в пуле меньше 5 , заполнить пул  до 10 свободных объектов
 * при заполнении пула больше 30 объектов, и количестве свободных более 5 :
 * вычислить все свободные , удалить колиество x= свободные - 5 , но чтобы общее осталось не меньше 10
 */
class ObjectPool<T> {
  pool: Map<ObjIndexType, T | {}> = new Map();
  poolTimeouts: Map<ObjIndexType, TimeoutType> = new Map();

  constructor(
    private object: T | {} = {},
    private min = 5,
    private norm = 10,
    private max = 30,
  ) {
    if (this.pool.size < 1) {
      this.initialize();
    }
  }

  private initialize() {
    for (let i = 0; i < 10; i++) {
      this.pool.set(i, new this.object());
      this.poolTimeouts.set(i, null);
    }
  }

  public getInstance(index: number) {
    return this.pool.get(index);
  }

  private clearInstance() {}
}

export class TestClass {
  name = "artem " + Math.random().toFixed(2);
}

const pool = new ObjectPool(TestClass);
console.log(pool.pool, pool.getInstance(5));
