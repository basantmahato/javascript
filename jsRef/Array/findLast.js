// The findLast() method returns the value of the last element that passes a test.

// The findLast() method executes a function for each array element.

// The findLast() method returns undefined if no elements are found.


let marks =  [50,60,70,80,90,100]


const checkMarks = (mark) =>{

    return mark > 60;

}
data = marks.findLast(checkMarks)

console.log(data)