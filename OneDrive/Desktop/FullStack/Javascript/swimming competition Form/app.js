
let users=[]
let userContainer=document.getElementById('userContainer');
let alertDiv = document.getElementById('alert')
function render(){
    userContainer.innerHTML = "";
    for(let i=0; i<users.length; i++){
        let div = document.createElement('div');
        let name = document.createElement('div');
        let age = document.createElement('div');

        div.classList.add('user')
        name.innerText = users[i].name;
        age.innerText = users[i].age;

        userContainer.appendChild(div);
        div.appendChild(name);
        div.appendChild(age)

    }
    
}

function showAlert(){
    alertDiv.classList.remove('d-none');
    alertDiv.classList.add('alert1');

    setTimeout(()=>{                            // setTimeout the code is executed after the mentiond time
        alertDiv.classList.remove('alert1');
        alertDiv.classList.add('d-none');
    }, 3000)// 3000 => 3sec

}

function register(){
    let nameInput = document.getElementById('name');
    let ageInput = document.getElementById('age');

    
    let user={
        name: nameInput.value,
        age: Number(ageInput.value)
    }

    if(user.age>=16 && user.age<=18){
        users.push(user);
        alertDiv.innerText='User added Successfully!'
        showAlert();
        render();
    }
    else{
        alertDiv.innerText='User is not eligible to participate'
        showAlert();
    }
    
}