// ----------Promise-------------

// In the below example the tasks are excecuted line by line i.e task 1,task 2,task 3.

// console.log('task 1')
// console.log('task 2')
// console.log('task 3')

// In this example firstly task 1 and task 3 executed first and the after task 2 is excuted because task 2 takes 3 sec

// console.log('task 1')
// setTimeout(() => {
//     console.log('task 2')
// }, 3000);
// console.log('task 3')

// promise => task 3 gets executed until and unless task 2 gets ececuted for we use the promise
//            promise makes that the tasks are executed until the previous tasks gets excecuted

// for creation of new promise we use the new keyword
// In promise contains two parameters i.e "resolve" and "reject"

// const demoPromise=new Promise((resolve , reject)=>{
//     let status=false;
//     setTimeout(() => {
//         if(status == true){
//             console.log('download completed');
//             resolve('promise resolved')
//         }
//         else{
//             reject('promise rejected')
//         }
//     }, 3000);
// })

// // if promise is resolve then then() is executed 
// // if promise is reject then catch() is executed
// demoPromise.then((data)=>{   // here data is a parameter
//     console.log('notification sent');
//     console.log(data);
// }).catch((error)=>{         // here error is a parameter
//     console.log(error);
// })

// ----------------fetch()---------------
// JSON => Java Script Object Notation

fetch('https://type.fit/api/quotes').then((data)=>{
    console.log(data) // here the entire data is fetched but, we need only required data for that we use 'json'
})

fetch('https://type.fit/api/quotes').then((data)=>{
    return data.json() //here the data is converted into json format
}).then((data)=>{
    console.log(data)
})


