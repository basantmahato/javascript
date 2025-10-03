let hero = ["thor", "spiderman" , "ironman"]

let heropower = {
    thor: "hammer",
    spiderman : "sling",

    getSpiderPower: function(){
        console.log(`spiderman power is ${this.spiderman}`)
    }
}


Object.prototype.basant = function(){
    console.log("basant is present in all objects")
}

Array.prototype.ruby = () =>{
    console.log("ruby is present")
}

hero.ruby()
hero.basant()
heropower.basant()






