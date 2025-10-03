class Book{
    constructor(title,author){

        this.title = title;
        this.author = author;
    }

    getSummary(){

        return this.title + "  by  " + this.author
    }

}

const book1 = new Book("Harry weds sunita", "Basant")
console.log(book1.author)
console.log(book1.title)


const book2 = new Book("Sunita x Harry", "Basant")
console.log(book2.author)
console.log(book2.title)

let summary = book1.getSummary()
console.log(summary)



// when we are calling getsummary
// it have its own context which refers to the object 1 
//  and with new constructor we are creating an object instance like obj 1 and obj 2 and setting object properties through the constructor..