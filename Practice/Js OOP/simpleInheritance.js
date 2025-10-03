class Book{
    constructor(title,author){

        this.title = title;
        this.author = author;
    }

    getSummary(){

        return this.title + "  by  " + this.author
    }

}

// inheritance

class magzine extends Book{
    
    constructor(issueNumber, title , author){
        super(title , author)
        this.issueNumber = issueNumber
        this.title = title
        this.author = author

    }

    //  overriding

    getSummary(){
        return this.issueNumber
    }


}

let obj = new magzine(17 , "mkc" , "ravi yadav")
let fval = obj.getSummary()

console.log(fval)