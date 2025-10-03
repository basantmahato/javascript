const categorySelect = document.getElementById("category-select")
const productItems = document.querySelectorAll("#product-list li")
"use strict";

categorySelect.addEventListener('change',() =>{
    "use strict";
    let selectedCategory =  categorySelect.value;
    console.log(selectedCategory)


    productItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category')



        if(selectedCategory == "all" || selectedCategory == itemCategory  ){
            item.style.display = "list-item"
        }else {
            item.style.display = "none"
        }



    })




})