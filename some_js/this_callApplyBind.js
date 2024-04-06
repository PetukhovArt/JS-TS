//this

//global scope
//in functions: simple f / arrow f
//call apply bind
//in function constructor
// console.log(this) // window in chrome = global object

// 'use strict'

// function foo () {
//     //this
//     const a = ()=> {
//         console.log(this)
//     }
//     a()
// }
// foo() // window // в момент вызова ,
// this определяется внутри функции foo
// this из функции a , обращается в окружении ф-ии foo
// движок автоматом подставляет window.foo()

// const user = {
//     name: 'samurai',
//     getName () {
//         console.log(this.name)
//         //объект не имеет своего this,
//         //поэтому если у нас стрелочная,
//         // то мы идем в глобальное окружение в window
//         //но там нет свойства .name
//     }
// }
// user.getName() // undefined if arrow function in object

// const car1= {
//     color: 'red'
// }
// const car2= {
//     color: 'black'
// }
// function foo () {
//     console.log(this.color)
// }
// // const foo = () => {
// //     console.log(this.color)
// // }
// car1.f=foo // create property with link to foo
// car2.f=foo // create property with link to foo
// car1.f() // undefined if arrow
// car2.f() // undefined if arrow

// const car = {
//     color: 'red',
//     showColor () {
//         //this
//         (()=> {
//             console.log(this.color)
//         })();
//     }
// }
// car.showColor() // red

// const car = {
//     color: 'red',
//     showColor () {
//             console.log(this.color)
//         }
//     }
// const foo = car.showColor
// foo() // undefined

// const car1 = {
//     color: 'red', // контекст объекта кар1
//     showColor(a, b) {
//         console.log(this.color)
//         console.log(a, b)
//     }
// }
// const car2 = {
//     color: 'black',
// }
// car1.showColor() // red
// car1.showColor.call(car2, 4,6) // black ,4,6, передается контекст кар2 в кар1 ( хардкод)
// car1.showColor.apply(car2, [4,6]) //black , 4,6
// car1.showColor.bind(car2) // создает обертку (ссылку) , можно вызвать добавив () // black

// const scooter = {
//     maxSpeed: 60
// }
// const bike = {
//     maxSpeed: 300
// }
// const car1={
//     maxSpeed: 200,
//     showMaxSpeed() {
//         //this
//         (()=>{
//             console.log(this.maxSpeed)
//         }).call(scooter) //мы не можем привязать контекст в стрелочную функцию
//     }
// }

// const car1={
//     maxSpeed: 200,
//     showMaxSpeed() {
//         console.log(this.maxSpeed)
//     }
// }
// car1.showMaxSpeed.bind(scooter).call(bike) //60, тк нельзя перепривязать контекст

// function Car(color, speed) { // function constructor
//     //{color: red}
//     this.color=color
//     this.speed=speed
// }
// const ferrari = new Car('Red', 300)
// const bmw = new Car('blue', 250)
// console.log(ferrari)
// console.log(bmw)

// const car = {
//     color: 'red',
//     showColor() {
//         console.log(this.color)
//     }
// }
// // setTimeout(function () {
// //     car.showColor()
// // }, 1000)
// // setTimeout(car.showColor, 1000) //this будет равняться тому что есть у setTimeout т.е undefined
// setTimeout(car.showColor.bind(car),1000) // red, тк bind создает обертку

// const person = {
//     name: 'Regina',
//     age: 27,
//     sayHello(job?: string, weight?: number) {
//         console.log(`${this.name} age is ${this.age} and he/she works ${job} and her/his weight is ${weight}`)
//     }
// }
// const personTwo = {
//     name: 'Boris',
//     age: 33
// }
// person.sayHello.bind(personTwo)('prj', 100) // скобки в конце для вызова
// person.sayHello.call(personTwo, 'project', 85) // call сразу вызывается
// person.sayHello.apply(personTwo, ['tehnik', 90]) // apply отличается от call только способом передачи параметров

const arr = [1, 2, 3, 4, 5];
const arr2 = [2, 4, 6, 8, 10];

// @ts-ignore
Array.prototype.multiplyEachByNumber = function (n) {
  //создали у любого массива в глобал скоупе метод , мапим массив и умножаем на входящий параметр n
  console.log(this.map((el) => el * n)); // this - в данном случае контекстом является нужный нам массив
};
// @ts-ignore
// обращаемся к нужному массиву и вызываем этот метод, передавая n
arr.multiplyEachByNumber(2); // 2, 4, 6, 8, 10]
// @ts-ignore
arr2.multiplyEachByNumber(3); // [6, 12, 18, 24, 30]
// Универсальное решение для расширения функциональности объектов
