class circle{
    constructor(radius){

        this.radius = radius

    }

    get area(){
       return  this._radius = 3.14* this._radius * this._radius

    }

    set radius(radius){
        
       return this._radius = radius

    }

}

const c1 = new circle(9)
console.log(c1.area)