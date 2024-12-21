const person = {
    name: 'John',
    age: 30,
    greet() {
        console.log('Hello, my name is ' +
            this.name + ' and I am '
            + this.age +
            ' years old.');
    }
};

person.greet();  //Hello, my name is John and I am 30 years old.
function greet() {
    console.log('Hello, my name is ' + this.name);
}

const person1 = {
    name: 'John',
    sayHello: greet
};

const anotherPerson = {
    name: 'Alice'
};

greet();  //Hello, my name is undefined
person1.sayHello(); //Hello, my name is John
greet.call(anotherPerson); //Hello, my name is Alice // Explicit binding

console.log(this); //{}
