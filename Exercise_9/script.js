let random = Math.random();
console.log(random);
let num1 = prompt("Enter first number: ");
let operator = prompt("Enter the operator: ")
let num2 = prompt("Enter second number: ");

let obj = {
  "+" : "-",
  "*" : "+",
  "*" : "/",
  "/" : "**",
}

if(random > 0.1) {
  //Perform correct calculation
  alert(`The result is ${eval(`${num1} ${operator} ${num2}`)}`);
}else{
  //Perform wrong calculation
  operator = obj[operator];
  alert(`The result is ${eval(`${num1} ${operator} ${num2}`)}`);
}