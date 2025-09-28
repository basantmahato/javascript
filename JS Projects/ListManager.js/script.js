

const itemInput = document.getElementById("item-input");
// buttons
const addEnd = document.getElementById("add-end");
const addStart = document.getElementById("add-start")

const removeEnd = document.getElementById("remove-end");
const removeStart = document.getElementById("remove-start")

const clearList = document.getElementById("clear-list")

//

const itemList = document.getElementById("item-list");


// 

addEnd.addEventListener("click", () => {
    let itemInputValue = itemInput.value;
    if (itemInputValue !== "") {

        console.log(itemInputValue)

        const newElement = document.createElement("li")

        newElement.classList.add("item")
        
          newElement.innerHTML = `
            <span>${itemInputValue}</span>
            <div class="actions">
                <button class="edit-btn">✏️</button>
                <button class="delete-btn">🗑️</button>
            </div>
        `;

        itemList.appendChild(newElement)
        

        itemInput.value = ""

    }
})


addStart.addEventListener("click", () => {
    let itemInputValue = itemInput.value;
    if (itemInputValue !== "") {

        console.log(itemInputValue)

        const newElement = document.createElement("li")

        newElement.classList.add("item")
        
          newElement.innerHTML = `
            <span>${itemInputValue}</span>
            <div class="actions">
                <button class="edit-btn">✏️</button>
                <button class="delete-btn">🗑️</button>
            </div>
        `;

        itemList.insertBefore(newElement, itemList.firstChild);
        

        itemInput.value = ""

    }
})