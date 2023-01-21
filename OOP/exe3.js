class Calculator {
  constructor(value) {
    this.value = value;
  }
  add(num) {
    this.value += num;
  }
}
const calculator = new Calculator(7);
calculator.add(7);
calculator.add(7);
console.log(calculator);

class Calculator {
  constructor(value) {
    this.value = value;
  }
  add(num) {
    this.value += num;
  }
  multiply(num) {
    const value = this.value;
    for (let i = 1; i < num; i++) {
      this.add(value);
    }
  }
}
