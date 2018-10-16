# handle the operants of the calculation

- If the user clicks on an operator button (`+-*/`), the current number should be saved for further calculation
- It should be calculated if a number already exists and the result should then be saved for further calculations
- Test it and discuss the result with your neighbor

```js
let operant1 = 0;
let operator = "";
let display = document.querySelector("[name=display]");

function handleInput(value) {
  if (!isNaN(value)) {
    display.value += value;
  } else {
    if (value === "c") {
      operant1 = 0;
      display.value = "";
    } else if (value === "=") {
      display.value = operatorFn(operator, operant1, display.value);
      operant1 = 0;
      operator = "";
    } else {
      operant1 = operatorFn(value, operant1, display.value);
    }
  }
}

for (let elem of document.querySelectorAll("button")) {
  elem.onclick = e => handleInput(e.target.innerText);
}
```

```js
function operatorFn(op, op1, op2) {
  display.value = "";
  let result = 0;
  let int1 = parseInt(op1, 10);
  let int2 = parseInt(op2, 10);

  if (operator === "") {
    operator = op;
    return int2;
  }

  switch (operator) {
    case "+":
      result = int1 + int2;
      break;
    case "-":
      result = int1 - int2;
      break;
    case "x":
      result = int1 * int2;
      break;
    case "/":
      result = int1 / int2;
      break;

    default:
      break;
  }
  console.log(int1, operator, int2, result);
  operator = op;

  return result;
}
```
