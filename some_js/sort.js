const name = ["Bob", "Alex", "Donald"];
// console.log(name.sort()) //сортировка без параметров в порядке расположения символов юникода
//Работает мутабельно! и возвращает ссылку на исходный массив
const name1 = ["Donald", "aLex", "Alex", "alex", "игорь", "Юрий"];
// console.log(name1.sort())
const numbers = [1, 5, 23, 1000, 47, 678, 8950, -1];
// console.log(numbers.sort((a,b)=>a-b))

const compareFunc = (a, b) => {
  //>0 - надо переставить
  //<0 - порядок не меняем
  if (a > b) {
    return 999; //если получил положительное, то элементы переставит (метод сорт)
  } else {
    return -0;
  }
};
console.log(numbers.sort(compareFunc));
const compareFunc1 = (a, b) => a - b; //если а больше b , то вернет положит число и поменяет местами

console.log(numbers.reverse()); // перестановка местами

const students = [
  {
    name: "Bob",
    age: 22,
    isMarried: true,
    scores: 95,
  },
  {
    name: "Alex",
    age: 24,
    isMarried: true,
    scores: 89,
  },
  {
    name: "Helge",
    age: 24,
    isMarried: true,
    scores: 90,
  },
  {
    name: "Nick",
    age: 20,
    isMarried: false,
    scores: 120,
  },
  {
    name: "John",
    age: 19,
    isMarried: false,
    scores: 121,
  },
  {
    name: "alex",
    age: 22,
    isMarried: true,
    scores: 89,
  },
]; //массив студентов
const sortByName = (a, b) => {
  if (a.name.toLowerCase() > b.name.toLowerCase()) {
    return 1;
  } else {
    return -1;
  }
};
// with lower/upper case - регистронезависимая сортировка
console.log(students.sort(sortByName));
console.log(
  students.sort((a, b) => {
    a.name.localeCompare(b.name);
  }),
);

console.log(students.sort((a, b) => a.age - b.age)); //по числам, возрасту

//bubble sort
const nums = [23, 45, 12, 11, 99, 34]; // n-1

for (let j = 0; j < nums.length - 1; j++) {
  let isSorted = true;
  for (let i = 0; i < nums.length - 1 - j; i++) {
    if (nums[i] > nums[i + 1]) {
      isSorted = false;
      // let temp = nums[i]
      // nums[i] = nums[i + 1]
      // nums[i + 1] = temp
      [nums[i + 1], nums[i]] = [nums[i], nums[i + 1]];
    }
  }
  if (isSorted) break;
}

console.log(nums);
