function sum(a,b){
    return a+b
}

const s=sum(4,5)
console.log(s) 
//function cartprice(...nums){
function cartprice(val1,val2,...nums){
    return nums
}
console.log(cartprice(1,2,3,4,5))
const user={
    username: "john",
    id: 745
}
function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and id is ${anyobject.id}`)

}
handleobject(user)

//Function Scope
function check_function_scope(){
    var variable1 = "Geeksforgeeks";
    let variable2 = "Geeks";
    const variable3 = "GFG";
    //console.log(variable1);
    //console.log(variable2);
}

check_function_scope();
//console.log(variable3);
//console.log(variable2);
//console.log(variable1)

// Block scope
{   
    var variable_1 = "GFG";
    const variable_2 = "Geeksforgeeks";
    let x=2;
    x*=2;
    //console.log(x);
    //console.log(variable_2);
}

console.log(variable_1);
//console.log(variable_2); Error
//console.log(x); Error

//  var keyword because var does not have a block scope.


// GLobal Scope
var global_variable1 = "Geeksforgeeks";
let global_variable2 = "Geeks";
const global_variable3 = "GFG";

function check_global_variables(){
    console.log(global_variable1);
    console.log(global_variable2);
    console.log(global_variable3);
}

check_global_variables();

//Lexical scope
function outerFunction() {
    const outerVariable = "Hello";

    function innerFunction() {
        const innerVariable = "Geeks";
        console.log(`${outerVariable} ${innerVariable}`);
    }

    innerFunction();
}

outerFunction();