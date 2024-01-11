
let foodItems=document.querySelectorAll('.card')
foodItems.forEach((item)=>{
    item.addEventListener('click',()=>{
        if(item.dataset.price<=100){
            alert(item.dataset.title+"Ordered Successfully\n"+"your Order is less than 100rs\n"+"Delivery Charge-Rs 40\n"+"price-"+item.dataset.price);  
        }
        else{
            alert(item.dataset.title+"Ordered Successfully\n"+"price-"+item.dataset.price);
        }
    })
})