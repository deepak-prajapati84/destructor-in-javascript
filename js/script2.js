const a=[1,3,4];

const b=[...a];
    b[1]=90;
console.log(a);
console.log(b);

let arr=[2,5,8,9];

var [first,second,three,four]=arr;

console.log(first);
console.log(second);


const str={first:"Deepak",surname:"Prajapati"};

const str2=str;

const str3={...str};

str3.first="Dj";

console.log(str.first);//It will be return the referention value Only
console.log(str2.first);////It will be return the referention value Only

console.log("------------------->");

console.log(str.first);
console.log(str3.first);

console.log("------------------->")
const Ar={aa:10,bb:20};

const {aa,bb}=Ar;//It will destructuring the value

console.log(aa);//It will destructuring the value
console.log(bb);//It will destructuring the value

console.log("-------------------->");

const Drr={name:"Depa",surnam:"kdsajlk"};

const {aaaa}=Drr;
//const aaaa=Drr; //It's return the array function;
const {nsa}=Drr;

console.log(aaaa);
console.log(nsa);

console.log('---------------------->');

const ba=Drr.name;//It will destructuring the value
const sk=Drr.surnam;//It will destructuring the value

console.log(ba);
console.log(sk);

console.log("_____________>");

let [n,n2,...n3]=["Deepak","Anjali","Prajpati","Friends","slakjfa"];

console.log(n);
console.log(n2);
console.log(n3);
console.log(n3[0]);
console.log(n3[1]);


console.log("--------------> , Smart function parameters");

let options={
    title:"Menu",
    item:["item1","item2","item3"]
};

function showMenu({title="Undefined",width=100,height=200,item=[]}){
    console.log(`${title} ${width} ${height}`);
    alert(`${item}`);
}

showMenu(options);


console.log("--------------> , Nested destructuring");

let options4={
    size:{
        width:100,
        height:200
    },
    item:["KHDklas","aklsfh"],
    extra:true
};

let {
    size:{
        width,
        height,
    },
    item:[item1,item2],
    title="Menu"
}=options4;

console.log(title);
console.log(width);
console.log(height);
alert(item2);

console.log("----------------->Unpacking");

let user={
    id:42,
    displayName:"Suraj",
    fullName:{
        firstName:"Deepak",
        lastName:"Prajapati"
    },
};

function userId({id}){
    return id;
};

console.log(userId(user));

function userNameD({fullName:{firstName:name,lastName:n2}}){
    return name +" "+n2;
}

console.log(userNameD(user));

function userDip({displayName:n}){
    return n;
}

console.log(userDip(user));

console.log("---------------> Nested Destructuring");

const ditails={
        family:{
            mother:"SHdla",
            father:"kashaks",
            child:"asdkhask"
        },
        age:20,
};

let {
    family:{
        mother,
        father,
        child
    },
    age,
}=ditails;

console.log(mother);
console.log(age);
console.log(father);
console.log(child);
