const inputValue = document.getElementById("inputValue");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const outputValue = document.getElementById("outputValue");
const button = document.getElementById("convertBtn");
// 💡 Rename this for clarity, e.g., 'resultElement'
const resultElement = document.getElementById("conversionResult"); 

const conversionFactors = {
  meter: 1,
  kilometer: 1000,
  foot: 0.3048,
  mile: 1609.34,
  inch: 0.0254,
  centimeter: 0.01,
};

button.addEventListener("click", convertUnits);

function convertUnits() {
  const input = parseFloat(inputValue.value);
  const from = fromUnit.value;
  const to = toUnit.value;

  // 💡 CORRECTED: Check the parsed number 'input' and use 'return' to stop execution
  if (isNaN(input)) { 
    alert("Please enter a valid number");
    return;
  }

  const valueInMeters = input * conversionFactors[from];

  // 💡 CORRECTED: Use a unique variable name for the calculation result
  const finalResult = valueInMeters / conversionFactors[to]; 

  outputValue.value = finalResult;
  
  // 💡 CORRECTED: Use the correct variable name for the HTML element
  resultElement.textContent = `${input} ${from} = ${finalResult.toFixed(4)} ${to}`;
}