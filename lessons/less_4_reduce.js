const todolistId_1 = "23hf-76jh";
const todolistId_2 = "98kh-md89";

const todoLists = [
  {
    id: todolistId_1,
    title: "What to learn",
    filter: "all",
  },
  {
    id: todolistId_2,
    title: "What to buy",
    filter: "all",
  },
];

const getKey = () => "userName"; // [getKey()] : [] ключ равен 'userName'
const tasks = {
  [todolistId_1]: [
    //вычисляемое свойство объекта
    { id: 1, title: "html", isDone: true },
    { id: 2, title: "css", isDone: true },
    { id: 3, title: "js", isDone: false },
  ],
  [todolistId_2]: [
    //вычисляемое свойство объекта пример : [10+30]: []  ключ будет равен 40
    { id: 4, title: "bread", isDone: true },
    { id: 5, title: "milk", isDone: true },
    { id: 6, title: "chicken", isDone: false },
  ],
};
console.log(tasks[todoLists[0].id][1].title); // (tasks[todolistId_1][1].title) 2ой вариант

//reduce
const nums = [2, 4, 6, 3, 5];

nums.reduce((acc, el) => {
  return acc + el;
}, 0);

nums.reduce((acc, el) => (acc > el ? acc : el));
//2,4 => 4  ; 4,6 => 6 ; 6,3=>6; 6,5=>6 // return 6 - max value

let students = [
  { id: 1, name: "Bob", age: 22, isMarried: true, scores: 85 },
  {
    id: 2,
    name: "Alex",
    age: 21,
    isMarried: true,
    scores: 89,
  },
  {
    id: 3,
    name: "Nick",
    age: 20,
    isMarried: false,
    scores: 120,
  },
  {
    id: 4,
    name: "John",
    age: 26,
    isMarried: false,
    scores: 100,
  },
];

const newData = {
  1: {
    id: 1,
    name: "Bob",
    age: 22,
    isMarried: true,
    scores: 85,
  },
  2: {
    id: 2,
    name: "Alex",
    age: 21,
    isMarried: true,
    scores: 89,
  },
};
const data = students.reduce((acc, el) => {
  acc[el.id] = { ...el };
  delete acc[el.id].id;
  return acc;
}, {});
console.log(data);
