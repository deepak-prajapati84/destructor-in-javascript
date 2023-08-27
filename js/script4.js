// fat Array

let hell=()=>{
    console.log("Hello Deepak Prajapati");
}

hell();

let add=(x,y)=>{
    return x+y;
}

//add(49,450);
let aa=add(49,490);
console.log(aa);

let z=['Depeal',"alands","nakl","afne"];

console.log(z);

let v=[...z,"Dedss",'sdasdje',`sncaslk`];

console.log(v+" length : "+v.length);

for(let i=0;i<=v.length;i++){
    console.log(v[i]);
}


let a=["jailer"];
let b=[...a,'box'];
 let c=[...b,`office`];
 let d=[...c,'collections'];
 let e=[...d,"Rajinikanth's"];
let f=[...e,'action'];
let g=[...f+" film"+' '];

console.log(g);