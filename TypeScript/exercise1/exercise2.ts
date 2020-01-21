
// Exercise 1 - Maybe use an Arrow Function?
const double = (value: number) => value * 2; 

console.log(double(10));
 
// Exercise 2 - If only we could provide some default values...
var greet = (name: string = "Max") => {
    console.log("Hello, " + name);
};
greet();
greet("Anna");
 
// Exercise 3 - Isn't there a shorter way to get all these Values?
var numbers = [-3, 33, 38, 5];
console.log(Math.min(...numbers));
 
// Exercise 4 - I have to think about Exercise 3 ...
let newArray = [55, 20];
newArray.push(...numbers);
console.log(newArray);
 
// Exercise 5 - That's a well-constructed array.
const testResults = [3.89, 2.99, 1.38];
const [num1, num2, num3] = testResults
console.log(num1, num2, num3);
console.log(...testResults); 
   
// Exercise 6 - And a well-constructed object!
const scientist = {firstName: "Will", experience: 12};  
const {firstName, experience} = scientist; 
console.log(firstName, experience);
