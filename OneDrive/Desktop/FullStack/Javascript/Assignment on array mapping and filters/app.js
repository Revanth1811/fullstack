// define an array users containing at least 15 objects where each object represents 
// a user with the following properties name age Gender and location

let users = [
    {
      name: "Alice",
      age: 25,
      gender: "Female",
      location: "New York"
    },
    {
      name: "Bob",
      age: 11,
      gender: "Male",
      location: "Los Angeles"
    },
    {
      name: "Charlie",
      age: 28,
      gender: "Male",
      location: "Chicago"
    },
    {
      name: "Diana",
      age: 14,
      gender: "Female",
      location: "Miami"
    },
    {
      name: "Ella",
      age: 35,
      gender: "Female",
      location: "Seattle"
    },
    {
      name: "Frank",
      age: 27,
      gender: "Male",
      location: "Houston"
    },
    {
      name: "Grace",
      age: 17,
      gender: "Female",
      location: "San Francisco"
    },
    {
      name: "Henry",
      age: 29,
      gender: "Male",
      location: "Boston"
    },
    {
      name: "Ivy",
      age: 26,
      gender: "Female",
      location: "Denver"
    },
    {
      name: "Jack",
      age: 31,
      gender: "Male",
      location: "Atlanta"
    },
    {
      name: "Kate",
      age: 13,
      gender: "Female",
      location: "Dallas"
    },
    {
      name: "Liam",
      age: 24,
      gender: "Male",
      location: "Phoenix"
    },
    {
      name: "Mia",
      age: 27,
      gender: "Female",
      location: "Portland"
    },
    {
      name: "Noah",
      age: 33,
      gender: "Male",
      location: "Austin"
    },
    {
      name: "Olivia",
      age: 10,
      gender: "Female",
      location: "Washington D.C."
    }
  ];

//  let adult= users.map((user)=>{
//         if(user.age>=18){
//             return true
//         }
//         else{
//             return false
//         }
//   })
//   console.log(adult)

// let isAdult=users.filter((user)=>{
//     if(user.age>=18){
//         return true;
//     }
//     else{
//         return false;
//     }
// })

// let adultUsers= isAdult.filter((user)=>{
//     return user
// })
 
// console.log(adultUsers)

// let getFullName=users.map((user)=>{
//     return user.name +" "+user.location
// }).
// console.log(getFullName)

// let FullName=users.map((user)=>{
//     return user.name
// })
// console.log(FullName)


let filterByGender = users.filter((user) => {
    if(user.gender == "Male" || user.gender == "Female") {
        return true;
    } else {
        return false;
    }
})


let femaleUsers=filterByGender.filter((user)=>{
    return user.gender=='Female'
}).map((user)=>{
    return user.name
})
console.log(femaleUsers)






  