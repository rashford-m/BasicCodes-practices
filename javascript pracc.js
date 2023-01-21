var hour = 9;
if (hour < 12) {
  ("Good Morning");
} else {
  console.log("Good Night");
}

var hour = 14;
if (hour < 12) {
  console.log("Good Morning");
} else if (hour < 17) {
  console.log("Good Afternoon");
}

var hour = 18;
if (hour < 12) {
  console.log("Good morning");
} else if (hour < 17) {
  console.log("Good afternoon");
} else {
  console.log("Good night");
}
//LOOPS
//SELF ASSIGNING
var wallet = 6;
wallet = wallet + 3;
wallet = wallet - 4;

var likes = 7;
likes += 4;
likes -= 6;
//(INCREASE VALUE BY ONE)
var food = 6;
food++;
food--;

//REPEATING WITH WHILE
var number = 5;
while (number < 10) {
  console.log("Your Score:" + " " + number++);
}

var number = 5;
while (number >= 2) {
  "Your Score:" + " " + number++;
}

//REPEATING WITH 'FOR'
for (var i = 1; i < 5; i++) {
  console.log(i);
}

for (var i = 8; i > 0; i--) {
  console.log(i);
}
for (var i = 6; i >= 2; i--) {
  console.log(i);
}

//ARRAYS
//Grouping value with arrays
var friends = ["Obefe", +"Kiddo", +"Danny"];
console.log(friends);

//Changing value with arrays
var temperature = [17, 20, 26, 24];
console.log(temperature[1]);

var temperature = [2, 5, 6, 7];
temperature[2] = 15;
console.log(temperature);

//Pushing and popping arrays
//(push)[to add]
var toDo = ["call mom", "dishes"];
toDo.push("groceries", "feed cat");
console.log(toDo);
var activeusers = ["sue", "mike"];
activeusers.push("joe", "rashford", "hey");

//(pop)[substract]
var toDo = ["call mom", "dishes"];
toDo.pop();
console.log(toDo);

var chore = toDo.pop();
console.log(chore);

//Deciding with arrays(it counts the element inside the array)
var tasks = ["dishes", "windows", "vacum"];
console.log(tasks.length);

var tasks = ["dishes", "windows", "vacum"];
if (tasks.length > 0) {
  console.log("Ugh, more work");
}

var friends = ["Anna", "Tim", "Eve"];
for (var i = 0; i < friends.length; i++) {
  console.log(i);
}

var family = ["Frank", "Monica", "Fiona", "Lip"];
family.pop();
family.pop();
console.log(family.length);

//FUNCTIONS(used to group related codes)
function greetUser(params) {
  console.log("Good Morning Anna");
  console.log("Welcome Back");
}
greetUser();
//(creating parameters)
function greetRon() {
  var name = "Ron";
  console.log("Hello, " + name);
}
greetRon();

function greetLeslie() {
  var name = "Leslie";
  console.log("Hello, " + name);
}
greetLeslie();

function lampStatus() {
  var power = true;
  console.log("Powered On: " + power);
}
lampStatus();

function userStatus() {
  var active = "Active";
  var inactive = "Inactive";
  console.log("Bob: " + inactive);
}
userStatus();

function greet(name) {
  console.log("Hello, " + name);
}
greet("Anna");

function userStatus(status) {
  console.log("Bob: " + status);
}
userStatus("Active");

function displayHalf(number) {
  var half = number / 2;
  console.log(half);
}
displayHalf(10);

function doubleNumber(number) {
  var result = number * 2;
  console.log(result);
}
doubleNumber(5);

//(returning values)
function userAge(number) {
  var age = "User Age" + number;
  return age;
}
console.log(userAge(22));

//(multiple parameters)
function display(firstName, lastName) {
  console.log(firstName + " " + lastName);
}
display("Alex", "Morgan");

function displayWinners(first, second) {
  console.log("1st: " + first);
  console.log("2nd: " + second);
}
displayWinners("Amy", "Sam");

function display(first, second, third) {
  console.log(first + " " + second + " " + third);
}
display("duck", "duck", "goose");

//(understanding functions)
function calculateSum(a, b) {
  return a + b;
}
function calculateDifference(a, b) {
  return a - b;
}
var sum = calculateSum(30, 11);
var difference = calculateDifference(30, 11);
console.log(sum);
console.log(difference);

var author = "J.D. Salinger";
var title = "Tortilla Flat";
var date = 1935;

displayAuthor(author);
displayTitle(title);
displayDate(date);

function displayScore(name, points) {
  console.log(name + ": " + points);
}
displayScore("Johnny", 350);

function sumScore(score, bonus) {
  console.log(score + bonus);
}
sumScore(100, 50);

function isRentingAge(age) {
  console.log(age >= 25);
}
isRentingAge(25);

function isSameWord(word) {
  console.log(word === "bombastic");
}

function displayName(points, name) {
  console.log(name + ": " + points);
}
displayName(350, "Johnny");

function snooze(time, snooze) {
  return time + snooze;
}
var newAlarmTime = snooze(1300, 15);
console.log(newAlarmTime);

function displayName(names) {
  console.log(names);
}
var students = ["Laurel", "Yanni"];
displayName(students);

function displayNumberOfNames(names) {
  console.log(names.length);
}
var students = ["Laurel", "Yanni"];
displayNumberOfNames(students);

function displayFirstName(names) {
  console.log(names[0]);
}
var students = ["Laurel", "Yanni"];
displayFirstName(students);

function name(params) {}
function getAverage(grades) {
  return grades[0] + grades[1] + grades[2] / 3;
}
var grades = [10, 5, 8];
var average = getAverage(grades);
console.log(average);

//OBJECTS
//grouping of variables

var cat = {
  name: "Garfield",
  favoriteFood: "Lasagna",
};

var person = {
  name: "Joe Exotic",
  nickname: "Tiger King",
  occupation: "Zookeeper",
  age: 57,
};
console.log(person);
console.log(person.name);

var person = {
  name: "Joe Exotic",
  nickname: "Tiger King",
  occupation: "Zookeeper",
  age: 57,
};
person.nickname = "Tiger Prince";
console.log(person);

//Using Objects Methods

var dog = {
  name: "Bo",
};
function bark() {
  console.log("woof woof");
}

var dog = {
  name: "Bo",
  function() {},
};

var myCereal = {
  name: "Trix",
  display: function () {
    console.log(this);
  },
};
myCereal.display();

var myCereal = {
  name: "Trix",
  display: function () {
    this.name = "Cocoa Puffs";
  },
};
myCereal.display();

class Employee {
  constructor(company) {
    this.company = company;
  }
}
class Dishwasher extends Employee {}
var emp1 = new Dishwasher("Pug");
console.log(emp1.company);

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

//ES6 VARIABLES AND SCOPE
var color = "red";

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
var surname = "SMITH";

const canDance = true;
const canDance = false;

let tree = "Crespon";

let year = 2022;
year = 2022;
console.log(year);

let river = "Thames";
var mountain = "Everest";
const forest = "Thick Forest";

//Difference between VAR, LET, CONST
const piNumber = 3.1416;
piNumber = 90;
console.log(piNumber);

const BIRTHDAY = 22 / 02 / 1999;
console.log(BIRTHDAY);

const SPEED_OF_LIGHT = "3*10";
console.log(SPEED_OF_LIGHT);

const NEW_PRESENT = "Trouser";
const WARDROBE = ["Shirts"];
WARDROBE.push(NEW_PRESENT);
console.log(WARDROBE);

const MY_CLOTHES = { shirts: 1 };
MY_CLOTHES.shirts++;
console.log(MY_CLOTHES.shirts);

zodiacSign = "Aries";
var zodiacSign;
console.log(zodiacSign);

const EULER_NUMBER = 2.71828;

var lotteryNumbers;
lotteryNumbers = [20, 34, 645, 01];
console.log(lotteryNumbers);

const CAPITAL_OF_ZAMBIA = "Lusaka";

asleep = "true";
var asleep;
console.log(asleep);

function visitCountry() {
  var country = "Argentina";
  console.log(country);
}
visitCountry();

let cityToVisit = "Salzburg";
function travel() {
  console.log("Lets go to" + cityToVisit);
}
travel();
console.log(cityToVisit);

if (10 === 10) {
  console.log("This space here block scope");
}

var age = 18;
var access = true;
if (age === 18) {
  var access = false;
}
console.log(access);

const drivingAge = 18;
let CanDrive = false;
if (drivingAge === 18) {
  let CanDrive = true;
}
console.log(CanDrive);

//FOR LOOP
const names = ["john", "bob", "mary", "joe"];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

for (name of names) console.log(name);

const user = { firstName: "John", lastName: "Doe" };
for (key in user) console.log(user[key]);

//'WHILE' LOOP
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

//FOR EACH LOOP FUNCTION
const animals = ["cat", "dog", "sheep", "bird"];
animals.forEach((animal) => {
  console.log(animal);
});

//ARRAYS
const schedule = ["wake up", "Eat", "film a movie", "watch things on netflix"];
const phonenumbers = [12346, 457376];
console.log(schedule[0]);
//TO ADD ARRAYS
schedule.push("play games");
console.log(schedule);
//TO REMOVE ARRAYS
schedule.pop();
console.log(schedule);

console.log(schedule.indexOf("Eat"));

const schedule = ["wake up", "Eat", "film a video", "watch things on netflix"];
const film = schedule.indexOf("film a video");
console.log(film);

//JAVASCRIPT OBJECTS
const user = {
  name: "Edwin",
  age: 18,
  married: false,
  purchases: ["phone", "car", "laptop"],
  sayName: function () {
    console.log(this.name);
  },
};
user.sayName();

//FUNCTIONS
const name = "Dev Rashford";
function logger() {
  console.log("Party Time");
  console.log("Party Time");
  console.log("Party Time");
  console.log("Party Time");
}
logger();

const name = "Dev Ed";
function adder(num1, num2) {
  console.log(num1 + num2);
}
adder(5, 10);

const name = "Dev Rashford";
const footballer = "Rashford";

function toUpper(text) {
  const upperCased = text.toUpperCase();
  console.log(upperCased);
}
toUpper(name);
toUpper(footballer);

//ANOTHER WAY TO WRITE FUNCTION
const toUpper = () => {};

//CLASSES
class House {
  constructor(color) {
    this.color = color;
  }
  getFurniture() {
    return "sofa";
  }
}
const houseObject = new House(red);
const houseObject2 = new House(blue);

console.log(houseObject.color);
console.log(houseObject2.getFurniture());

console.log(houseObject2.color);
console.log(houseObject2.getFurniture());

class User {
  constructor(name) {
    this.name = name;
    this.isOnline = true;
  }
}
const user1 = new User("Arya");
const user2 = new User("Bran");
const user3 = new User("Sansa");
const user4 = new User("Jon");

console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);

class Food {
  constructor(name, calories) {
    this.name = name;
    this.calories = calories;
  }
}
const banana = new Food("banana", 105);
const rice = new Food("rice", 50);
console.log(banana);
console.log(rice);

class Food {
  constructor(name, calories) {
    this.name = name;
    this.calories = calories;
  }
}
const banana = new Food("banana", 105);
console.log(banana);
const rice = new Food("rice", 50);
banana.calories = banana.calories / 2;
console.log(rice);

class Food {
  constructor(name, calories) {
    this.name = name;
    this.calories = name;
  }
}
const banana = new Food("banana", 105);
const rice = new Food("rice", 50);
const pizza = new Food("pizza", 350);

console.log(banana);
console.log(rice);
console.log(pizza);

//CLASS INHERITANCE(INHERITING ANOTHER CLASS)
class Animal {
  constructor(name) {
    this.name = name;
  }
}
class Dog extends Animal {}

class Animal {
  constructor(name) {
    this.name = name;
  }
}
class Dog extends Animal {}
const dog = new Dog("Pug");
console.log(dog);

class Appliance {
  constructor(brand) {
    this.brand = brand;
  }
}
class Dishwasher extends Appliance {}

class Appliance {
  constructor(brand) {
    this.brand = brand;
  }
}
class Dishwasher extends Appliance {}
const kitchenAppliance = new Dishwasher("Laundry");
console.log(kitchenAppliance);

class Animal {
  constructor(name) {
    this.name = name;
  }
}
class Dog extends Animal {}
const dog = new Dog("Pug");
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
const dog = new Dog("Chocolate Lab");
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
const dog = new Dog("Chocolate Lab");
const bird = new Bird("Blue Jay");
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
const dog = new Dog("Poodle");
dog.bark();

class Animal {
  constructor(name) {
    this.name = name;
  }
}
class Dog extends Animal {
  bark() {
    console.log("woof!");
  }
}
const dog = new Dog("Sparky");
dog.bark();
const bird = new Animal("Parrot");
bird.bark();

class Vehicle {
  constructor(speed) {
    this.speed = speed;
  }
}
class Bike extends Vehicle {}
const bike = new Bike("15 km/h");

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
const cookbook = new Cookbook("Pie");
cookbook.setBookmark(11);

class Employee {
  constructor(company) {
    this.company = company;
  }
}
class Lawyer extends Employee {}
const employee1 = new Lawyer("Human rights lawyer limited");
console.log(employee1.company);

class Employee {
  constructor(company) {
    this.company = company;
  }
  clockIn() {
    console.log("Starting work at" + this.company);
  }
}
class Lawyer extends Employee {}
const employee1 = new Lawyer("Human rights Lawyers Limited");
employee1.clockIn();

class Employee {
  constructor(company) {
    this.name = company;
  }
  clockIn() {
    console.log("Starting work at" + this.company);
  }
}
class Lawyer extends Employee {}
class Linecook extends Employee {}
const employee1 = new Lawyer("Human Rights Lawyers Limited");
const employee2 = new Linecook("Tasty Veggie Bar");
employee1.clockIn();
employee2.clockIn();

class Employee {
  constructor(company) {
    this.name = company;
  }
  clockIn() {
    console.log("Starting work at" + this.company);
  }
}
class Lawyer extends Employee {
  work() {
    console.log("Time to make justice");
  }
}
const employee1 = new Lawyer("Human Rights Lawyers limited");
employee1.work();

//OVERRIDING METHODS

class Human {
  constructor(weapon) {
    this.weapon = weapon;
    this.health = 100;
  }
  receiveDamage() {
    this.health = this.health - 10;
  }
}
class Wizard extends Human {
  receiveDamage() {
    this.health = this.health - 5;
  }
}
const wizard = new Wizard("staff");
console.log(wizard.health);
wizard.receiveDamage();
console.log(wizard.health);

class Human {
  constructor(weapon) {
    this.weapon = weapon;
    this.health = 100;
  }
  receiveDamage() {
    this.health = this.health - 10;
  }
}
class Wizard extends Human {
  receiveDamage() {
    this.health = this.health - 5;
  }
}
const human = new Human("ax");
human.receiveDamage();
console.log(human.health);

const wizard = new Wizard("staff");
wizard.receiveDamage();
console.log(wizard.health);

class Human {
  constructor(weapon) {
    this.weapon = weapon;
    this.human = 100;
  }
  attack() {
    console.log("Swing + this.weapon");
  }
}
class Wizard extends Human {
  attack() {
    super.attack();
  }
}
const wizard = new Wizard("Staff");
wizard.attack();

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
    super.attack();
  }
}
const wizard = new Wizard("staff");
wizard.attack();

class Human {
  constructor(weapon) {
    this.weapon = weapon;
    this.health = health;
  }
}
class Wizard extends Human {
  attack() {
    super.attack();
    console.log("Zimbalana");
  }
}
const wizard = new Wizard("staff");
wizard.attack();

class Mammal {
  eat(food) {
    console.log(food + "nom nom");
  }
}
class Rabbit extends Mammal {
  eatVeggies(food) {
    if (food === "lettuce") {
      console.log(food + "nom nom");
    }
  }
}

class ToothBrush {
  brush() {
    console.log("Cleaning teeth");
  }
}
class ElectricBrush extends ToothBrush {
  brush() {
    console.log("Bzzzzzz");
  }
}
const brush1 = new ElectricBrush();
brush1.brush();

class ToothBrush {
  brush() {
    console.log("Cleaning teeth");
  }
}
class ElectricBrush extends ToothBrush {
  brush() {
    console.log("Blzzzzz");
  }
}
const myBrush = new ElectricBrush();
myBrush();

class ToothBrush {
  brush() {
    console.log("Cleaning teeth");
  }
}
class ElectricBrush extends ToothBrush {
  brush() {
    console.log("Blzzzzzz");
  }
}
const brush1 = new ToothBrush();
const brush2 = new ToothBrush();

class ToothBrush {
  brush() {
    console.log("Cleaning teeth");
  }
}
class ElectricBrush extends ToothBrush {
  brush() {
    super.brush();
    console.log("Bzzzzz");
  }
}
const myBrush = new ElectricBrush();
myBrush.brush();

//CODING SUPER CLASS PROPERTIES

class Human {
  constructor(weapon) {
    this.weapon = weapon;
    this.health = 100;
  }
  receiveDamage() {
    this.health = this.health - 10;
  }
  attack() {
    console.log("swings" + this.weapon);
  }
}
class Warrior extends Human {
  constructor(weapon) {
    super(weapon);
  }
  receiveDamage() {
    this.health = this.health - 5;
  }
  attack() {
    super.attack();
    console.log("Barritus");
  }
}

class Human {
  constructor(weapon) {
    this.weapon = weapon;
    this.health = 100;
  }
  receiveDamage() {
    this.health = this.health - 10;
  }
  attack() {
    console.log("Swings" + this.weapon);
  }
}
class Warrior extends Human {
  constructor(weapon) {
    super(weapon);
  }
  receiveDamage() {
    this.health = this.health - 5;
  }
  attack() {
    super.attack();
    console.log("Barritus");
  }
}

class Human {
  constructor(weapon) {
    this.weapon = weapon;
    this.health = 100;
  }
  receiveDamage() {
    this.life = this.health - 10;
  }
  attack() {
    console.log("Swing" + this.weapon);
  }
}
class Warrior extends Human {
  constructor(weapon) {
    super(weapon);
  }
  receiveDamage() {
    this.health = this.health - 5;
  }
  attack() {
    super.attack();
    console.log("Barritus");
  }
}
const warrior = new Warrior("Sword");
console.log(warrior.weapon);



