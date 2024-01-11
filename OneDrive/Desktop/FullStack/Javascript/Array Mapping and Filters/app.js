
// forEach

// let users=['Revanth','Bharath','Manohar','Mohan','Venkat']
// for(let i=0;i<users.length;i++){
//     console.log(users[i]);
// }

// let users=['Revanth','Bharath','Manohar','Mohan','Venkat']
// users.forEach(function  (user){   // for each with function
//     console.log(user)
// })

// let users=['Revanth','Bharath','Manohar','Mohan','Venkat']
// users.forEach( (user)=>{            // forEach with arrowfunction
//     console.log(user)
// })

// let num=[1,2,3,4,5,6]
// num.forEach((n)=>{
//     console.log(n)
// })

// Squares of array
// let num1=[1,2,3,4,5,6]
// num1.forEach((n)=>{
//     console.log(n*n)
// })

// map => It stores results in a new array 

// let users=['Revanth','Bharath','Manohar','Mohan','Venkat']

// let result=users.map((user)=>{
//     return user;
// })
// console.log(result)

// let arr=[1,2,3,4,5,6]
// let arrs=arr.map((n)=>{
//     return n*n;
// })
// console.log(arrs)

// Filters => It filters the data on the basis of conditions

// let num=[1,2,3,4,5,7,6,45,56,-32,34]
// let grtnum=num.filter((n)=>{
//     return n>10
// })
// console.log(grtnum)

const users = [
    {
      firstName: 'Aarav',
      lastName: 'Gupta',
      age: 28,
      salary: 60000,
      gender: 'Male',
      email: 'aarav.gupta123@gmail.com'
    },
    {
      firstName: 'Aditi',
      lastName: 'Singh',
      age: 25,
      salary: 50000,
      gender: 'Female',
      email: 'aditi.singh456@yahoo.com'
    },
    {
      firstName: 'Aarushi',
      lastName: 'Shah',
      age: 30,
      salary: 75000,
      gender: 'Female',
      email: 'aarushi.shah789@outlook.com'
    },
    {
      firstName: 'Amit',
      lastName: 'Verma',
      age: 35,
      salary: 90000,
      gender: 'Male',
      email: 'amit.verma234@hotmail.com'
    },
    {
      firstName: 'Deepak',
      lastName: 'Joshi',
      age: 32,
      salary: 80000,
      gender: 'Male',
      email: 'deepak.joshi567@gmail.com'
    },
    {
      firstName: 'Ishaan',
      lastName: 'Kumar',
      age: 27,
      salary: 55000,
      gender: 'Male',
      email: 'ishaan.kumar890@yahoo.com'
    },
    {
      firstName: 'Jasmine',
      lastName: 'Yadav',
      age: 29,
      salary: 70000,
      gender: 'Female',
      email: 'jasmine.yadav123@outlook.com'
    },
    {
      firstName: 'Kiran',
      lastName: 'Patel',
      age: 31,
      salary: 85000,
      gender: 'Female',
      email: 'kiran.patel456@hotmail.com'
    },
    {
      firstName: 'Neha',
      lastName: 'Trivedi',
      age: 26,
      salary: 60000,
      gender: 'Female',
      email: 'neha.trivedi789@gmail.com'
    },
    {
      firstName: 'Rohan',
      lastName: 'Chopra',
      age: 33,
      salary: 95000,
      gender: 'Male',
      email: 'rohan.chopra234@yahoo.com'
    }
  ];
  
//  let males=users.filter((user)=>{
//     return user.gender=='Male'
//  })
// console.log(males)

// let firstname=users.map((user)=>{
//     return user.firstName +" "+ user.lastName
// })
// console.log(firstname)

let tax=users.filter((user)=>{
    return user.salary>60000
}).map((user)=>{
    return{
        name:user.firstName,
        tax:user.salary * .2
    }
})
console.log(tax)
