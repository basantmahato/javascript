const itemInput = document.getElementById("item-input")
const addItemBtn = document.getElementById("add-item")
const cartList = document.getElementById("cart-list")
const totalCount = document.getElementById("total-count")
const removeLastBtn = document.getElementById("remove-last")

let cartItems = []

render = () => {

    cartList.innerHTML = ""

    cartItems.forEach((item, index) => {

        const li = document.createElement("li") 
        const span = document.createElement("span")
        const removeBtn = document.createElement("button")

        span.classList.add("item-name")
        removeBtn.classList.add("btn", "danger")

        span.innerText = item
        removeBtn.innerText = "Remove"

        removeBtn.addEventListener("click", () =>{
            cartItems.splice(index, 1)
            render();
        });
    
        li.appendChild(span)
        li.appendChild(removeBtn)


        cartList.appendChild(li)

        totalCount.innerText = cartItems.length

    })

}


    addItemBtn.addEventListener("click", () =>{

        const itemValue = itemInput.value;
         if ( itemValue !== ""){
            console.log(itemValue)
            cartItems.push(itemValue)
            render()
            itemInput.value = ""
         }

        

    })



removeLastBtn.addEventListener("click", () => {
    if (cartItems.length > 0) {
       
        cartItems.pop();
     
        render();
    }
});
