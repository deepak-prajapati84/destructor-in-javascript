// JS Object { }


/*
    let student={
       1. p:v,
       2. function(){
        }
    }

*/
let student={
    "name":"Name",
    'surname':'surname',
    friend:["Deepak",'Anjali',"Prajapati"],
    teacher:[{
        name:'Rajan',
        contact:"405293423"
    },
    {
        "name":'Abhishek',
        contact:"432138137"
    }]
}

let v=["Students",student];
console.log(v);

console.log(student.name);
console.log(student.friend[0]);
console.log(student);

console.log(student.teacher[0]);
console.log(student.teacher[0].name);