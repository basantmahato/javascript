
const description = document.getElementById("description");
const amount = document.getElementById("amount");
const amountType = document.getElementById("type");

const addTransaction = document.getElementById("add-transaction");


const transactionList = document.getElementById("transaction-list");


const balanceElement = document.getElementsByClassName("current-balance")[0];

let totalIncome = document.getElementsByClassName("total-income");
let totalExpense = document.getElementsByClassName("total-expense");

let entries = document.getElementById("total-entries");

entries.innerText = 0;
totalExpense[0].innerText = 0;
totalExpense[1].innerText = 0;
totalIncome[0].innerText = 0;
totalIncome[1].innerText = 0;
balanceElement.innerText = 0; 

let currentDate = new Date();
let options = { year: "numeric", month: "short", day: "numeric" };
let formattedDate = currentDate.toLocaleDateString("en-US", options);


const exportDataBtn = document.getElementById("export-data");

exportDataBtn.addEventListener('click', () => {

    window.print();
});


const newTransactionBtn = document.getElementById("new-transaction-btn");

newTransactionBtn.addEventListener('click', () => {
   
    if (!confirm("Are you sure you want to start a new ledger? This will permanently delete all stored transactions.")) {
        return;
    }
    
   
    localStorage.removeItem("storedData");
    
    
    const emptyData = [];
    
   
    updateUI(emptyData);
    
    alert("All transactions have been cleared.");
});


addTransaction.addEventListener("click", () => {
    let descriptionValue = description.value;
    let amountValue = amount.value;
    let amountTypeValue = amountType.value;
    

    if (!descriptionValue.trim() || !amountValue || isNaN(parseFloat(amountValue))) {
        alert("Please enter a valid description and numerical amount.");
        return;
    }
    

    const transaction = {
        description: descriptionValue,
        amount: amountValue,
        amountType: amountTypeValue,
    };

    let exsistingData = JSON.parse(localStorage.getItem("storedData")) || [];
    exsistingData.push(transaction);
    localStorage.setItem("storedData", JSON.stringify(exsistingData));

    description.value = '';
    amount.value = '';

    updateUI(exsistingData);
});


function deleteTransaction(indexToDelete) {
    let exsistingData = JSON.parse(localStorage.getItem("storedData")) || [];
    
    exsistingData.splice(indexToDelete, 1);
    
    localStorage.setItem("storedData", JSON.stringify(exsistingData));
    
    updateUI(exsistingData);
}


transactionList.addEventListener('click', (event) => {
    const deleteButton = event.target.closest('.delete-transaction-btn');
    
    if (deleteButton) {
        event.stopPropagation();
        
        const indexString = deleteButton.getAttribute('data-index');
        
        if (indexString !== null) {
            const index = parseInt(indexString);
            
            if (confirm(`Are you sure you want to delete this transaction: "${
                JSON.parse(localStorage.getItem("storedData"))[index].description
            }"?`)) {
                deleteTransaction(index);
            }
        }
    }
});


function updateUI(data) {

    transactionList.innerHTML = '';
    
    let currentTotalIncome = 0;
    let currentTotalExpense = 0;
    
    entries.innerText = data.length;

    data.forEach((element, index) => {
        let transactionItem = document.createElement("li");
        transactionItem.classList.add(
            "flex", "items-center", "justify-between", "py-4"
        );
        
        const transactionAmount = parseFloat(element.amount);

        if (element.amountType === "Expense") {
            currentTotalExpense += transactionAmount;
            
            transactionItem.innerHTML = `<div class="flex items-center gap-4">
                <div class="w-10 h-10 flex items-center justify-center rounded-lg bg-red-50 text-red-600 font-semibold">-</div>
                <div>
                    <p class="font-medium">${element.description}</p>
                    <p class="text-xs text-gray-500">${formattedDate} · Supermart</p>
                </div>
            </div>
            <div class="flex items-center gap-3">
                <p class="font-semibold text-red-600">- ₹${transactionAmount.toFixed(2)}</p>
                <button class="delete-transaction-btn" data-index="${index}" class="p-2 rounded-md hover:bg-gray-100" aria-label="Delete transaction">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H3a1 1 0 100 2h14a1 1 0 100-2h-2V3a1 1 0 00-1-1H6zm2 6a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 10-2 0v6a1 1 0 102 0V8z" clip-rule="evenodd"/></svg>
                </button>
            </div>`;
        } else {
            currentTotalIncome += transactionAmount;

            transactionItem.innerHTML = `<div class="flex items-center gap-4">
                <div class="w-10 h-10 flex items-center justify-center rounded-lg bg-green-50 text-green-600 font-semibold">+ </div>
                <div>
                    <p class="font-medium">${element.description}</p>
                    <p class="text-xs text-gray-500">${formattedDate} · Salary credited</p>
                </div>
            </div>
            <div class="flex items-center gap-3">
                <p class="font-semibold text-green-600">+ ₹${transactionAmount.toFixed(2)}</p>
                <button class="delete-transaction-btn" data-index="${index}" class="p-2 rounded-md hover:bg-gray-100" aria-label="Delete transaction">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H3a1 1 0 100 2h14a1 1 0 100-2h-2V3a1 1 0 00-1-1H6zm2 6a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 10-2 0v6a1 1 0 102 0V8z" clip-rule="evenodd"/></svg>
                </button>
            </div>`;
        }
        
        transactionList.appendChild(transactionItem);
    });

    totalIncome[0].innerText = `₹${currentTotalIncome.toFixed(2)}`;
    totalIncome[1].innerText = `₹${currentTotalIncome.toFixed(2)}`;
    totalExpense[0].innerText = `₹${currentTotalExpense.toFixed(2)}`;
    totalExpense[1].innerText = `₹${currentTotalExpense.toFixed(2)}`;
    
    let balanceLeft = currentTotalIncome - currentTotalExpense;
    balanceElement.innerText = balanceLeft.toFixed(2);
}


(function init() {
    let initialData = JSON.parse(localStorage.getItem("storedData")) || [];
    updateUI(initialData);
})();