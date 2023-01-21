var song = "Don't stop me now";
var included = true;
console.log("New entry: " + song);
if (included) {
  console.log("Already Included");
}
console.log("Save and continue");

//DARKMODE
var mode = "light";
var color = "ghostwhite";
var image = "/img/light-icon.png";
var label = "Light Mode";
if (mode === "dark") {
  color = "darkslateblue";
  image = "/img/dark-icon.png";
  label = "Dark Mode";
} else if (mode === "light") {
  color = "ghostwhite";
  image = "/img/light-icon.png";
  label = "Light Mode";
} else {
  color = "dimgray";
  image = "/img/ninja-icon.png";
  label = "Ninja Mode";
}

//LIVES LEFT
var lives = 2;
console.log("Lives: " + lives);
lives = lives - 1;
console.log("Lives: " + lives);
lives = lives - 1;
console.log("Lives: " + lives);
console.log("Game over");

//MUTUAL FRIEND LIST
var friends = "Mutual friends";
friends = friends + " Jan";
friends = friends + " Brett";
friends = friends + " Carly";
console.log(friends);

//
console.log("$101 deposited");
account = 101;
console.log("$13 latte purchased");
account = account;
console.log("$65 TV purchased");
console.log("Account: $" + account);

//REUSABLE PROGRAMS
//nesting conditions
function displayMessage(message) {
  console.log(message);
}
displayMessage("Approved");

function isRenting(age) {
  if (age >= 21) {
    console.log("Approved");
  }
}
isRentingAge(26);

function displayAlarm(time) {
  if (time === "7:00") {
    console.log("Waky Waky");
  }
}
displayAlarm("7:00");

function isRentAge(age) {
  if (age >= 21) {
    console.log("Approved");
  }
  console.log("Check Complete");
}
isRentAge(20);

function isLying(boolean) {
  console.log("Welcome to the lie detector");
  if (boolean === false) {
    console.log("He's Lying");
  }
}
isLying(false);

function hasPassed(score) {
  if (score >= 50) {
    console.log("Passed");
  }
}
hasPassed(50);

function displaySalary(salary) {
  if (salary < 2100) {
    salary = salary + 500;
  }
  console.log(salary);
}
displaySalary(2000);

function getTaxedSalary(salary) {
  if (salary > 2100) {
    salary = salary - 500;
  }
  return salary;
}
var income = getTaxedSalary(2100);
console.log(income);

//Using conditions and functions
function applySeniorDiscount(age) {
  if (age >= 65) {
    console.log(age + " year old has 50% OFF");
  }
}
applySeniorDiscount(18);
applySeniorDiscount(67);

function isGreater(a, b) {
  if (a > b) {
    console.log(a + "is greater than" + b);
  }
}
isGreater(13, 10);

function checkPassword(word) {
  if (word === "12345") {
    console.log("Logging In");
  } else {
    console.log("Wrong password");
  }
}
checkPassword("swordshift");

function checkName(male) {
  if (male === "Rashford") {
    console.log("You are correct");
  } else {
    console.log("You are wrong");
  }
}

//stopping functions with returns

function multiplyByTen(number) {
  return number * 10;
}
var result = multiplyByTen(29);
console.log(result);

function getDiscount(age) {
  if (age >= 65) {
    return "50% OFF";
  }
  return "0% OFF";
}
var discount = getDiscount(67);
console.log(discount);

function getDiscount(age) {
  if (age >= 65) {
    return "50% OFF";
  }
  return "0% OFF";
}
var discount = getDiscount(18);
console.log(discount);

function getDiscount(age) {
  if (age <= 18) {
    return "50% OFF";
  } else if (age >= 65) {
    return "30%";
  }
  return "Full price";
}
var discount = getDiscount("25");
console.log(discount);

//Adding loops to functions
function myName(name) {
  if (name === rashy) {
    return "Give discount";
  } else if (age === michael) {
    return "No Discount";
  }
}

//FREESTYLE
var rashford = {
  name: "michael",
  dept: "accounting",
  food: "beans and garri",
  preference: "boobs",
};
rashford.name = "Oluwaseun";
console.log(rashford);

var number = 10;
while (number > 15) {
  console.log("Your Name" + " " + number++);
}

for (var i = 6; i < 10; i++) {
  console.log(i);
}

for (var a = 10; a > 1; a--) {
  console.log(a);
}

var toDo = ["call me", "Don't Flash"];
toDo.push("Make Babies", "okay boys");
console.log(toDo);

var tasks = ["dishes", "comic", "hello"];
console.log(tasks.length);

var names = ["michael", "arowo", "seun"];
if (names.length > 0) {
  console.log("hey, make we go");
}

function greet(name) {
  console.log("Hello," + " " + name);
}
greet("Hannah");

function displayHalf(number) {
  var half = number / 2;
  console.log(half);
}
displayHalf(20);

function doubleNumber(number) {
  var result = number * 2;
}
console.log(result);
doubleNumber(5);

//Adding Loops to functions
for (var i = 0; 1 < 5; i++) {
  console.log(i);
}

function displayNumbers() {
  for (var i = 1; i <= 3; i++) {
    console.log("And a " + i);
  }
}
displayNumbers();

function displayNumbers(message) {
  for (var i = 0; i < 10; i++) {
    console.log(i + message);
  }
}
displayNumbers(" ginger beers on the wall");

function displayNumbers(message) {
  for (var i = 0; i <= 10; i++) {
    console.log(i + message);
  }
}
displayNumbers("ginger beers on the ball");
displayNumbers("root beers on the wall");

function displayNumbers(multiplier) {
  for (var i = 0; i <= 10; i++) {
    console.log(i * multiplier);
  }
}
displayNumbers(10);

function displayCountdown(message) {
  for (var i = 5; i > 0; i--) {
    console.log(i + message);
  }
}
displayCountdown(" mississippi");

function displayRhythmCount(message) {
  for (var i = 1; i <= 4; i++) {
    console.log(i + message);
  }
}
displayRhythmCount(" and");

function displayNumbers(addition) {
  for (var i = 0; i < 3; i++) {
    console.log(i + addition);
  }
}
displayNumbers(10);

function displayNumbers() {
  for (var i = 1; i <= 3; i++) {
    console.log("And a" + i);
  }
}
displayNumbers();
displayNumbers();

function displayAlert(message) {
  for (var i = 0; i < 3; i++) {
    console.log(message);
  }
}
displayAlert("Fasten seat belt");
displayAlert("check Mirrors");

function displayPageNumbers(page) {
  for (var i = 1; i <= 20; i++) {
    console.log(page + i);
  }
}
displayPageNumbers("page ");

function drawVerticalLines() {
  for (var i = 0; i < 3; i++) {
    console.log("I");
  }
}
drawVerticalLines();

function drawVerticalLine(times) {
  for (var i = 0; i < times; i++) {
    console.log("i");
  }
}
drawVerticalLine(5);

function displayInterval(start, end) {
  for (var i = start; i < end; i++) {
    console.log(i);
  }
}
displayInterval(26, 30);

function displaySign(sign, times) {
  for (var i = 0; i < times; i++) {
    console.log(sign);
  }
}
displaySign("$", 3);

function displayYears(start, end) {
  for (var i = start; i <= end; i++) {
    console.log(i);
  }
}
displayYears(1998, 1999);

function displayCountdown(start) {
  for (var i = start; i > 0; i--) {
    console.log(i);
  }
  console.log("Launch");
}
displayCountdown(3);

//looping over arrays

let grades = [91, 66, 77, 84, 66];
let search = 66;
function searchGrades(grades, search) {
  for (var i = 0; i < grades.length; i++) {
    if (grades[i] == search) {
      console.log("The grade exists");
      break;
    }
  }
}
searchGrades(grades, search);

let grades = [92, 66, 77, 84];
let grades2 = [50, 60, 70, 80];

function searchGrade(grades, grades2) {
  console.log(grades);
  console.log(grades2);
}
searchGrades(grades, grades2);

let grades = [91, 66, 77, 84];
function searchGrades(grades) {
  for (var i = 0; i < grades.length; i++) {
    console.log(grades[i]);
  }
}
searchGrades(grades);

let marks = [10, 20, 30, 40];
function searchMarks(marks) {
  for (var i = 2; i < marks; i++) {
    console.log(marks[i]);
  }
}

let one = [91, 66, 77, 84, 68];
let two = [81, 66, 78, 88, 98];
function compareArrays(one, two) {
  for (let i = 0; i < one.length; i++) {
    if (one[i] === two[i]) {
      console.log("common element:", one[i]);
    }
  }
  return false;
}

let names = ["Mary", "Paul"];
let age = [25, 28];

function displayPeople(names, age) {
  console.log(names);
  console.log(age);
}
displayPeople(names, age);

let prices = [99, 129, 149];
let discount = [0.1, 0.2, 25];

function searchDiscount(prices, discount) {
  console.log(prices);
  console.log(discounts);
}
searchDiscount(prices, discount);

let prices = [99, 129, 149];
function getPrices(prices) {
  for (var i = 0; i < prices.length; i++) {
    console.log(prices[i]);
  }
}
getPrices(prices);

let prices = [99, 129, 149];
let discount = 0.1;
function applyDiscount(prices, discount) {
  for (var i = 0; i < prices.length; i++) {
    console.log(prices[i] * discount);
  }
}
applyDiscount(prices, discount);

//ES6
//ES6 Variables and scope
var fullName = "Emma Watson";
const occupation = "Activist";
let age = 30;
console.log(fullName);
console.log(occupation);
console.log(age);

//Arrow functions
function getGreeting() {
  return "Hello";
}
var greeting = () => "Hi";
console.log(getGreeting());
console.log(greeting());

function getGreeting(firstName) {
  return "Greetings" + firstName;
}
var greeting = (firstName) => {
  return "Greetings" + firstName;
};
console.log(greeting(Tony));

var hello = function myFunction() {
  return "Greetings";
};
var hello = () => {
  return "Greetings ";
};

const Greetings = () => {
  const name = "Elizabeth";
  return "Greetings " + name;
};

const getVehicleCount = () => {
  count = 4003;
  return count;
};
console.log(getVehicleCount);

const getVehicleCount = () => 400;
console.log(getVehicleCount);

const getMessage = () => "Welcome to Cyprus";
console.log(getMessage());

//Arrow Function parameters
const getPrice = (discount) => 500 - discount * 500;
console.log(getPrice(0.25));

const getPrice = (total) => {
  const discount = 0.1;
  return total - discount * total;
};
console.log(getPrice(500));

const getPrice = (total = 200) => {
  const discount = 0.16;
  return total - discount * total;
};
console.log(getPrice());
const getPrice = (total = 200, discount = 3) => total((discount / 100) * total);
console.log(getPrice());

const getPrice = (total) => {
  const discount = 0.1;
  return total - discount * total;
};
console.log(getPrice(500));

const getRatio = (nom, denom) => {
  return nom / denom;
};
console.log(getRatio(20, 2));

const getRatio = (nom, denom = 2) => {
  return nom / denom;
};
console.log(getRatio(40, 4));

const getPrice = (discount) => 100 - discount;
console.log(getPrice(10));

const getArea = (length, width = 3) => length + width;
console.log(getArea(5));

//Template Literals
let name = "Hallen";
console.log("Hello " + name + "!");
console.log(`Hello ${name}!`);

let cake = `Apple`;
console.log(cake);

let category = `Pie`;
let cake = `Apple ${category}`;
console.log(cake);

let quantity = 20;
let price = 10;
let cost = `Total Cost : ${quantity * price}`;
console.log(cost);

const greetings = (name) => {
  return `Bonjour ${name}!`;
};
console.log(greetings`Jane`);

let old = `Superman`;
let latest = `Startrek`;
let movies = `${old}, ${latest}`;
console.log(movies);

let ticketPrice = 500;
let persons = 5;
let total = `Total cost: ${ticketPrice * persons}`;
console.log(total);

const likedBy = (person) => {
  return `Movie liked by: ${person}`;
};
console.log(likedBy`Hallen`);

//CLASSES
//Using classes

var book100 = {
  author: "William Shakespear",
  title: "The Da Vinci Code",
};
console.log(book100);

class Book {
  constructor(author, title) {}
}
class Animal {
  constructor(name, species) {}
}

class Book {
  constructor(author, title) {
    this.author = author;
    this.title = title;
  }
}
var book1 = new Book("Leo Tolstoy", "War and Peace");
console.log(book1);

class Book {
  constructor(author, title) {
    this.author = author;
    this.title = title;
  }
}
var book1 = new Book("Leo Tolstoy", "War and Peace");
var book2 = new Book("Dr. Seuss", "Oh, the places you'll Go!");
console.log(book1);
console.log(book2);

class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
}
var car1 = new Car("Tesla", "Model S");
console.log(car1);

//classes with methods

class VirtualPet {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log("nom nom");
  }
}
var pet = new VirtualPet("Tom");
pet.eat();

class VirtualPet {
  constructor(name) {
    this.name = name;
  }
  eat(food) {
    if (food === "treats") {
      console.log("nom nom");
    } else {
      console.log("discard");
    }
  }
}
var pet = new VirtualPet("Tom");
pet.eat("treats");

class Device {
  constructor(type) {
    this.type = type;
  }
  batteryLevel() {}
}
var bag = new Device("flashlight");
bag.batteryLevel();

class Inventory {
  constructor(size) {
    this.size = size;
  }
  increase(unit) {
    this.size += unit;
  }
}
var bag = new Inventory(10);
bag.increase(5);

//Creating Instances
class User {
  constructor(name) {
    this.name = name;
    this.isOnline = true;
  }
}
var user1 = new User("Mike");
User.isOnline = false;
console.log(user1);

var user2 = new User("Bran");
console.log(user2);

class User {
  constructor(name) {
    this.name = name;
    this.isOnline = true;
  }
}
var user1 = new User("Mike");
var user2 = new User("Bran");
var user3 = new User("Sansa");
var user4 = new User("Richie");

class Food {
  constructor(name, calories) {
    this.name = name;
    this.calories = calories;
  }
}
var banana = new Food("banana", 105);
console.log(banana);
var pizza = new Food("pizza", 50);
var rice = new Food("rice", 50);
banana.calories = banana.calories / 2;
console.log(rice);

class User {
  constructor(name) {
    this.name = name;
    this.isOnline = true;
  }
}
var user1 = new User("Mike");
var user2 = new User("Bran");
var user3 = new User("Jon");
user1.isOnline = false;
user2.isOnline = false;

class User {
  constructor(name) {
    this.name = name;
    this.isOnline = true;
    this.status = "Hey, I'm using mimo";
  }
}
var user1 = new User("Mike");
var user2 = new User("Richard");
console.log(user2.status);

class User {
  constructor(name) {
    this.name = name;
    this.isOnline = true;
  }
  sayHi() {
    console.log("Hi, i'm " + this.name);
  }
}
var user1 = new User("Mike");
var user2 = new User("Jon");
user1.sayHi();
user2.sayHi();

class User {
  constructor() {}
  sayHi() {
    console.log("Hello");
  }
}
var user1 = new User();
user1.sayHi();

class Car {
  showWarning() {
    console.log("Fasten seatbelt");
  }
}
var car = new Car();
car.showWarning();

class Sport {
  constructor(name) {
    this.name = name;
    this.scoreValue = 0;
  }
}
var sport1 = new Sport("Football");
var sport2 = new Sport("Soccer");

sport1.scoreValue = 6;
sport2.scoreValue = 1;

class Sport {
  constructor(name) {
    this.name = name;
    this.scoreValue = 0;
    this.periods = 4;
  }
}
var sport1 = new Sport("Football");
var sport2 = new Sport("Soccer");
console.log(sport1.periods);
console.log(sport2.periods);

class Sport {
  constructor(name) {
    this.name = name;
    this.scoreValue = 0;
    this.periods = 4;
    this.score = 0;
  }
  scored() {
    this.score += this.scoreValue;
    console.log(this.score);
  }
}
var sport1 = new Sport("Football");
var sport2 = new Sport("Soccer");
sport1.scoreValue = 6;
sport2.scoreValue = 1;
sport1.scored();
sport2.scored();

class Planet {
  rotate() {
    console.log("One day over!");
  }
}
var planet1 = new Planet();
planet1.rotate();

//Extending classes
class Animal {
  constructor(name) {
    this.name = name;
  }
}
class Dog extends Animal {}
var dog = new Dog("Pug");
console.log(dog);

class Employee {
  constructor(company) {
    this.company = company;
  }
}
class Dishwasher extends Employee {}
var emp1 = new Dishwasher("Laundry");
console.log(emp1);

class Animal {
  constructor(name) {
    this.name = name;
  }
}
class Dog extends Animal {}
var dog = new Dog("Pug");
console.log(dog.name);

class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log(this.name + "is eating");
  }
}
class Dog extends Animal {}
var dog = new Dog("Chocolate Lab");
dog.eat();
class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log(this.name + "is eating");
  }
}
class Dog extends Animal {}
class Bird extends Animal {}
var dog = new Dog("Chocolate Lab");
var bird = new Bird("Blue Jay");
dog.eat();
bird.eat();

class Animal {
  constructor(name) {
    this.name = name;
  }
}
class Dog extends Animal {
  bark() {
    console.log("Woof");
  }
}
var dog = new Dog("Poodle");
dog.bark();
class Animal {
  constructor(name) {
    this.name = name;
  }
}
class Dog extends Animal {
  bark() {
    console.log("Woof");
  }
}
var dog = new Dog("Sparky");
dog.bark();
var bird = new Animal("Parrot");

class Vehicle {
  constructor(speed) {
    this.speed = speed;
  }
}
class Bike extends Vehicle {}
var bike = new Bike("15 km/h");

class Book {
  constructor(title) {
    this.title = title;
    this.page = 1;
  }
  setBookmark(page) {
    this.page = page;
  }
}
class Cookbook extends Book {}
var Cookbook = new Cookbook("Pie");
Cookbook.setBookmark(11);

class Employee {
  constructor(company) {
    this.company = company;
  }
}
class Dishwasher extends Employee {}
var emp1 = new Dishwasher("Pug");
console.log(emp1.company);

class Employee {
  constructor(company) {
    this.company = company;
  }
  clockIn() {
    console.log("Starting work at " + this.company);
  }
}
class Dishwasher extends Employee {}
var emp1 = new Dishwasher("Laundry");
emp1.clockIn();

class Employee {
  constructor(company) {
    this.company = company;
  }
  clockIn() {
    console.log("Starting work at " + this.company);
  }
}
class Dishwasher extends Employee {}
class Linecook extends Employee {}
var emp1 = new Dishwasher("Laundry");
var emp2 = new Linecook("Laundry");
emp1.clockIn();
emp2.clockIn();

class Employee {
  constructor(company) {
    this.company = company;
  }
  clockIn() {
    console.log("Starting work at " + this.company);
  }
}
class Dishwasher extends Employee {
  wash() {
    console.log("Time to wash dishes");
  }
}
var emp1 = new Dishwasher("Laundry");
emp1.wash();

//Overriding methods
class Human {
  constructor(weapon) {}
  receiveDamage() {
    this.health = this.health - 10;
  }
}
class Wizard extends Human {
  receiveDamage() {
    this.health = this.health - 5;
  }
}
var wizard = new wizard("staff");
wizard.receiveDamage();
console.log(wizard.health);
class Human {
  constructor(weapon) {}
  receiveDamage() {
    this.health = this.health - 10;
  }
}
class wizard extends Human {
  receiveDamage() {
    this.health = this.health - 5;
  }
}
var human = new Human("ax");
human.receiveDamage();
console.log(human.health);
var wizard = new Wizard("staff");
wizard.receiveDamage();
console.log(wizard.health);

class Human {
  constructor(weapon) {
    this.weapon = weapon;
    this.human = 100;
  }
  attack() {
    console.log("Swing" + this.weapon);
  }
}
class Wizard extends Human {
  attack() {
    super.attack;
  }
}
var wizard = new Wizard("staff");
wizard.attack();

class Human {
  constructor(weapon) {}
  attack() {
    console.log("Swing" + this.weapon);
  }
}
class Wizard extends Human {
  attack() {
    super.attack();
    console.log("Zimzalabini");
  }
}
var wizard = new Wizard("staff");
wizard.attack();

class Toothbrush {
  brush() {
    console.log("Cleaning teeth");
  }
}
class ElectricBrush extends Toothbrush {
  brush() {
    console.log("Bzzzzzz");
  }
}
var brush1 = new ElectricBrush();
brush1.brush();

class ToothBrush {
  brush() {
    console.log("Cleaning Teeth.");
  }
}
class ElectricBrush extends ToothBrush {
  brush() {
    console.log("Bzzzzzz");
  }
}
var myBrush = new ElectricBrush();
myBrush.brush();

class ToothBrush {
  brush() {
    console.log("Cleaning teeth");
  }
}
class ElectricBrush extends ToothBrush {
  brush() {
    console.log("Bzzzzz");
  }
}
var brush1 = new ToothBrush();
brush1.brush();
var brush2 = new ElectricBrush();

class ToothBrush {
  brush() {
    console.log("Cleaning Teeth. ");
  }
}
class ElectricBrush extends ToothBrush {
  brush() {
    super.brush();
    console.log("Bzzzzz");
  }
}
var myBrush = new ElectricBrush();
myBrush.brush();

//Coding Subclass properties
class Human {
  constructor(weapon) {
    this.weapon = weapon;
    this.health = 100;
  }
}
class Warrior extends Human {
  constructor(weapon) {
    super(weapon);
  }
}

class Human {
  constructor(weapon) {
    this.weapon = weapon;
    this.health = 100;
  }
}
class Warrior extends Human {
  constructor(weapon) {
    super(weapon);
  }
}
var warrior = new Warrior("Sword");
console.log(warrior.weapon);

class Human {
  constructor(weapon) {
    this.weapon = weapon;
    this.health = 100;
  }
}
class Warrior extends Human {
  constructor(weapon) {
    super(weapon);
  }
}

class Human {
  constructor(weapon) {
    this.weapon = weapon;
    this.health = 100;
  }
}
class Warrior extends Human {
  constructor(weapon) {
    super(weapon);
  }
}
var warrior = new Warrior("Sword");
console.log(warrior.weapon);

class Human {}
class Warrior extends Human {
  constructor(weapon, warCry) {
    super(weapon);
    this.warCry = warCry;
  }
}
var warrior = new Warrior("sword", "Barritus");

class Human {
  attack() {
    console.log("swings" + this.weapon);
  }
}
class Warrior extends Human {
  attack() {
    super.attack();
    console.log(this.warCry);
  }
}
var human = new Human("Axe");
human.attack();
var warrior = new Warrior("sword", "Barritus");
warrior.attack();

class Human {}
class Warrior extends Human {}
var alexander = new Warrior("sword", "Alala!");
var leo = new Warrior("spear", "Molon Labe");
alexander.attack();
leo.attack();

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log("I am a" + this.name);
  }
}
class Dog extends Animal {
  constructor(name) {
    super(name);
  }
}

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log("I am a" + this.name);
  }
}
class Dog extends Animal {
  constructor(name, trainer) {
    super(name);
    this.trainer = trainer;
  }
}
var rover = new Dog("Lab", "Terry");
rover.speak();

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log("I am a" + this.name);
  }
}
class Dog extends Animal {
  constructor(name, trainer) {
    super(name);
    this.trainer = trainer;
  }
  speak() {
    super.speak();
    console.log("My Trainer is " + this.trainer);
  }
}
var rover = new Dog("Lab", "Terry");
rover.speak();

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log("I am a " + this.name);
  }
}
class Dog extends Animal {
  constructor(name, trainer) {
    super(name);
    this.trainer = trainer;
  }
  speak() {
    super.speak();
    console.log("Mt trainer is " + this.trainer);
  }
}
var rover = new Dog("Lab", "Terry");
rover.speak();

var myPiggy = {
  value: 0,
  addMoney: function (amount) {
    myPiggy.value = myPiggy.value + amount;
  },
};
myPiggy.addMoney(100);
console.log(myPiggy.value);

var color = " red";

var fullName = "Emma Watson";
const occupation = "Activist";
let age = 30;
console.log(fullName);
console.log(occupation);
console.log(age);

var number = 20;
const player1 = "Sonic";
let badWeather = "rainy";

var surname = "Smith";
var surname = "Smit";
console.log(surname);

