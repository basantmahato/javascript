function x(){
    let a = 7;

    return function y(){
        console.log(a);
    }

}

let z = x();
z();

// bundle of lexical scope and the function where it was created is called closure

function a(){
    let k = 10;
    function b(){

        let m = 5;

        function c(){
            console.log(k);
            console.log(m);
        }

        c();
        

    }
     b();
}
a();



// closures are useful in data privacy
// we can create private variables and functions using closures


