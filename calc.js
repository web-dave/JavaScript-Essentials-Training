// const btns = document.querySelectorAll("button");
// btns.forEach((element) => {
//   element.onclick = (e) => console.log(e.target.innerText);
//   element.onclick = () => console.log(element.innerText);
// });
const display = document.querySelector("input");

let zahl1 = 0;
operation = "";

document.querySelector("[name=calculator]").onclick = (e) =>
  handleValue(e.target.innerText);

function handleValue(value) {
  if (value === "c") {
    reset();
  }

  if (!isNaN(value)) {
    // zahl
    display.value += value;
  } else if (value === "=") {
    display.value = rechne();
  } else {
    // operator
    if (zahl1 === 0) {
      if (display.value) {
        zahl1 = parseInt(display.value, 10);
        display.value = "";
      }
      operation = value;
    }
  }
}

function rechne() {
  let result = 0;
  const zahl2 = parseInt(display.value, 10);
  console.log(zahl1, operation, zahl2);
  switch (operation) {
    case "+":
      result = zahl1 + zahl2;
      break;
    case "-":
      result = zahl1 - zahl2;
      break;
    case "x":
      result = zahl1 * zahl2;
      break;
    case "/":
      result = zahl1 / zahl2;
      break;
  }
  return result;
}

function reset() {
  display.value = "";
  zahl1 = 0;
  operation = "";
}
