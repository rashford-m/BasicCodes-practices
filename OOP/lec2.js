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

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log("HI!, i study " + this.major);
  }
}
class Student extends User {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
}

const student1 = new Student("Sam", 23, "Chemistry");
const student2 = new Student("Anne", 22, "Architecture");
console.log(student1);
student1.greet();
student2.greet();

