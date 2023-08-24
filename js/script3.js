function add(z,y){
    // console.log(z+y);
    return z+y;
}

// add(20,50);
let a=add(20,40);

console.log(a);

let r=add(30,add(30,add(20,add(30,100))));

console.log(r);



function aw(){
    return 20;
}

function b(){
    return 50;
}


function c(x,y){
    return x+y;
}

let aaa=c(aw(),b());

console.log(aaa);


const arr=["Deepak","Prajpati","Anjali","Suman","Aman"];

for(let i=0;i<=4;i++){
    console.log(arr[i]);
}

console.log("-------------------------------------->");
const arr2=["Ajsd","akfja","feiejda","alksdfal"];

function re(ar){
    for(var i=0;i<=3;i++){
        console.log(ar[i]);
    }
}

re(arr2);
