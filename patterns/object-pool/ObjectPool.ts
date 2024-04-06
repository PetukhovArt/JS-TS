type ObjIndexType = number;
type TimeoutType = ReturnType<typeof setTimeout> | null;

/**
 * @param creator функция создания уникального объекта для инициализации в пул
 * @param minSize минимальное количество свободных объектов в пуле, default = 5
 * @param normalSize нормальное количество свободных объектов в пуле, default = 10
 * @param maxSize максимальное количество свободных объектов в пуле, default = 20
 * @param timeToClear таймаут очистки неиспользуемого инстанса
 */
class ObjectPool<T> {
  /**
   * @private freePool  - массив свободных экземпляров
   * @private activePool  - коллекция активных экземпляров
   * @private activeTimeouts  - коллекция таймаутов на очистку активных экземпляров
   */
  private freePool: T[] = [];
  private activePool: Map<ObjIndexType, T> = new Map();
  private activeTimeouts: Map<ObjIndexType, TimeoutType> = new Map();

  constructor(
    private creator: () => T,
    private minSize = 5,
    private normalSize = 10,
    private maxSize = 20,
    private timeToClear = 10000,
  ) {
    if (!this.freePool.length) {
      this.fillPool(this.normalSize);
    }
  }

  private fillPool(size: number): void {
    for (let i = 0; i < size; i++) {
      const newInstance = this.creator();
      this.freePool.push(newInstance);
    }
  }

  private get poolSize(): number {
    return this.freePool.length;
  }

  private cutPool(size: number): void {
    const startIndex = this.poolSize - size;
    this.freePool.splice(startIndex, size);
  }

  /**
   * @description получение объекта из активного пула по индексу / свободного пула
   *  дозаполнение freePool, в случае minSize свободных экземпляров
   *  удаление лишних экземпляров freePool, в случае maxSize свободных экземпляров
   *  установка таймаута на очистку экземпляра и возврат в freePool
   */
  public getInstance(index: number): T {
    if (!this.poolSize || this.poolSize < this.minSize) {
      this.fillPool(this.normalSize);
    }

    if (this.poolSize >= this.maxSize) {
      this.cutPool(this.normalSize);
    }

    const activePool: T | undefined = this.activePool.get(index);

    if (activePool) {
      this.setTimeoutToClear(index);
      return activePool;
    }

    const freePool: T | undefined = this.freePool.pop();

    if (freePool) {
      this.activePool.set(index, freePool);
      this.setTimeoutToClear(index);
      return freePool;
    } else {
      throw new Error("Непредвиденная ошибка");
    }
  }

  private setTimeoutToClear(index: number): void {
    const currentTimeout = this.activeTimeouts.get(index);

    if (currentTimeout) {
      clearTimeout(currentTimeout);
    }

    const newTimeout = setTimeout(() => this.dispose(index), this.timeToClear);
    this.activeTimeouts.set(index, newTimeout);
  }

  /**
   * @description удаление таймаута, перемещение инстанса из активного в свободные
   */
  private dispose(index: number): void {
    this.activeTimeouts.delete(index);
    const activeInstance = this.activePool.get(index);
    if (activeInstance) {
      this.activePool.delete(index);
      this.freePool.push(activeInstance);
    }
  }
}

export class TestInstance {
  name = "random " + Math.random().toFixed(3);
  returnName = () => this.name;
}

//example usage
class ParentClass {
  pool: ObjectPool<TestInstance>;

  constructor() {
    //initialize pool
    this.pool = new ObjectPool<TestInstance>(() => new TestInstance());
  }

  getData(channelId: number) {
    //get instance by index
    const instance = this.pool.getInstance(channelId - 1);
    //use instance
    return instance.returnName();
  }
}

const c = new ParentClass();
console.log(c.getData(1)); // some data from 0 index instance
console.log(c.getData(2)); // some data from 1 index instance

// const pool = new ObjectPool<DummyClass>(() => new DummyClass());
// console.log("instance", pool.getInstance(5));
// console.log("freepool", pool.getFreePool);
// console.log("activepool", pool.getActivePool);
