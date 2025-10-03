class Book{

    static totalBooks = 0

    
    constructor(title,author){

        this.title = title;
        this.author = author;

        Book.totalBooks++
     
        
    }

    // getSummary(){

    //     return this.title + "  by  " + this.author
    // }

    static countBooks(totalBooks){
       
        return Book.totalBooks

    }



}



// class magzine extends Book{
    
//     constructor(issueNumber, title , author){
//         super(title , author)
//         this.issueNumber = issueNumber
//         this.title = title
//         this.author = author

//     }



//     getSummary(){
//         return this.issueNumber
//     }


// }

const book2 = new Book("sadd","sdad")
const book1 = new Book("sadd","sdad")
const book3 = new Book("sadd","sdad")
const book4 = new Book("sadd","sdad")
const book5 = new Book("sadd","sdad")

const value = Book.countBooks()
console.log(value)