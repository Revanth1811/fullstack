//Loops

for(let i=0;i<=10;i++){
    console.log(i)
}

let students=['Revanth','Sai Bharath','Sai Sharan']
for(let i=0;i<3;i++ ){
    console.log(i+" "+students[i])
}

//----------------------------------------------
//Functions => we can execute when ever we want and can execute multiple times by calling the function

function grinder(){
    console.log("Grinding...")
}

grinder() // calling function
grinder() // calling function

//-----------------------------------
function grind(items){
    console.log("Grinding...",items)
}

grind("tomatoes") // calling function
grind("potatoes")

//------------------------------------
function add(a,b){
    console.log(a+b)
}

add(12,13)
add(3415,3251)

//-----------------------------------
function cube(n){
    console.log(n*n*n)
}

cube(4)
cube(12)

//---------Arrow Funtions------------- 

// arrow functions and functins are the same but arrow functions are most preferable to use

cube = (n) =>{
    console.log(n*n*n)
}

cube(5)
