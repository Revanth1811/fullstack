
// function cardmousein(){
//     console.log("mouse  is inside the card")
// }
// function cardmouseout(){
//     console.log("mouse  is outside the card")
// }
// function clicked(){
//     console.log('mouse is clicked')
// }



function submit(){
    let data=document.getElementById('data')
    

    let info=data.value;
    let count=info.length;
    
    if(count<=3){
        data.classList.add('data-danger');
        data.classList.remove('data-success');
    }
    else{
        data.classList.add('data-success')
        data.classList.remove('data-danger');
    }
}
