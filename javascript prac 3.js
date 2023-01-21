//OBJECT ORIENTED PROGRAMMING (used by developers to model real life objects)
//encapsulating Objects
//functional programming (FP)

function getTotal(a, b) {
  return a + b;
}
var num1 = 2;
var num2 = 3;
var total = getTotal(num1, num2);

function getDistance(mph, h) {
  return mph * h;
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);

function getDistance(moh, h) {
  return mph * h;
}

var mph = 60;
var h = 2;
var distance = getDistance(mph, h);
console.log(distance);

var dog = {
  hungry: true,
  eat: function () {
    dog.hungry = false;
  },
};
dog.eat();
console.log(dog.hungry);
var car = {
  mileage: 12000,
  drive: function (miles) {
    car.mileage += miles;
  },
};

function getMileage(mileage, miles) {
  return mileage + miles;
}
var mileage = 5000;
var miles = 100;
var newMileage = getMileage(mileage, miles);
console.log(newMileage);

var dog = {
  breed: "Dalmation",
  hungry: true,
  bark: function () {
    console.log("woof");
  },
  eat: function () {
    dog.hungry = false;
  },
};

function addMoney(value, amount) {
  return value + money;
}
var value = 0;
var value = addMoney(value, 100);
value = addMoney(value, 50);
value = addMoney(value, 22);
console.log(value);

var myPiggy = {
  value: 0,
  addMoney: function (amount) {
    myPiggy.value = myPiggy.value + amount;
  },
};
myPiggy.addMoney(100);
console.log(myPiggy.value);

var car = {
  mileage: 12000,
  drive: function (miles) {
    car.mileage += miles;
  },
};

function getDistance(mph, h) {
  return mph + h;
}
var mph = 60;
var h = 2;

var car = {
  mileage: 12000,
  drive: function (miles) {
    car.mileage += miles;
  },
};

var car = {
  color: "red",
  on: false,
  start: function () {
    car.on = true;
  },
};
var person = {
  name: "Jeremiah",
  greet: function () {
    console.log("Hi there");
  },
};
person.greet();

function getArea(a, b) {
  return b * h;
}
var base = 3;
var height = 4;

var rectangle = {
  base: 3,
  height: 4,
  getArea: function () {
    return rectangle.base * rectangle.height;
  },
};
rectangle.base = 10;
var area = rectangle.getArea();
console.log(area);

//Applying inheritance in OOP
var person1 = {
  greet: function () {
    console.log("Hi");
  },
};
var person2 = {
  greet: function () {
    console.log("Hi");
  },
};

var template = {
  greet: function () {
    console.log("Hi");
  },
};
var person = Object.create(template);
person.greet();

var template = {
  greet: function () {
    console.log("Hi");
  },
};
var person = Object.create(template);
console.log(template);
console.log(person);

var car = {
  startEngine: function () {
    console.log("Starting Engine");
  },
};
var hybrid = Object.create(car);
hybrid.charge = function () {
  console.log("Using fuel to charge battery");
};
hybrid.startEngine();
hybrid.charge();

var player = {
  name: "Player",
  greet: function () {
    console.log("Ready To Play");
  },
};
var player1 = Object.create(player);
console.log(player1);

var player = {
  name: "Player",
  greet: function () {
    console.log("Ready to play");
  },
};
var player1 = Object.create(player);
player1.name = "Jill";
console.log(player1);

var car = {
  displayMiles: function () {
    console.log("0 miles driven");
  },
};
var porsche = Object.create(car);
var bmw = Object.create(car);
var jaguar = Object.create(car);
porsche.displayMiles();
bmw.displayMiles();
jaguar.displayMiles();

var speaker = {
  play: function () {
    console.log("Playing Audio");
  },
};
var alexa = Object.create(speaker);
alexa.listen = function () {
  console.log("Listening....");
};

var car = {
  drive: function () {
    console.log("Vroo,");
  },
};
var myCar = Object.create(car);
console.log(myCar);

var car = {
  honk: function () {
    console.log("HONK!!!");
  },
};
var myCar = Object.create(car);
myCar.honk();

var wolf = {
  howl: function () {
    console.log("aaUUUUUuuuuu");
  },
};
var dog = Object.create(wolf);
dog.howl();

var car = {
  fuel: function () {
    console.log("Fueling");
  },
};
var electricCar = {
  charge: function () {
    console.log("Charging!");
  },
};
var car1 = Object.create(electricCar);
var car2 = Object.create(car);
car1.charge();
car2.fuel();

var player = {
  fight: function () {
    console.log("Take that!");
  },
};
var wizard = Object.create(player);
wizard.health = 100;

var player = {
  fight: function () {
    console.log("Take that!");
  },
};
var wizard = Object.create(player);
wizard.castSpell = function () {
  console.log("Alohomora");
};
wizard.fight();
wizard.castSpell();

class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const person = new person("Sam", 23);
console.log(person);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log("Hi, my name is" + this.name);
  }
}
const person1 = new Person("Sam", 23);
const person2 = new Person("Tom", 30);
const person3 = new Person("Anne", 45);

console.log(person1);
person1.greet();
person2.greet();
person3.greet();

//ARRAY OPERATIONS
//array.map
const fahrenheit = [72, 68, 70, 74, 77, 75, 79];
const celcius = [];
for (const element of fahrenheit) {
  let c = (element - 32) * (5 / 9);
  celcius.push(c);
}
console.log(celcius);

const fahrenheit = [72, 68, 70, 74, 77, 75, 79];
const celcius = fahrenheit.map();
console.log(celcius);

const values = [56, 27, 19, 20, 38];
const even0r0dd = values.map(function (element) {
  return element % 2 === 0;
});
console.log(even0r0dd);

const queue = ["Sarah", "Hank", "Anna", "Beatrice"];
const displayQueue = queue.map(function (element, index) {
  return index + ":" + element;
});
console.log(displayQueue);

const fahrenheit = [72, 68, 70, 74, 77, 75, 79];
const celcius = fahrenheit.map(function (element, index) {
  return (element - 32) * (5 / 9);
});
console.log(celcius);

const states = ["ak", "md", "va", "ca", "or"];
const upperCaseStates = states.map((element) => element.toUpperCase());
console.log(toUpperCase);

const names = ["Lisa", "Jim", "hannah", "frank"];
const namesLength = names.map(function (element) {
  return element.length;
});
console.log(namesLength);

const values = [1, 3, 4, 7];

//ARRAY.FILTER///

const testscores = [72, 95, 90, 75, 79];
const A = [];
for (const element of testscores) {
  if (element >= 90) {
    A.push(element);
  }
}
console.log(A);

const participants = ["Ben", "Sarah", "Eli", "Henry", "Sean", "Annabel"];
const sNames = participants.filter(function (element) {
  return element[0] == "S";
});
console.log(sNames);

const week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const workWeek = week.filter(function (element, index) {
  return index > 0 && index < 6;
});
console.log(workWeek);

const testscores = [72, 95, 90, 71, 75, 79];
const A = testscores.filter((element) => element >= 90);
console.log(A);

const names = ["Tony", "Tania", "Vince", "Terry"];
const T = names.filter((element) => element[0] == "T");
console.log(T);

//ARRAY.REDUCE
const miles = [33, 95, 79];
let total = 0;
for (const element of miles) {
  total += element;
}
console.log(total);

const competitors = ["Sandy", "Eugene", "Kim", "Jason"];
const list = competitors.reduce();

const miles = [35, 95, 79];
const total = miles.reduce(function (prev, curr) {
  return prev + curr;
});
console.log(total);

const miles = [36, 95, 79];
const total = miles.reduce((prevVal, currVal) => prevVal + currVal);
console.log(total);

//LOGICAL OPERATORS
let isBatteryOn = true;
let isSwitch = true;
console.log(isBatteryOn && isSwitch);

let isBatteryOn = false;
let isSwitch = false;
console.log(isBatteryOn && isSwitch);

let isBatteryOn = false;
let isSwitch = false;
let result = isBatteryOn && isSwitch;
console.log(result);

let cost = 50;
let sellPrice = 60;
const profit = sellPrice - cost;
const result = cost < sellPrice && profit > 0;
console.log(result);

let isBatteryOn = true;
let isPowerOn = false;
console.log(isBatteryOn || isPowerOn);

let isBatteryOn = false;
let isPowerOn = false;
console.log(isBatteryOn || isPowerOn);

let isBulb0n = true;
console.log(!isBulb0n);

let isBatteryOn = true;
let isPowerOn = false;
console.log(!(isBatteryOn && isPowerOn));

let isBatteryOn = true;
let isPowerOn = false;
console.log(isBatteryOn && isPowerOn);
console.log(!(isBatteryOn && isPowerOn));

const condition1 = 5 >= 6;
const condition2 = 9 === 10;
console.log(condition1 || condition2);

let condition1 = true;
let condition2 = false;
const logicalExpression = condition1 || condition2;
console.log(!(condition1 && condition2));

let isLoanApproved = true;
let cash = 30000;
let cost = 40000;
const isCarBought = isLoanApproved || cash > cost;
console.log(isCarBought);

let isLoanRejected = false;
const isLoanGranted = !isLoanRejected;
console.log(isLoanGranted);

let LoanRejected = false;
let cash = 30000;
let cost = 40000;
const insufficientFunds = cash < cost;
const canBuyCar = !(LoanRejected && insufficientFunds);
console.log(canBuyCar);
