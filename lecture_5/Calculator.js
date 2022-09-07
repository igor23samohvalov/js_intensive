function isValidNum(num) {
  return typeof num === "number" && !isNaN(num);
}

class Calculator {
  constructor(numX, numY) {
    if (!isValidNum(numX)) throw new Error("1st argument is invalid");
    if (!isValidNum(numY)) throw new Error("2nd argument is invalid");

    this.numX = numX;
    this.numY = numY;
  }

  setX(num) {
    if (!isValidNum(num)) throw new Error("Invalid argument");

    this.numX = num;
  }
  setY(num) {
    if (!isValidNum(num)) throw new Error("Invalid argument");

    this.numY = num;
  }
  logSum() {
    console.log(this.numX + this.numY);
  }
  logMul() {
    console.log(this.numX * this.numY);
  }
  logSub() {
    console.log(this.numX - this.numY);
  }
  logDiv() {
    if (!this.numY) throw new Error("Division by 0");

    console.log(this.numX / this.numY);
  }
}