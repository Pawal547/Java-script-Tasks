alert("hello")

//data types

//1 number
let a = 10;
console.log(typeof a); //number


//string
let b ="10";
console.log(typeof b); //string with number string

let fname ="sachin";
console.log(typeof fname); //string with alphabet string

let c =true;
let d =false;
console.log(typeof c);
console.log(typeof d); //boolean

let e;
console.log(typeof e); //undefined

let f =null;
console.log(f);

let g =1;
let h =1;
console.log(g + h); //addition

let i ="1";
let j =1;
console.log(i + j); //conthetenation

//increment
//let k =10;
//k++;
//console.log(a)

//decriment
//let l =10;
//l--;
//console.log(l);

let k =10;
console.log(k++);
console.log(k) //increment

let l =10;
console.log(l--);
console.log(l); 


//true false vlue checked

//equal
let num1 =10;
let num2 ="10";
console.log(num1==num2); // true

let nu1 =10;
let nu2 ="11";
console.log(nu1==nu2); //false

//not equal

let n1 =10;
let n2 ="10"
console.log(n1 !=n2) //false

let n3 =9;
let n4 ="10"
console.log(n3 !=n4) //true

let m = 10;
let n ="10";
console.log(m>n); //false beacuse number is same


let o = 10;
let p ="9";
console.log(o>p); //true beacuse 10 is big number
console.log(o<p); //false beacuse 9 is small number

let q = 10;
let r = 10;
console.log(q>=r);


//logical oprectors =>

//1 AND
//2 OR
//3 NOT

//1 AND (both true) sin= &&
//2 OR  (at list one true) sin= ||
//3 NOT () sin = !


//String concatenation oprectors (+) vs string literals

let firstName ="sachin";
let course = "mernstack";

console.log ("my name is "+ firstName + " i'm  learning " + course);
console.log (`my name is ${firstName} and i am learning ${course}`);


let name ="sachin";

//alert(`Hello ${1}` );
//alert(`Hello ${"name"}`);
alert(`Hello ${name}`);


















