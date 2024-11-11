// Get references to the display and button containers
const display = document.getElementById("display");
const numberContainer = document.getElementById("numbers");
const operationContainer = document.getElementById("operations");

// Arrays for numbers and operations
const numbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"];
const operations = ["C", "/", "*", "-", "+", "="];

// Function to create a button and add it to a container
function createButton(value, container) {
    const button = document.createElement("button");
    button.textContent = value;

    button.addEventListener("click", function(){
        if (value == "C") {
            display.value = "";
        } else if (value == "=" ) {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
        } else {
            display.value += value;
        }
    }); 

    container.appendChild(button);
}

for (let i = 0; i < numbers.length; i++) {
    createButton(numbers[i], numberContainer);
}

for (let i = 0; i < operations.length; i++) {
    createButton(operations[i], operationContainer);
}