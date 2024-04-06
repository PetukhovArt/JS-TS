//JS12

// http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coMSkKc2V0VGltZW91dChmdW5jdGlvbiAoKXsKICAgIGNvbnNvbGUubG9nKDIpCn0sIDUwMDApCmNvbnNvbGUubG9nKDMpCmNvbnNvbGUubG9nKDQp!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
//jsv9000.app

// console.log(1)
// setTimeout(function (){
//     console.log(2)
// }, 0)
// console.log(3)
// console.log(4)
// //1 3 4 2 ,
//
// /////========================
// console.log(1)
// function log1() {
//     console.log('log1')
//     function log2() {
//         console.log('log2')
//         function log3() {
//             console.log('log3')
//         }
//         log3()
//     }
//     log2()
// }
// log1()
// console.log(3) // 1 1 2 3 3
// /////========================
// console.log(1)
// setTimeout(function (){
//     console.log('timeout1')
// }, 5000)
// setTimeout(function (){
//     console.log('timeout2')
// }, 10000)
// setTimeout(function (){
//     console.log('timeout3')
// }, 1000)
// console.log(3) // 1 3  timeout3 timeout2 timeout1

// Рекурсивный промис, лог из таймаута никогда не выполнится,
// так как промисы будут переполнять очередь микротасок
function recursivePromise() {
  return Promise.then(() => {
    console.log("unstoppable promise");
    recursivePromise(Promise.resolve());
  });
}

recursivePromise(Promise.resolve());
setTimeout(() => console.log("timeout"), 0);

// бесконечный инкремент цикла (синхронные задачи) , очередь промисов никогда не выполнится
for (let i = 0; i < Infinity; i++) {
  console.log(i);
  Promise.resolve().then(() => console.log(i));
}
