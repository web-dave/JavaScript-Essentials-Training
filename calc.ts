import { calc, display } from "./querys.js";
type IOperations = "+" | "-" | "x" | "/";

(document.querySelector("#agh p") as HTMLParagraphElement).innerHTML = {
  name: "Horst",
} as any;
// const display = document.querySelector("[name=display]") as HTMLInputElement;
// const calc = document.querySelector("[name=calculator]") as HTMLDivElement;

let zahl1 = 0;
let operation: IOperations | null = null;

let myFn: (a: number, b: number) => number;

calc.onclick = (e) => handleValue((e.target as HTMLButtonElement).innerText);

function handleValue(value: string) {
  console.log(display?.value);
  if (value === "c") {
    reset();
  }

  // if (!isNaN(+value)) {
  // if (!isNaN(parseInt(value, 10))) {
  if (!isNaN(Number(value))) {
    // zahl
    display.value += value;
  } else if (value === "=") {
    display.value = `${rechne()}`;
    display.value = rechne() + "";
    display.value = String(rechne());
    display.value = rechne().toString();
  } else {
    // operator
    if (zahl1 === 0) {
      if (display.value) {
        zahl1 = parseInt(display.value, 10);
        display.value = "";
      }
      operation = value as IOperations;
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
  operation = null;
}

fetch("./data.json").then((data) => console.log(data));
