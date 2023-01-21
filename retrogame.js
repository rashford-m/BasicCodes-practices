var firstName = "Michael";
var lastName = "Rashford";
var username = "username:" + firstName + " " + lastName;
console.log(username);
var characterName = "Mimikaro";
var character = "Character:" + characterName;
console.log(character);

document.getElementById("username").innerHTML = username;
document.getElementById("character").innerHTML = character;
