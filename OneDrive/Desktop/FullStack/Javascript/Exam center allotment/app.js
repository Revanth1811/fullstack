let students=[]
let examcenters=['kurnool','hyderabad','Chennai','Banglore','Trivendram','vizag','vijaywada','warangal','tirupati','Kochi']

function allotment(){
    let name=document.getElementById('name');
    let email=document.getElementById('email');
    let alert=document.getElementById('alert');
    let sname=document.getElementById('sname');
    let semail=document.getElementById('semail');
    let stexamCenter=document.getElementById('stexamCenter');
    let successNotification=document.getElementById('audio')
    let errorNotification=document.getElementById('audio1')

    function alertAction(){
        alert.classList.remove('d-none')
        // alert.classList.add("alertcss")
        setTimeout(() => {
            alert.classList.add('d-none')
        }, 2500);
    }

    let ifUserexits = students.filter((data)=>{
        return data.email==email.value
     })
     
     if(ifUserexits.length>0){
          alert.innerText="Examcenter already alloted";
          errorNotification.play();
          alertAction();
     }
     else{
         let student={
             name:name.value,
             email:email.value
         }
         students.push(student)
         let random = examcenters[Math.floor(Math.random() * examcenters.length)];
         alert.innerText="Examcenter alloted successfully";
         alertAction();
         successNotification.play();
         sname.innerText=name.value;
         semail.innerText=email.value;
         stexamCenter.innerText=random;
         console.log(students)
         console.log("Exam Center : "+random)
         
     }
}
 