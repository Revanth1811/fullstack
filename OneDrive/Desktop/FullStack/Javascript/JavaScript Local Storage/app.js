// Local Storage => we can store the data loacally in the browser using localstorage
// There are two terms which is used to store and retrive the data i.e getItem() , setItem()
// getItem() => to store the value
// setItem() => to read the values

// localStorage.setItem('name','Revanth')
// localStorage.setItem('name','Bharath')
// console.log(localStorage.getItem('name'))
// let storage=localStorage.getItem('name')
// console.log(storage)
// localStorage.removeItem('name')  // To remove the value form local storage

// localStorage.setItem('shirtprice',399)
let price = localStorage.getItem('shirtprice')
document.getElementById('price').innerText=price
function increaseprice(){
    setTimeout(() => {
        localStorage.setItem('shirtprice',499)
        let price = localStorage.getItem('shirtprice')
        document.getElementById('price').innerText=price
    }, 4000);
}

let body=document.querySelector('body')
let light=document.getElementById('light')
let card=document.querySelector('.card')

// localStorage.setItem('theme','light')

function rendertoggleTheme(){
    let theme=localStorage.getItem('theme');
    if(theme =='light'){
        document.getElementById('light').innerHTML='<i class="bi bi-moon-stars"></i>'
        body.style.backgroundColor='white'
        card.style.color='black'
        light.style.color='black'
        
        
    }
    else{
        document.getElementById('light').innerHTML='<i class="bi bi-brightness-high"></i>'
        body.style.backgroundColor='#383836'
        card.style.color='white'
        light.style.color='white'
        card.style.borderColor='gray'
    }
}

rendertoggleTheme();

function updateTheme(){
    let theme=localStorage.getItem('theme');
    if(theme =='light'){
        localStorage.setItem('theme','dark')
        rendertoggleTheme();
    }
    else{
        localStorage.setItem('theme','light')
        rendertoggleTheme();
    }
}
