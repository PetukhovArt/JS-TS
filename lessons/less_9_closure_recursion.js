function bar() {} //declaration подлежат всплытию , а также функции через var
//находятся в основном потоке и читаются перманентно
const foo = () => {}; //expression , вызываются по ходу выполнения кода

//замыкание, лексическое окружение, рекурсии
//lexical environment
//globalLE {foo: function}

//Global environment
// let a=0
// const createCounter = () => {
//     //LE with link to GE
//     // {counter}
//     const counter =()=> {
//             a++
//     }
//     return counter
//     console.log(a)
// }
// const counter1=createCounter()
// const counter2=createCounter()
// counter1()// GE {a=1}
// counter1() //GE {a=2}
// counter2()//GE {a=3}
// console.log(a)
//так как a находится в GE , то вызовы функции разделяют одну и ту же переменную a

const createCounter = () => {
  let a = 0;
  return function () {
    return a++;
  };
};
const counter1 = createCounter();
const counter2 = createCounter();
console.log(counter1()); // a=0
console.log(counter1()); //a=1
console.log(counter2()); //a=0
// Для каждого вызова crateCounter() создаётся новое лексическое окружение функции,
// со своим собственным a. Так что получившиеся функции counter – независимы.

//Write your own function bind
function bind(context, fn) {
  return function (...args) {
    //замыкание
    fn.apply(context, args); // метод апплай - определяет как передаются параметры
    //в него мы передаем массив , в него будут помещены все параметры
  };
}
function logPerson() {
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}

const person1 = { name: "misha", age: 22, job: "front" };
const person2 = { name: "artem", age: 30, job: "back" };
bind(person1, logPerson)();
bind(person2, logPerson)();

function factorial(n) {
  //recursion
  if (n === 1) {
    //базовый случай
    return 1;
  } else {
    return n * factorial(n - 1); // повторяющаяся операция
  }
}

console.log(factorial(4)); //24
// factorial(4) :
// 4* factorial(3)
//3*factorial(2)
//2*factorial(1)
//factorial(1) return 1
//4*3*2*1
//4*3*2
//4*6
//24

const func1 = (a, b) => {
  return () => {
    console.log(a + b);
  };
};
func1(5, 6)(); // func1(5,6)= ()=> console.log(a+b) //11
// Первые скобки вызывают func1 , вторые вызывают то что возвращает return
const func1Copy = (a, b) => () => console.log(a + b); // the same

const outFunc = (x) => {
  //каррирование
  return function innerFunc(y) {
    return x + y;
  };
};
const add10 = outFunc(10);
console.log(add10(15)); // 25
// console.log(outFunc(5)(7))

const sum = (a, b, c, d) => {
  return a + d;
};
const sumForMoon = (d) => sum(10, 10, 10, d); //example
const sumForEarth = (d) => sum(10, 10, 10, d); //example

const sumUniversalCalculator = (a, b, c) => (d) => sum(10, 10, 10, d);
//если d переменное значение, то мы можем отправлять ее в данную функцию, путем каррирования
//первыми заходят abc (они даны) , затем заходит d
console.log(sumUniversalCalculator(10, 10, 10)(10));
