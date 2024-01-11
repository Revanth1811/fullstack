let students=[]
function allotment(){
    let name=document.getElementById('name');
    let email=document.getElementById('email');

    let student={
        name:name.value,
        email:email.value
    }

    students.push(student);
    console.log(students)
}