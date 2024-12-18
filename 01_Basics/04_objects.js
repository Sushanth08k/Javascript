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


//const tinderUser=new Object() Singleton object

// const tinderUser = {};
// tinderUser.id = "123abc";
// console.log(tinderUser)

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
// const obj3=Object.assign({},obj1,obj2)
const obj3 ={...obj1,...obj2}
console.log(obj3)
console.log(Object.keys(obj3))
console.log(Object.values(obj3))
console.log(Object.entries(obj3))
console.log(obj3.hasOwnProperty('3'))
