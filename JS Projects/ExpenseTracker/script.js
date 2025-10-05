const description = document.getElementById("description");
const amount = document.getElementById("amount");
const amountType = document.getElementById("type");

const addTransaction = document.getElementById("add-transaction");
const deleteTransaction = document.getElementById("delete-transaction");

// Transctions List

const transactionList = document.getElementById("transaction-list");

// Balance

let balanceAmount = (document.getElementsByClassName(
  "current-balance"
)[0].innerText = 0);

// Total Income
let totalIncome = document.getElementsByClassName("total-income");
let totalExpense = document.getElementsByClassName("total-expense");

let entries = document.getElementById("total-entries");
entries.innerText = 0;

totalExpense[0].innerText = 0;
totalExpense[1].innerText = 0;
totalIncome[0].innerText = 0;
totalIncome[1].innerText = 0;

// Current Date

let currentDate = new Date();
let options = { year: "numeric", month: "short", day: "numeric" };
let formattedDate = currentDate.toLocaleDateString("en-US", options);

// console.log(formattedDate);

// Add Transaction Event Listener

addTransaction.addEventListener("click", () => {
  let descriptionValue = description.value;
  let amountValue = amount.value;
  let amountTypeValue = amountType.value;

  console.log(descriptionValue);
  console.log(amountValue);
  console.log(amountTypeValue);

  const transaction = {
    description: descriptionValue,
    amount: amountValue,
    amountType: amountTypeValue,
  };

  let exsistingData = JSON.parse(localStorage.getItem("storedData")) || [];

  exsistingData.push(transaction);

  localStorage.setItem("storedData", JSON.stringify(exsistingData));

  console.log("saved data ", exsistingData);

  // console.log('data at index 1 ' , exsistingData[0])

  let length = exsistingData.length;

  entries.innerText = length;

  transactionList.innerHTML = ''

  exsistingData.forEach((element) => {
    console.log("Description:", element.description);
    console.log("Amount:", element.amount);
    console.log("Type:", element.amountType);

    let transactionItem = document.createElement("li");

    transactionItem.classList.add(
      "flex",
      "items-center",
      "justify-between",
      "py-4"
    );

    if (element.amountType === "Expense") {
      transactionItem.innerHTML = `<div class="flex items-center gap-4"><div class="w-10 h-10 flex items-center justify-center rounded-lg bg-red-50 text-red-600 font-semibold">-</div>
                <div>
                  <p class="font-medium">${element.description}</p>
                  <p class="text-xs text-gray-500">${formattedDate} · Supermart</p>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <p class="font-semibold text-red-600">- ₹${element.amount}</p>
                 <button id="delete-transaction" class="p-2 rounded-md hover:bg-gray-100" aria-label="Delete transaction">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H3a1 1 0 100 2h14a1 1 0 100-2h-2V3a1 1 0 00-1-1H6zm2 6a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 10-2 0v6a1 1 0 102 0V8z" clip-rule="evenodd"/></svg>
                </button>
              </div>`;

      transactionList.appendChild(transactionItem);

      totalExpense[0].innerText =
        parseInt(totalExpense[0].innerText) + parseInt(element.amount);
      totalExpense[1].innerText = totalExpense[0].innerText;
    } else {
      transactionItem.innerHTML = `<div class="flex items-center gap-4">                <div class="w-10 h-10 flex items-center justify-center rounded-lg bg-green-50 text-green-600 font-semibold">+ </div>
                <div>
                  <p class="font-medium">${element.description}</p>
                  <p class="text-xs text-gray-500">${formattedDate} · Salary credited</p>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <p class="font-semibold text-green-600">+${element.amount}</p>
                <button id="delete-transaction" class="p-2 rounded-md hover:bg-gray-100" aria-label="Delete transaction">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H3a1 1 0 100 2h14a1 1 0 100-2h-2V3a1 1 0 00-1-1H6zm2 6a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 10-2 0v6a1 1 0 102 0V8z" clip-rule="evenodd"/></svg>
                </button>
              </div>`;

      transactionList.appendChild(transactionItem);

      totalIncome[0].innerText =
        parseInt(totalIncome[0].innerText) + parseInt(element.amount);
      totalIncome[1].innerText = totalIncome[0].innerText;
    }

  let balanceLeft = parseInt(totalIncome[0].innerText) - parseInt(totalExpense[0].innerText);
  });

});
