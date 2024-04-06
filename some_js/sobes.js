// let pr1 = new Promise((resolve, reject) => {
//     // resolve('Artem');
//     reject('Artem');
// });
//
// // pr1.then(res => {
// //     console.log(res); // logs 'Artem'
// //     return new Promise((resolve, reject) => reject(res));
// // }).catch(e => console.log(e)); // logs 'Artem'
// pr1.then(
//     result => console.log(result),
//     error => console.log(error)
// )

// Given a string, capitalize the letters that occupy even indexes and odd indexes separately,
// and return as shown below. Index 0 will be considered even.
//     For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
//     The input will be a lowercase string with no spaces.
//     Good luck!
// function capitalize(s) {
//     let even = [] //четные
//     let odd = [] //не четные
//     for (let i = 0; i < s.length; i++) {
//         if (!(i % 2 === 0)) { // не четные
//             even.push(s[i])
//             odd.push(s[i].toUpperCase())
//         } else {
//             even.push(s[i].toUpperCase())
//             odd.push(s[i])
//         }
//     }
//     return [even.join(''), odd.join('')]
// }

// function capitalize(s) {
//     let arr = s.split('')
//     let even = arr.map((el, i) => (i === 0 || i % 2 === 0) ? el : el.toUpperCase()).join('')
//     let odd = arr.map((el, i) => !(i % 2 === 0) ? el.toUpperCase() : el).join('')
//
//     return [even, odd]
// }
//
// console.log(capitalize('codewars'))

// Given a mixed array of number and string representations of integers,
// add up the non-string integers and subtract the total of the string integers.
//     Return as a number.
// const divCon = (x) => {
//
//     return x.reduce((current, el) => typeof el === 'number' ? current + el : current - el, 0)
// }
// console.log(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']))

//написать функцию кот принимает массив чисел и возвр новый массив с четными числами

// const filter = (arr) => arr.filter(el => !(el % 2))
// console.log(filter([1, 2, 3, 4, 6, 10, 13, 17]))

//написать функцию кот возвращает объект, где ключем является значение a , а свойство - массив всех повторяющихся значений
// const arr = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 6, 6, 7, 8, 8, 8]
// //
// const toObj = (arr) => {
//     let object = {}
//     arr.forEach((el, index, array) => {
//         object[el] = array.filter(num => num === el)
//     })
//     return object
// }
// console.log(toObj(arr))

// let promise =new Promise((resolve, reject) =>{
//
//     setTimeout(() => resolve("result"), 1000);
//
//     setTimeout(() => reject(new Error("ignored")), 2000);
//
// });
//
//
// promise
//
//     .then(
//
//         result => console.log("Fulfilled: " + result),
//
//         error => console.log("Rejected: " + error)
//
//     );

// просуммируйте числа
// function sum(n) {
//     return function (x) {
//         return function (y) {
//             return n + x + y
//         }
//     }
// }
//
// console.log(sum(5)(4)(11))

// function getArr() {
//     let arr=[]
//     let i=0
//     while(i<10) {
//         let func=function () {
//             return i
//         }
//         arr.push(func)
//         i++
//     }
//     return arr
// }
// let arr=getArr()
// console.log(arr[0]()) //10

//polyfill filter ======================================================

// const Filter = (arr, callback) => {
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         if (callback(i)) {
//             newArr.push(i)
//         }
//     }
//     return newArr
// }
// const arr2 = [1, 2, 3, 4, 5, 6]
// const callback2 = (value) => value % 2 === 0
// console.log(Filter(arr2, callback2))

//polyfill map ======================================================

// const Map = (arr, callback) => {
//     let newArr=[]
//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(callback(i))
//     }
//     return newArr
// }
// const arr3 = [1,2,3,4,5]
// const callback = (value) => value*3
// console.log(Map(arr3, callback))

//Что выведет на экран следующий код?
//10 , по индексу заменяем аргумент на 10 и выводим его значение при вызове функции
// function b(x, y, a) {
//     console.log(arguments)
//     arguments[2] = 10;
// }
//
// console.log(b(1, 2, 3))

//Что выведет на экран следующий код?
// console.log(false == undefined); // false
// console.log(false == null); // false
// console.log(null == undefined); // true
// console.log(typeof null); // true
// console.log(typeof undefined); // true

//Что выведет на экран следующий код?
//деструктурирущее присваивание , первого элемента массива переменной y
// const numbers = [1, 2, 3, 4, 5];
// const [y] = numbers;
// console.log(y);
//

// // В каком порядке исполняются скрипты? Почему?
// async: Порядок загрузки (кто загрузится первым, тот и сработает).
// defer: Порядок документа (как расположены в документе).
// Выполняется после того, как документ загружен и обработан (ждёт), непосредственно перед DOMContentLoaded.
// <script async src="script-1.js"></script> // Время загрузки скрипта 1.5s
// <script src="script-2.js"></script> // Время загрузки скрипта 1s
// <script defer src="script-3.js"></script> // Время загрузки скрипта 3s
// <script defer src="script-4.js"></script> // Время загрузки скрипта 1.5s
// <script src="script-5.js"></script> // Время загрузки скрипта 2s
// <script async src="script-6.js"></script> // Время загрузки скрипта 1s
// <script defer src="script-7.js"></script> // Время загрузки скрипта 0.1s
// async 1, async 6,  2,  5,  def 3, def 4, def 7

//
// то выведет в консоль этот код?
//функция x затеняет переменную x=10 , во время выполнения fn(), поэтому х не перезаписывается
// let x = 3;
// function fn() {
//     x = 10;
//     return;
//     function x() {}
// }
//
// fn();
// console.log(x);
//
// //
// console.log( null || 2 || undefined ); // 2
// //
// console.log( console.log(1) || 2 || console.log(3) ); // 2  тк console.log(1) = undefined
// // //
// console.log( 1 && null && 2 ); //null , тк 1 true
// // // //
// console.log( console.log(1) && console.log(2) ); //undefined тк console.log(1) = undefined
// // // //
// console.log( null || 2 && 3 || 4 ); // && - приоритет , вернет 3 тк 2 true
// //
// // Напишите условие if для проверки, что переменная age находится в
// // диапазоне между 14 и 90 включительно.
// // «Включительно» означает, что значение переменной age может быть равно 14 или 90.

// if(age =>14 && age <=90) {
//     console.log(true)
// }
// //
// // Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.
// //     Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.
// let age = 10
// if(!(age >= 14 && age <= 90)) {
//     console.log(true)
// }
// if(age <= 14 || age >= 90) {
//     console.log(true)
// }
// //
// // Какие из перечисленных ниже alert выполнятся?
// //     Какие конкретно значения будут результатами выражений в условиях if(...)?
// if (-1 || 0) alert( 'first' ); // -1 истина
// if (-1 && 0) alert( 'second' ); // нет тк 0 - false
// if (null || -1 && 1) alert( 'third' ); // && вернет 1 , null || 1 , вернет итого 1
//

// Напишите код, который будет спрашивать логин с помощью prompt.
//     Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено
//     или нажата клавиша Esc – показать «Отменено»,
// в противном случае отобразить «Я вас не знаю».
// Пароль проверять так:
//     Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// Иначе – «Неверный пароль»,
// При отмене – «Отменено».
