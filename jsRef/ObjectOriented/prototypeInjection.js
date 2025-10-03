// global prototype

let valueArr = [4,7]

Array.prototype.sum =  function(){
   let val = this[0] + this[1]
   console.log(val)    
}

console.log(valueArr.sum())


// injecting prototype on function

function Person(name){
    this.name = name;
}


Person.prototype.greet = function(){
    console.log("hello", this.name)
}

const p1 = new Person("Baasant")
p1.greet()

// 