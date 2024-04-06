//1. Создайте полную (глубокая) копию объекта user
let deepCopyUser = { ...user, friends: [...user.friends] }; //не понятно

//2. Создайте полную (глубокая) копию объекта superUser
let deepCopySuperUser = {
  ...superUser,
  friends: superUser.friends.map((el) => ({ ...el })),
}; //не понятно

// Внесите  следующие изменения в объект superUser:
//3.Удалите объект с id=1 из массива  friends
let superUserCorrect1 = {
  ...superUser,
  friends: superUser.filter((el) => el.id !== 1),
};
console.log(superUserCorrect1);

//4. поменяйте объекту с id=2 из массива  friends значение св-ва name на "Donald"
let superUserCorrect2 = {
  ...superUser,
  friends: superUser.map((el) =>
    el.id === 2 ? { ...el, name: "Donald" } : el,
  ),
};
console.log(superUserCorrect2);

//5. добавьте в список друзей нового друга
const newFriend = {
  id: 5,
  name: "Nick",
  age: 27,
  isMarried: false,
  scores: 99,
};
let superUserCorrect3 = {
  ...superUser,
  friends: [...superUser.friends, newFriend],
};
console.log(superUserCorrect3);

//6. Полная (глубокая) копия массива students (map)
let deepCopyStudents = students.map((el) => ({ ...el }));
console.log(deepCopyStudents);

//7. Отсортируйте КОПИЮ массива deepCopyStudents по алфавиту (sort)
let sortedByName = [...deepCopyStudents].sort((a, b) =>
  a.name.localeCompare(b.name),
);
console.log(sortedByName);

//8. Отсортируйте deepCopyStudents по успеваемости (лучший идёт первым)(sort)
let sortedByScores = deepCopyStudents.sort((a, b) => b.scores - a.scores);
console.log(sortedByScores);

//9. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let bestStudents = students.filter((st) => st.scores > 99);
console.log(bestStudents);

//10. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

let topStudents = sortedByScores.splice(0, 3);
console.log(topStudents);

//11. Объедините массивы deepCopyStudents и topStudents так,
//чтоб сохранился порядок сортировки (spread-оператор || concat)
let newDeepCopyStudents = [...topStudents, ...deepCopyStudents];
console.log(newDeepCopyStudents);

//12. Сформируйте массив холостых студентов (filter)
let notMarriedStudents = students.filter((el) => !el.isMarried);
console.log(notMarriedStudents);

//13. Сформируйте массив имён студентов (map)
let studentsNames = students.map((el) => el.name);
console.log(studentsNames);

//14. Добавьте всем студентам свойство "isStudent" со значением true (map)
let trueStudents = students.map((el) => ({ ...el, isStudent: true }));
console.log(trueStudents);

//15. Nick женился. Выполните соответствующие преобразование массива students (map)
let studentsWithMarriedNick = students.map((el) =>
  el.name === "Nick" ? { ...el, isMarried: true } : el,
);
console.log(studentsWithMarriedNick);

// И поднимаем руку!!!!

//16. Найдите студента с самым высоким баллом не используя методы массивов и Math.max()*
let bestStudent = students[0];
for (let i = 1; i < students.length; i++) {
  if (students[i].scores > bestStudent.scores) {
    bestStudent = students[i];
  }
}
console.log(bestStudent);

//17. Найдите сумму баллов всех студентов (reduce)
let scoresSum = students.map((el) => el.scores).reduce((sum, el) => sum + el);
console.log(scoresSum);

// 14. Д.З.:
// Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива students,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
const addFriends = (students) => {
  const friendList = students.map((el) => el.name);
  return students.map((el) => ({
    ...el,
    friends: students.map((el) => el.name).filter((name) => name !== el.name),
  }));
};
console.log(addFriends(students));

// 15. Д.З.: Напишите функцию getBestStudents, которая принимает параметром
// массив students  и количество лучших студентов, которое надо получить в
// новом массиве. Если второго параметра нет, то по умолчанию возвращает лучшего студента
// getBestStudents(students) => {name: "Nick", age: 20, isMarried: false, scores: 120}
// getBestStudents(students, 3) => [{...}, {...}, {...}]
// getBestStudents(students, 10) => [{}, {}, ...., {}, null, null, null, null ]
