function feedback(){
    let tittle=document.getElementById('title')
    let btn=document.getElementById('btn')
    let name=document.getElementById('name')
    let email=document.getElementById('email')
    let rating=document.getElementById('rating')
    tittle.innerText="Thanks for your feedback...!"
    btn.style.display='none';
    name.style.display='none';
    email.style.display='none';
    rating.style.display='none';

    let output="Thanks for your feedback "+ name.value;
    tittle.innerText = output;


}