import { calc, display } from "./querys.js";
document.querySelector("#agh p").innerHTML = {
    name: "Horst",
};
// const display = document.querySelector("[name=display]") as HTMLInputElement;
// const calc = document.querySelector("[name=calculator]") as HTMLDivElement;
let zahl1 = 0;
let operation = null;
let myFn;
calc.onclick = (e) => handleValue(e.target.innerText);
function handleValue(value) {
    console.log(display === null || display === void 0 ? void 0 : display.value);
    if (value === "c") {
        reset();
    }
    // if (!isNaN(+value)) {
    // if (!isNaN(parseInt(value, 10))) {
    if (!isNaN(Number(value))) {
        // zahl
        display.value += value;
    }
    else if (value === "=") {
        display.value = `${rechne()}`;
        display.value = rechne() + "";
        display.value = String(rechne());
        display.value = rechne().toString();
    }
    else {
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
    operation = null;
}
fetch("./data.json").then((data) => console.log(data));
