// promise

//PROMISE PART 1

let pr1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(Math.random()), 3000);
});
// pr1.then(res => console.log('promise resolved  ' + res))

let pr2 = new Promise((resolve, reject) => {
  let i = 0;
  setInterval(() => {
    i++;
    resolve(i);
  }, 1000);
});
// pr2.then(res=> console.log(res)) /// RESOLVE only 1 time

let pr3 = new Promise((resolve) => {
  let data = {
    cities: [{ title: "Minsk" }, { title: "Kiev" }],
    website: "it-kamasutra.com",
  };
  resolve(data);
});

pr3
  .then((data) => data.website)
  .then((website) => {
    console.log(website);
  });

//=======//=======//=======//=======//=======//=======//=======//=======//=======//=======//=======

// {
//   status: pending || fulfilled || rejected
//           ожидание // успешно // с ошибкой
//   result : resolved || rejected
// }

// const server = {
//     getData() {
//         return new Promise((res, rej) => {
//             setTimeout(() => {
//                 res('data from server');
//                 // rej('THIS IS FAIL AND NO DATA');
//             }, 1000);
//         });
//     },
// };
// const pr = server.getData()
// // console.log('Promise', pr)
//
// pr.then((data) => {
//     console.log('then1', data)
//     const err=console(a) // ошибка
//     return 10
// })
//     .finally(()=> {
//         console.log('finally', err)
//     })
//     .then((data2) => {
//         console.log('then2', data2)
//         return 10
//     })
//     .then((data3) => {
//         console.log('then3', data3)
//         return 10
//     })
//     .catch((err) => { // предыдущие зены пропускаются , если ошибка была еще раньше
//         console.log('catch1', err)
//     })
//     .then((data4) => { // зен4 зарезолвится(тк катч возвр промис) но ничего не отобразит
//         console.log('then4', data4)
//         return 10
//     })
//     .then((data5) => { // отобразится
//         console.log('then5', data5)
//         return 10
//     })
//     .catch((err) => {  // не отобразится тк ошибки не было
//         console.log('catch2', err)
//     })
//
//
// fetch('https://api.github.com/users/PetukhovArt')
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//     })
//     .catch(error => console.error(error));

//
// function getData () {
//     const pr=new Promise((resolve, reject)=> {
//       setTimeout(()=> {
//         fetch('https://api.github.com/users/PetukhovArt')
//             .then(response=> response.json())
//             .then(data=> console.log(data))
//             .catch(error=> console.log('ERROR , NO DATA'))
//       }, 2000)
//     })
//   }
// getData()

//
// const promiseRandomiser = new Promise((res, rej)=> {
//   const randomNumber= Math.floor(Math.random() * 10) + 1;
//   if (randomNumber < 5 ) {
//     res('DATA : '+ randomNumber)
//   } else {
//     rej(new Error('Number more than 5'))
//   }
// })
//
// promiseRandomiser
//     .then(number=> console.log(number))
//     .catch(error=> console.error(error))
//

// pr.then((title) => {
//     console.log('then1');
// return 10;
// })
// .then((data) => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(console.log('then2'));
//       // rej('something went wrong');
//     }, 3000);
//   });
// })
// .then((data) => {
//   const pr = new Promise((res, rej) => {
//     setTimeout(() => {
//       res(console.log('then3'));
//       // rej('something went wrong');
//     }, 4000);
//   });
// })
// .catch((err) => {
//   console.log(err);
// })
// .then(() => {
//   console.log('4');
// })
// .finally(() => {
//   console.log('finally');
// });

// import fetch from 'node-fetch';

// const promise1 = fetch('https://googfle.com/query=js');
// const promise2 = fetch('https://yahoo.com/query=js');
// const promise3 = fetch('https://duckduckgo12.com/query=js');
//
// const superPromise = Promise.all([promise1, promise2, promise3]);
//
// superPromise
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// const superPromise2 = Promise.allSettled([promise1, promise2, promise3]);

// superPromise2.then((data) => {
//   console.log(data);
// });

// const superPromise3 = Promise.race([promise1, promise2, promise3]);

// superPromise3
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const promise1 = fetch('https://googfle.com/query=js');
// const promise2 = fetch('https://yahoo.com/query=js');
// const promise3 = fetch('https://duckduckgo12.com/query=js');

// const someFunction = async () => {
//   try {
//     const dataFromGoogle = await fetch('https://google.com/query=js');
//     const dataFromYahoo = await fetch('https://yahoo.com/query=js');
//     const dataFromDuck = await fetch('https://duckduckgo.com/query=js');
//     return dataFromGoogle;
//   } catch (err) {
//     console.log('something went wrong', err);
//   }
// };
//
// someFunction().then((data) => {
//   console.log(data);
// });

//напишите функцию delay (ms) , которая возвращает промис,
//переходящий в состояние "resolved" через ms миллисекунд
// function delay (ms) {
//         return new Promise ((res, rej)=> {
//             setTimeout(()=>{
//                 res('promise resolved in  '+ ms)
//             }, ms | undefined)
//         })
// }
// delay(2000)
//     .then((log)=> console.log(log))
//     .catch(err=> 'ERROR')

//короткий вариант
// const delay=(ms)=> new Promise((res,rej) => {
//     setTimeout(res, ms)
// })
//
// let ms=1999
// delay(ms).then(() => {
//     console.log('promise resolved in '+ ms+ ' ms');
// });

// promise

// {
//   status: pending || fulfilled || rejected
//           ожидание // успешно // с ошибкой
//   result : resolved || rejected
// }

// const server = {
//     getData() {
//         return new Promise((res, rej) => {
//             setTimeout(() => {
//                 res('data from server');
//                 // rej('THIS IS FAIL AND NO DATA');
//             }, 1000);
//         });
//     },
// };
// const pr = server.getData()
// // console.log('Promise', pr)
//
// pr.then((data) => {
//     console.log('then1', data)
//     const err=console(a) // ошибка
//     return 10
// })
//     .finally(()=> {
//         console.log('finally', err)
//     })
//     .then((data2) => {
//         console.log('then2', data2)
//         return 10
//     })
//     .then((data3) => {
//         console.log('then3', data3)
//         return 10
//     })
//     .catch((err) => { // предыдущие зены пропускаются , если ошибка была еще раньше
//         console.log('catch1', err)
//     })
//     .then((data4) => { // зен4 зарезолвится(тк катч возвр промис) но ничего не отобразит
//         console.log('then4', data4)
//         return 10
//     })
//     .then((data5) => { // отобразится
//         console.log('then5', data5)
//         return 10
//     })
//     .catch((err) => {  // не отобразится тк ошибки не было
//         console.log('catch2', err)
//     })
//
//
// fetch('https://api.github.com/users/PetukhovArt')
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//     })
//     .catch(error => console.error(error));

//
// function getData () {
//     const pr=new Promise((resolve, reject)=> {
//       setTimeout(()=> {
//         fetch('https://api.github.com/users/PetukhovArt')
//             .then(response=> response.json())
//             .then(data=> console.log(data))
//             .catch(error=> console.log('ERROR , NO DATA'))
//       }, 2000)
//     })
//   }
// getData()

//
// const promiseRandomiser = new Promise((res, rej)=> {
//   const randomNumber= Math.floor(Math.random() * 10) + 1;
//   if (randomNumber < 5 ) {
//     res('DATA : '+ randomNumber)
//   } else {
//     rej(new Error('Number more than 5'))
//   }
// })
//
// promiseRandomiser
//     .then(number=> console.log(number))
//     .catch(error=> console.error(error))
//

// pr.then((title) => {
//     console.log('then1');
// return 10;
// })
// .then((data) => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(console.log('then2'));
//       // rej('something went wrong');
//     }, 3000);
//   });
// })
// .then((data) => {
//   const pr = new Promise((res, rej) => {
//     setTimeout(() => {
//       res(console.log('then3'));
//       // rej('something went wrong');
//     }, 4000);
//   });
// })
// .catch((err) => {
//   console.log(err);
// })
// .then(() => {
//   console.log('4');
// })
// .finally(() => {
//   console.log('finally');
// });

// import fetch from 'node-fetch';

// const promise1 = fetch('https://googfle.com/query=js');
// const promise2 = fetch('https://yahoo.com/query=js');
// const promise3 = fetch('https://duckduckgo12.com/query=js');

// const superPromise = Promise.all([promise1, promise2, promise3]);

// superPromise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const superPromise2 = Promise.allSettled([promise1, promise2, promise3]);

// superPromise2.then((data) => {
//   console.log(data);
// });

// const superPromise3 = Promise.race([promise1, promise2, promise3]);

// superPromise3
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const promise1 = fetch('https://googfle.com/query=js');
// const promise2 = fetch('https://yahoo.com/query=js');
// const promise3 = fetch('https://duckduckgo12.com/query=js');

// const someFunction = async () => {
//   try {
//     const dataFromGoogle = await fetch('https://google.com/query=js');
//     const dataFromYahoo = await fetch('https://yahoo.com/query=js');
//     const dataFromDuck = await fetch('https://duckduckgo.com/query=js');
//     return dataFromGoogle;
//   } catch (err) {
//     console.log('something went wrong', err);
//   }
// };
//
// someFunction().then((data) => {
//   console.log(data);
// });

//напишите функцию delay (ms) , которая возвращает промис,
//переходящий в состояние "resolved" через ms миллисекунд
// function delay (ms) {
//         return new Promise ((res, rej)=> {
//             setTimeout(()=>{
//                 res('promise resolved in  '+ ms)
//             }, ms | undefined)
//         })
// }
// delay(2000)
//     .then((log)=> console.log(log))
//     .catch(err=> 'ERROR')

//короткий вариант
const delay = (ms) =>
  new Promise((res, rej) => {
    setTimeout(res, ms);
  });

let ms = 1999;
// delay(ms).then(() => {
//     console.log('promise resolved in ' + ms + ' ms');
// });
// setTimeout(() => pr.then(() => console.log('promise resolved in ...')), 1000)

// let pr = new Promise((resolve) => {
//     let data = {
//         cities: [{title: "Minsk"}, {title: "Kiev"}],
//         website: "it-kamasutra.com"
//     };
//     resolve(data);
// });
//
// pr.then(data => {
//     console.log(data);
//     return data.website
// })
//     .then(website => {
//         console.log(website);
//     })

// const promise1 = Promise.resolve(42);
// const promise2 = Promise.reject("Ошибка");
// const promise3 = new Promise((resolve) =>
//     setTimeout(resolve, 1000, "Завершено")
// );
//
// Promise.race([promise1, promise2, promise3])
//     .then((results) => {
//         if (Array.isArray(results)) {
//             results.forEach((result) => {
//                 if (result.status === "fulfilled") {
//                     console.log("Успех:", result.value);
//                 } else if (result.status === "rejected") {
//                     console.log("Ошибка:", result.reason);
//                 }
//             });
//         } else console.log(results)
//
//     })
//     .catch((error) => {
//         console.log("Произошла ошибка:", error);
//     });
