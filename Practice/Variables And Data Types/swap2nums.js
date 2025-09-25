function swap(a,b){

    a = a+b;
    b = a-b;
    a = a-b;
    console.log(a,b);


    c = b ;
    b= a;
    a = c;
    console.log(a,b);

}

 swap(5,10)