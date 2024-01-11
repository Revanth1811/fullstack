// function test (){
//     console.log("button clicked");
// }

// ----------target using id's-------------

// let btn=document.getElementById('btn');
// btn.addEventListener('click',()=>{
//     console.log("button is clicked")
// })

//----------- using parameter---------------

// let btn=document.getElementById('btn');
// btn.addEventListener('click',(e)=>{    // Here 'e' is a parameter
//     console.log(e.target.innerText)
// })

//-----------target using class-------------

// let btn=document.querySelector('.btn');  // by using querySeloctor we can select any id's ,classes and anything we want
// btn.addEventListener('click',()=>{
//     console.log("button is selected ")
// })

// -------using parameter with class-------

// let btn=document.querySelector('.btn');          // here .btn is used because it is a class, for classes we use " . "
// btn.addEventListener('click',(event)=>{         //Here 'event' is a parameter
//     console.log(event.target.innerText)
// })

// -------Multiple Classes and id's, Then we use the "querySelectorAll()"----------

// let btns=document.querySelectorAll('#btn');            //Here #btn is used because it is id , for id's we use " # " Symbol
// btns.forEach((b)=>{
//     b.addEventListener('click',(e)=>{
//         console.log(e.target.innerText,'is clicked')
//     })
// })

//------small project on Add Event listeners ----------

let foodItems=document.querySelectorAll('.card');
foodItems.forEach((food)=>{
    food.addEventListener('click',(e)=>{
        console.log(food.dataset.title,food.dataset.price)
    })
})




