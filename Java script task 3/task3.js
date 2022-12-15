alert("hello");

//if -else

// 1. Check if a number is odd or even and print on console
let number = 11;
if (number % 2==0){
    console,log("this is aeven number");
}
else{
    console.log ("this is a odd number");

}

//2. Find the largest number

function large (num1 , num2) {
if (num1 > num2) {
    console.log(`num1 is large ,large no is ${num1}` );
    
}
else{
    console.log(`num2 is large , large no is ${num2}`);

}}
 large(80,60);

 //3  Perform arithmetic operations on two numbers

 let arithmetic  = (a , b) => {
    let y ;
    if ( y= a+b) {
        console.log(`addition is ${y}`);

    }
    if ( y= a-b) {
        console.log(`subtraction is ${y}`);
 }

 if ( y= a*b) {
    console.log(`multiplication is ${y}`);
 }

 if ( y= a/b) {
    console.log(`Division is ${y}`);
 }

 else{
    console.log("Enter teo numbers");
    
 }
} 
arithmetic(7,3);


//for loop

//1. Write a JS code to print numbers from 1 to 10

for (let a = 1; a<=10 ; a++){
console.log(a);
}

//2 Write a JS code to find the power of a number using for loop

function Number (num, power){
    let total =7;
    for ( let i =7; i<=power;i++) {
        total = total *num;
    }
    return total;

}
let b = Number(3,3);
console.log(b);

//3  Write a JS code to print Even numbers

for(let a = 1 ; 20>=a; a++){
    if( a %2 ==0){
        console.log("Even number is :" + a);
    }
}

// Create a simple calculator using switch statement.

const operator =prompt("Enter opretors :- + , - , * , / ");

const Num1 = +prompt("Enter first number :-");
const Num2 = +prompt("Enter second number :-");

let result;
switch(operator) {
    case "+" :
    result = Num1 + Num2;
    console.log(`${Num1} + ${Num2} = ${result}`);
    break;

    case "-" :
        result = Num1 - Num2;
        console.log(`${Num1} - ${Num2} = ${result}`);
        break;

        case "*" :
            result = Num1 + Num2;
            console.log(`${Num1} * ${Num2} = ${result}`);
        break;

        case "/" :
            result = Num1 + Num2;
            console.log(`${Num1} / ${Num2} = ${result}`);
            break;

            default:
                console.log("Enter valid opretor");
                break;
}


// 1 accept two numbers from user

let num1 = +prompt("Enter the 1st number");
let num2 = +prompt("Enter the 2nd number");
console.log(num1+"and"+num2)

// display the menu to user and accept the input as a sign (operator)
// menu ->Z

let operators = + prompt (`Enter oprectors`);
 // + => Addition
 // - => Substraction 
 // * => Multiplication 
 // / => Division
 // % => Mod
 // ** => Power 


 // 3. display/write the output on the screen. (e.g. Addition = 45)

 let p =40;
 let q = 5;
 console.log(p+q);
