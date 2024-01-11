let user=['revanth','revanth@gmail.com','Kurnool']
console.log(user)
user[0]='Revanth Kumar'
console.log(user)
user.push('Andhra Pradesh')
console.log(user)
user.pop()
console.log(user)
user.splice(1,1,'revanthkumar951@gmail.com')
console.log(user)
let student={
    rollno:'19AT1A05B0',
    name:'Vutukuru Revanth Kumar',
    age:22,
    email:'revanthkumar9512gmail.com',
    hobbies:['Dancing','Watching TV','reading books'] //Array in Object
}
console.log(student)
console.log(student.hobbies)
let employee={
    id:'2a5f0632d',
    name:'Revanth',
    age:'22',
    address:{                                       //Object in Object
        address:'85-184-5A , Shareen Nagar',
        City:'Kurnool',
        state:'Andhra Pradesh',
        pincode:518002
    }
}
console.log(employee)
console.log(employee.address)