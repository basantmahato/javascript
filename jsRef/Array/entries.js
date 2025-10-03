const colors = ["r","g","b","y"]

const list = colors.entries();

let text = "";

for(let color of list ){
    text += color ;
}

console.log(text)



// using for each loop


// const colors = ["r", "g", "b", "y"];

// let text = "";

// colors.forEach(color => {
//     text += color;
// });

// console.log(text); 