let x = 5;

function a(){
    

    function b(){


        function c(){

            console.log(x);

        }

            c();
    }
    b();
}

a();

// lexical scope is the area where a variable is defined
// js looks for the variable in the current scope and if it doesn't find it, it looks in the outer scope and so on until it finds it or reaches the global scope
// this is done at the time of writing the code, not at the time of execution
// this is why it's called lexical scope


