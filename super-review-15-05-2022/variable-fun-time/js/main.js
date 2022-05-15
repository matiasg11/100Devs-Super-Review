//--- Easy
//create a variable and assign it a number
let myVar = 100
//minus 10 from that number
myVar -= 10
//print that number to the console
console.log(myVar)

//--- Medium
//create a variable that holds a value from the input
//let secondVar = +prompt("Choose a number", 9) 
//This (up) is what I thought he was asking, since it wouldn't give me time to put a number in the input.


let secondVar = Number(document.querySelector("#danceDanceRevolution").value) //It is not waiting for me or the user to put something into the variable.
//add 25 to that number
secondVar += 25
//alert that number
alert(secondVar)

//--- Hard
//create a variable that holds the h1
let h1 = document.querySelector("h1")
//add an event listener to that element that console logs the sum of the two previous variables
h1.addEventListener("click", addNumbers)

function addNumbers(){
    console.log(myVar+secondVar)
}