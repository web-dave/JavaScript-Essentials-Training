class Calculator {
  display = document.querySelector("input") as HTMLInputElement;
  operant1 = 0;
  operator = "";

  handleInput(value: string) {
    if (!isNaN(parseInt(value, 10))) {
      this.writeToDisplay(value);
    } else {
      if (value === "c") {
        this.writeToDisplay("", true);
      } else if (value === "=") {
        this.writeToDisplay(
          String(
            this.operatorFn(this.operator, this.operant1, this.display.value)
          )
        );
        this.operant1 = 0;
        this.operator = "";
      } else {
        this.operant1 = this.operatorFn(
          value,
          this.operant1,
          this.display.value
        );
      }
    }
  }
  writeToDisplay(value: string, replace = false) {
    replace ? (this.display.value = value) : (this.display.value += value);
  }

  operatorFn(op: string, op1: number, op2: string) {
    this.writeToDisplay("", true);
    let result = 0;
    let int1 = op1;
    let int2 = parseInt(op2, 10);

    if (this.operator === "") {
      this.operator = op;
      return int2;
    }

    switch (this.operator) {
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
    console.log(int1, this.operator, int2, result);
    this.operator = op;

    return result;
  }

  constructor() {
    for (let elem of document.querySelectorAll("button")) {
      elem.onclick = (e) =>
        this.handleInput((e.target as HTMLButtonElement).innerText);
    }
  }
}

const calc = new Calculator();
