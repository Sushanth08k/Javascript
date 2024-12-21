//1. Arrow Function without Parameters
const hyd =() => {
    console.log( "Hi from hyderabad")
}

hyd() //Hi from hyderabad

//2. Arrow Function with Single Parameters
const square = x => x*x;
console.log(square(4)); //16

//3. Arrow Function with Multiple Parameters
const sum=  ( x, y, z )   =>  {  
    console.log( x + y + z )
}

sum(10,20,30)

//4. Arrow Function with Default Parameters
const default1=( x, y, z = 30 ) => {
    console.log( x + " " + y + " " + z);
}

default1( 10, 20 );

//5. Return Object Literals
const makePerson = (firstName, lastName) =>
    ({first: firstName, last: lastName});
    console.log(makePerson("Pankaj", "Bind"));//{ first: 'Pankaj', last: 'Bind' }
