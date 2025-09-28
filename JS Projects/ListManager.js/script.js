const itemInput = document.getElementById("item-input");
// buttons
const addEnd = document.getElementById("add-end");
const addStart = document.getElementById("add-start");

const removeEnd = document.getElementById("remove-end");
const removeStart = document.getElementById("remove-start");

const clearList = document.getElementById("clear-list");

//

const itemList = document.getElementById("item-list");

//Delete and Update

const deleteBtn = document.getElementById("delete-btn");
const editBtn = document.getElementById("edit-btn");

const allEditBtns = document.querySelectorAll(".edit-btn");

//

// addEnd.addEventListener("click", () => {
//     let itemInputValue = itemInput.value;
//     if (itemInputValue !== "") {

//         console.log(itemInputValue)

//         const newElement = document.createElement("li")

//         newElement.classList.add("item")

//           newElement.innerHTML = `
//             <span>${itemInputValue}</span>
//             <div class="actions">
//                 <button class="edit-btn">✏️</button>
//                 <button class="delete-btn">🗑️</button>
//             </div>
//         `;

//         itemList.appendChild(newElement)

//         itemInput.value = ""

//     }
// })

// addStart.addEventListener("click", () => {
//     let itemInputValue = itemInput.value;
//     if (itemInputValue !== "") {

//         console.log(itemInputValue)

//         const newElement = document.createElement("li")

//         newElement.classList.add("item")

//           newElement.innerHTML = `
//             <span>${itemInputValue}</span>
//             <div class="actions">
//                 <button class="edit-btn">✏️</button>
//                 <button class="delete-btn">🗑️</button>
//             </div>
//         `;

//         itemList.insertBefore(newElement, itemList.firstChild);

//         itemInput.value = ""

//     }
// })

function createListItem(itemText) {
  const newElement = document.createElement("li");
  newElement.classList.add("item");

  const span = document.createElement("span");
  span.textContent = itemText;

  const actions = document.createElement("div");
  actions.classList.add("actions");

  const editBtn = document.createElement("button");
  editBtn.textContent = "✏️";
  editBtn.classList.add("edit-btn");

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑️";
  deleteBtn.classList.add("delete-btn");

//   deleteBtn.addEventListener("click", () => {
//   newElement.remove();
//   });

  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  newElement.appendChild(span);
  newElement.appendChild(actions);

  return newElement;
}

// add end function call

addEnd.addEventListener("click", () => {
  const itemInputValue = itemInput.value;
  console.log(itemInputValue);

  if (itemInputValue !== "") {
    const newElement = createListItem(itemInputValue);
    itemList.appendChild(newElement);
    itemInput.value = "";
  }
});

addStart.addEventListener("click", () => {
  const itemInputValue = itemInput.value;
  console.log(itemInputValue);
});

// add start function call

addStart.addEventListener("click", () => {
  const itemInputValue = itemInput.value;
  console.log(itemInputValue);

  if (itemInputValue !== "") {
    const newElement = createListItem(itemInputValue);
    itemList.insertBefore(newElement, itemList.firstChild);
    itemInput.value = "";
  }
});

// remove end function call

removeEnd.addEventListener("click", () => {
  itemList.removeChild(itemList.lastChild);
});

// remove start

removeStart.addEventListener("click", () => {
  itemList.removeChild(itemList.firstChild);
});

// clear list

clearList.addEventListener("click", () => {
  itemList.innerHTML = "";
});


//  event deligation

itemList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    e.target.closest("li").remove();
  }

  if (e.target.classList.contains("edit-btn")) {
    const li = e.target.closest("li");
    const span = li.querySelector("span");

    const newValue = prompt("Edit item:", span.textContent);
    if (newValue !== null && newValue.trim() !== "") {
      span.textContent = newValue;
    }
}
});
