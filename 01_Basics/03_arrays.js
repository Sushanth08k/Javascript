// Array
const prompt = require('prompt-sync')();
const myArr=[1,2,3,4,false]

const arr2= new Array(1,2,3,4)
console.log(arr2)

// Array Methods

myArr.push(5)
myArr.push(6)
console.log(myArr)
myArr.pop()
myArr.unshift(0)
console.log(myArr)
myArr.shift() //removes starting values of array

let p=Number(prompt("key:"));
console.log(typeof p)
console.log(myArr.includes(p))
const a=[1,2,3]
const b=[4,5,6]
//const c=a.concat(b)
//console.log(c)
const c=[...a,...b]
console.log(c)
console.log(Array.from("sushanth"))

