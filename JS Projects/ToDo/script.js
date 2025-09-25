const input = document.getElementById("input-box")
const button = document.getElementById("add-button")
const removeButton = document.getElementById("remove-button")
const list = document.getElementById("list-container")

button.addEventListener("click",() =>{
    let inputValue = input.value;
    console.log(inputValue);

    if(inputValue === ""){
        alert("you must write somethinng")
        return;
    }

    let li = document.createElement("li")

    li.innerText = inputValue;

    list.appendChild(li);

    input.value = "";
    
})


removeButton.addEventListener("click",()=>{

    list.lastChild.remove();

})