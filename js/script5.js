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


let y={
    name:"y",
    surname:'yy',
    namea:"Deepak Prajapati",
    "friends":["adeoa",'daml','eofjwe','dlfsdp'],

    myfuncA:function(){
        return this.name;
    },

    myfunc:()=>{
        return this.namea;
    },
    
}

console.log(y);
console.log(y.myfuncA());
console.log(y.myfunc());

/*
    for(expression;condition,increment/decrements){
        //code here
    }
*/

for(let i=0;i<y.friends.length;i++){
    console.log(y.friends[i]);
}

//foreach loop
let yy=['a','d','dekld',"xm;sa","slmda;s"];

yy.forEach(element => {
    console.log(element);
});