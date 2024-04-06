//promise/promise all, async await

// let pr1 = new Promise((res, rej) => { //промис возвращает значение колбэка
//     //либо резолв либо реджект
//     setTimeout(() => {
//         res(console.log('pr1 resolved'))
//     }, 1000)
// })
// pr1
//     .then((data) => {   // then1 then3 then2
//         console.log('then1')
//     })
//     .then((data) => {
//          new Promise((res) => { //if want 1 2 3 , return newPromise
//             setTimeout(() => {
//                 res(console.log('then2'))
//             }, 2000)
//         })
//     })
//     .then(() => {
//         console.log('then3')
//     })

// const promise1 = fetch('https://google.com/query=js');
// const promise2 = fetch('https://yahoo.com/query=js');
// const promise3 = fetch('https://duckduckgo.com/query=js');
//
// const superPromise = Promise.all([promise1, promise2, promise3]);
//
// superPromise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
//
// const superPromise2 = Promise.allSettled([promise1, promise2, promise3]);
//
// superPromise2.then((data) => {
//   console.log(data);
// });

// const superPromise3 = Promise.race([promise1, promise2, promise3]);
//
// superPromise3
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

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

const someFunction = async () => {
  try {
    return await fetch("https://google.com/query=js");
  } catch (err) {
    console.log("something went wrong", err);
  }
};

someFunction().then((data) => {
  console.log(data);
});
