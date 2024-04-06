let users = {
  101: { id: 101, name: "bibas" },
  1: { id: 101, name: "Pavel" },
  124354: { id: 124354, name: "Andrei" },
  1454545: { id: 1454545, name: "Valera" },
  15454: { id: 15454, name: "Pes" },
};
users["privet pes"] = "zdarova barebuh"; //add user

let user = { id: 100500, name: "igor" };
users[user.id] = user; //add user on ID
delete users[user.id]; //delete user
console.log(users["100500"]); //получение значения по ключу
console.log(Object.keys(users)); //получение ключей
//операция по обращению к объекту (ассоциативный массив) по ключу ( ключ= айди) намного быстрее чем
//обращение к айдишнику массива, так как требуется итерирование по кол-ву объектов в массиве

let users = ["Artem", "Denis", "Bebra"];
console.log(users["map"]((el) => el.toUpperCase()));

let userObj = {
  1: "Artem",
  2: "Denis",
  3: "Rega",
  privetos: "kak dela bareba",
};
console.log(userObj["privetos"]);
console.log(Object.keys(userObj) + " : this is array of keys of array userObj");
console.log(
  Object.values(userObj) + " : this is array of values of array userObj",
);

const students = [
  { id: 1, name: "Bob" },
  { id: 2, name: "Alex" },
  { id: 3, name: "Ann" },
  { id: 4, name: "Charley" },
];

const newUser = { id: 5, name: "Bebra" };

const friends = {
  1: ["Oliver", "Jack", "Oscar"],
  2: ["Jack", "Lewis", "Thomas"],
  3: ["William", "Michael", "Lewis"],
  4: ["Oscar", "James", "William"],
};
//QUIZ
// friends[students[1].id][2] // Thomas
// Имеют ли студенты students[1] и students[3] общих друзей? // false
// friends[3][1]? // Michael
//friends[students[0].id][3] // undefined

console.log(friends[students[1].id][2]);
friends[newUser.id] = newUser; //add item to friends
delete friends[5];
console.log(friends);

console.log(friends[students[1].id]);
console.log(friends[students[3].id]);
