function createUser(name) {
  const user = {
    name: name,
    status: "",
  };
}

class User {
  constructor(name) {
    this.name = name;
    this.status = "";
  }
  updateStatus(status) {
    this.status = status;
  }
}
const user1 = new User("Matt"); 
user1.updateStatus("Writing code");
console.log(user1);
