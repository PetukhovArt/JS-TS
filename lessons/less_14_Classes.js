const car1 = {
  brand: "bmw",
  maxSpeed: 300,
  startEngine() {
    console.log(`${this.brand} engine is started`);
  },
};
const car2 = {
  brand: "audi",
  maxSpeed: 250,
  startEngine() {
    console.log(`${this.brand} engine is started`);
  },
};

function carCreator(brand, maxSpeed) {
  const car = {
    brand: brand,
    maxSpeed: maxSpeed,
    startEngine() {
      console.log(`${this.brand} engine is started`);
    },
  };
  return car;
}

const car3 = carCreator("peugeot", 200);

// car3.startEngine()

function CarConstructor(brand, maxSpeed) {
  this.brand = brand;
  this.maxSpeed = maxSpeed;
}

CarConstructor.prototype.startEngine = function () {
  console.log(`${this.brand} engine is started`);
};

const car4 = new CarConstructor("Volkswagen", 200);

// car4.startEngine()

class CarClass {
  #brand;
  constructor(brand, maxSpeed, color) {
    this.#brand = brand;
    this.maxSpeed = maxSpeed;
  }

  startEngine(newBrand) {
    if (!newBrand) throw new Error("empty string");
    this.#brand = newBrand; // решетка защищает от изменения извне
    console.log(`${this.#brand} engine is started`); //объект функции создается в памяти только один раз
  }

  set brand(newBrand) {
    if (!newBrand) throw new Error("empty string");
    this.#brand = newBrand.toUpperCase(); // решетка защищает от изменения извне
  }
  get brand() {
    return `${this.#brand} FFDFKDFJKDFKDKFJJKJF`;
  }
  getBrand() {
    return `${this.#brand} FFDFKDFJKDFKDKFJJKJF`;
  }
  static concatCars(car1, car2) {
    console.log("concat");
  }
}

const car5 = new CarClass("Ferrari car5", 350);
// car5.#brand='fdfdf' // can't rename
// car5.startEngine('LADA')
car5.brand = "toyota"; // обращение в set brand , передаем новое имя
// console.log(car5.brand); // обращаемся в get brand
// console.log(car5.getBrand())
CarClass.concatCars();
