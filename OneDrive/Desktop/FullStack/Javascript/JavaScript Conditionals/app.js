// if(true){
//     console.log("I am Revanth kumar Vutukuru")
// }
// else{
//     console.log("Unknown person")
// }

let age=22

if(age>=18 && age<=24){
    console.log("Eligible to vote")
}
else{
    console.log("Not eligible to vote")
}

// we can take input from user in two ways
//=>prompt
//=>using DOM

let role='user'

if(role=='admin' || role=='teacher'){
    console.log("you have access")
}
else{
    console.log("you dont have access")
}

let day='sdjhgw'
if(day=='mon'||day=='wed'||day=='fri'){
    console.log("You have a class Today")
}
else if(day=='tue'||day=='thrs'||day=='sat'||day=='sun'){
    console.log("You dont have class today")
}
else{
    console.log("Invalid day! Please enter correct day")
}


//truthy(true) => Other than falsy all are truthy 
//falsy(false) => 0,-0,NaN,null,undefined,'',""

if(10){
    console.log("truthy")
}
else{
    console.log("Falsy")
}

if(-0){
    console.log("truthy")
}
else{
    console.log("Falsy")
}