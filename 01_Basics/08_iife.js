//Immediate Invoked Function Expreesions(IIFE)

(function hi(){
    //named iife
    console.log('hello')
})
();

((name) =>{
    console.log(`hello ${name}`)
})
('sushanth')