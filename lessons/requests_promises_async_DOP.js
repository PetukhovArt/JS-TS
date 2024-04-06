// function fetchData() {
//     const token = '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';
//     const apiUrl = 'https://4anyxa.pythonanywhere.com/all_goods/';
//
//     fetch(apiUrl, {
//         headers: {
//             'Authorization': `Token ${token}`
//         }
//     })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => console.log(data))
//         .catch(error => console.error('Error:', error));
// }
//
// fetchData()

const gribURL = "https://4anyxa.pythonanywhere.com/all_goods/";
const gribURL2 = "https://4anyxa.pythonanywhere.com/all_goods_bez_regi/";

// const pr1 = fetch(gribURL2)
// pr1
//     .then(response => response.json())
//     .then(data => {
//         console.log(
//             data.map(el=> el.name)
//         )
//     })

// const pr2= fetch(gribURL2, {
//     method: 'POST',
//     body: JSON.stringify({
//         name: 'LOS BAREBUH',
//         description: 'JRI SIKEL',
//         add_id: 666,
//         images: 'SIKEL',
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json));

// fetch('https://4anyxa.pythonanywhere.com/all_goods_bez_regi/26', {
//     method: 'DELETE',
// });

// const pr3 = fetch('https://4anyxa.pythonanywhere.com/all_goods_bez_regi/27/', {
//     method: 'PUT',
//     body: JSON.stringify({
//         name: 'SIKEL THE BEST FOOD IN THE WORLD',
//         description: 'TASTY SIKEL WITH SUGAR',
//         images: 'IT WILL BE A PIECE OF SIKEL HERE MOTHER FUCKER!!!',
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
// pr3
//     .then((response) => response.json())
//     .then((json) => console.log(json))
//     .catch(err => console.log(err))

// const promiseZaglushka= Promise.resolve(100)
// console.log(promiseZaglushka)
//
// const pr1 = fetch('https://jsonplaceholder.typicode.com/posts/2')
// pr1
//     .then(response => response.json())
//     .then(response =>
//         {
//             console.log('then 1, Promise resolved and response sent to then2')
//             return response
//         }
//     )
//     .catch(err=> console.log('FETCH REJECTED=====================',err))
//     .then(data=> {
//         console.log('then 2,  DATA TEXT:  ', data.title)
//         return data.id
//     })
//     .then(dataId=> console.log('then 3, DATA ID: ',dataId))
//
// const getDataFunction=(url)=> {
//     return fetch(url)
//         .then(res=> res.json())
//         .then(res=> res.body)
// }
// getDataFunction('https://jsonplaceholder.typicode.com/posts/3')
//     .then(post2body=> setTimeout(()=>console.log('functionGetText: ',post2body),1000))

// const getDataAsync = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts/3')
//     const dataJS = await response.json()
//     const dataTitle= await dataJS.title
//     const dataBody= await dataJS.body
//     console.log(dataTitle, dataBody)
// }
// getDataAsync()

const promise = new Promise((resolve, reject) => {
  resolve(Math.random());
});
promise.then(console.log);
