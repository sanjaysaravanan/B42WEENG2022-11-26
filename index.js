



var x = 10;


function displayInfo (batchName) {
  return 'Hello' + batchName;
}


displayInfo('B42WEENG'); // calling/invoking the function


// !1
// false
// !99
// false
// !10
// false
// !2
// false
// !-1
// false
// !-1000
// false
// !0
// true


// !'B42WEENG'


// check if a num is odd or even

//  1 ---> 1%2 --> 1 --> Odd
// 4 --> 4%2 --> 0 --> even
var num = 99;
if (num % 2 === 1) {
  console.log('Odd');
} else if ( num % 2 === 0 ) {
  console.log('Even');
} else {
  console.log('Error');
}


// 
// INput
/**
 * B
 * 4
 * 2
 * W
 * E
 * E
 * N
 * G
 */

// Ouput
// B 4 2 W E E N G


// var arr = [1,2,3,4,5,6,7,8,9];
// undefined
// arr.reverse();
// (9) [9, 8, 7, 6, 5, 4, 3, 2, 1]
// arr.reverse();
// (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
// arr.reverse();
// (9) [9, 8, 7, 6, 5, 4, 3, 2, 1]
// 'Sanjay'.reverse();
// VM2538:1 Uncaught TypeError: "Sanjay".reverse is not a function
//     at <anonymous>:1:10
// (anonymous) @ VM2538:1
// // string to integer
// undefined
// '2'
// '2'
// +'2'
// 2
// parseInt('3');
// 3
// Number('3')
// 3


// while(condition) {
//   statements
// }

var arr = [1, 2,3,4,5];

var i = 0;

while( i < arr.length) {
  console.log(arr[i]);
  // increment
  i = i + 1;
}


var i = arr.length - 1;
var resStr = '';
while( i >=  0) {
  resStr = resStr + arr[i];
  // decrement
  i = i - 1;
}


console.log(resStr);


var arr = [];

// 1 2 3 4 5

// for(var i=0;i<5;i++) {
//   arr[i] = i+1;
// }

for(var i=0;i<5;i++) {
  arr.push(i+1);
}


console.log(arr);
// Normal Switch Case
const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

// conditional Switch Case

const age = -20;

switch(true) {
  case age > 0 && age <= 10:
    console.log('Child');
    break;
  case age > 10 && age <= 20:
    console.log('Teen');
    break;
  case age > 20 && age <= 100:
    console.log('Adult');
    break;
  default:
    console.log('INvalid Value');
}


const arrStr = userInput[0].split('');

var oddArr = [];
var evenArr = [];

for(var i=0;i<arrStr.length;i++) {
    const num = Number(arrStr[i]);
  if (num % 2 === 0) {
      evenArr.push(num);
  } else {
      oddArr.push(num);
  }
}

evenArr.sort(); // sort the array of elements of same digits
oddArr.sort();

console.log(evenArr.join(' '));
console.log(oddArr.join(' '));

// Simple Interest
inp.on("close", () => {
  const line1 = userInput[0].split(" ");
  
  const P = Number(line1[0]);
  const T = Number(line1[1]);
  const R = Number(line1[2]);
  
  console.log( SI(P, T, R) );
  
});

const SI = (P,T,R) => {
    return ((P*T*R)/100).toFixed(2);
}

// Monthly saving problem
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

  const month = Number(userInput[0]);
  
  var a = 1000;
  var b = 1000;
  
 
  if (month === 0) {
      console.log(1000);
  }
  else if ( month === 1 ) {
      console.log(2000);
  } else if (month > 1) {
      var sum = 2000;
      for(var i = 2; i <= month; i++) {
        var result = a + b;
        
        a = b;
        b = result;
        
        sum = sum + result;
        
      }
      
      console.log(sum);
  }
  //end-here
});
