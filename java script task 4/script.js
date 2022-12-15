alert ("Hello Array");

//array methods
 //  ----------------- ADDING-----------

   //-----------------------push--------------

 let number = [ 10,20,30,40];
 number.push(50);
 console.log(number);

 //--------------------------pop-----------------

 let number1 = [ 10,15,20,25];
 number1.pop(5);
 console.log(number1);

//----------------------------unshift-------------

let number2 = [10,20,30,40];
number2.unshift();
console.log(number2);

//---------------------shift--------------------

let number3 = [10,20,30];
number3.shift();
console.log(number3);

//-----------------------------------spice-------------
let array = ["A", "B", "C"];
let arraycopy = array.slice(10,20);
console.log(arraycopy);


//---------------------filter----------------

let arry = [1, 2, 3, 4, 5];
let res = arry.filter((isEven) => isEven %2 ===0);
console.log(res);