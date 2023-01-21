var budget = 3200;
var savingpriority = "high";
var rent = 1100;
var utilities = 370;
var newlaptop = 1200;

var totalcosts = rent + utilities;
var budgetleft = budget - totalcosts;
var buylaptop = budgetleft >= newlaptop;

console.log("New Laptop within Budget");
console.log(buylaptop);

console.log("Postpone Purchase And Save Instead");
console.log(savingpriority === "high");
