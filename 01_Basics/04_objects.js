// Singleton
//Object.create

//object literals
const mySum=Symbol("key")
const jsuser ={
    name: "sushanth",
    //mySym: myKey
    [mySum]: "mykey",//To use symbol, we declare key in []
    age: 18
}

console.log(jsuser["name"])
console.log(jsuser[mySum])

jsuser.age=19  //Overridding the values in object
console.log(jsuser)
// Object.freeze(jsuser) // after freezing the object, Object is immutable .Doesn't give any but it won't change
// console.name="SUSHANTH"
// console.log(jsuser)

jsuser.greeting=function(){
    console.log(`Hello Js user,this is ${this.name}`)
}
console.log(jsuser.greeting())