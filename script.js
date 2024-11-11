const display = document.getElementById("display");
const numbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"];
const operations = ["C", "/", "*", "-", "+", "="];

function createButton(value, container) {
  const button = document.createElement("button");
  button.textContent = value;
  button.onclick = function() {
    if (value === "C") display.value = "";
    else if (value === "=") display.value = eval(display.value);
    else display.value += value;
  };
  container.appendChild(button);
}

numbers.forEach(num => createButton(num, document.getElementById("numbers")));
operations.forEach(op => createButton(op, document.getElementById("operations")));
