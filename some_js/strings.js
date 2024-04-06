//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель,
// а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"

function repeatString(str, num, x) {
  let arr = [];
  for (let i = 0; i < num - 1; i++) {
    arr.push(str + x);
  }
  return arr.join("") + str;
}

console.log(repeatString("yo", 3, " "));
console.log(repeatString("yo", 3, ","));

//2. Реализуйте функцию, которая принимает параметром сторку и подстроку,
// а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.

const checkStart = (str, sub) => str.slice(0, sub.length).toLowerCase() === sub;
const checkStart1 = (str, sub) =>
  str.toLowerCase().startsWith(sub.toLowerCase());
const checkStart3 = (str, sub) => {
  let a = new RegExp(`${sub}`, "i");
  return a.test(str);
};

console.log(checkStart("Incubator", "inc")); //=> true
console.log(checkStart("Incubator", "yo")); //=> false

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов),
// а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.

const truncateString = (str, n) => str.slice(0, n) + "...";

console.log(truncateString("Всем студентам инкубатора желаю удачи!", 10)); //=> "Всем студе..."

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое
// короткое слово в предложении, если в параметрах пустая строка или не строка, то возвращает null.

const getMinLengthWord = (str) =>
  typeof str === "string" && str !== "" //string and NOT ""
    ? str.split(" ").reduce((a, b) => (a.length <= b.length ? a : b))
    : null;
// to ARR, then if a<b return a (result the shortest str)
console.log(getMinLengthWord("Всем студентам инкубатора желаю удачи.")); //=> "Всем"
console.log(getMinLengthWord("")); //=> null
console.log(getMinLengthWord(123)); //=> null

//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение,
// где все слова написаны строчными, но начинаются с заглавных букв.

const setUpperCase = (str) =>
  str
    .toLowerCase()
    .split(" ")
    .map((el) => el[0].toUpperCase() + el.slice(1))
    .join(" ") + "!";

console.log(setUpperCase("всем стУдентам инкуБатора Желаю удачИ")); //=> "Всем Студентам Инкубатора Желаю Удачи!"

// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учёта
// повторяющихся символов.

// * с учётом повторяющихся символов в подстроке

const isIncludes = (str, sub) => {
  let strArr = str.toLowerCase().split("");
  let subArr = sub.toLowerCase().split("");
  return (
    strArr.filter((el) => subArr.includes(el)).join("") === sub.toLowerCase()
  );
  // return subArr.every(el => strArr.includes(el))
};
console.log(isIncludes("Incubator", "Cut")); //=> true
console.log(isIncludes("Incubator", "table")); //=> false
console.log(isIncludes("Incubator", "inbba")); //=> true //*false
console.log(isIncludes("Incubator", "inba")); //=> true  //*true
console.log(isIncludes("Incubator", "Incubatorrr")); //=> true //*false
