//Create a conditonal that checks their age
let age
//If under 16, tell them they can not drive
if (age<16){
    console.log("You can't drive!")
}

//If under 18, tell them they can't hate from outside the club, because they can't even get in
else if (age<18){
    console.log("You can't get in the club!")
}
//If under 21, tell them they can not drink
else if (age<21){
    console.log("You can't drink!")
}
//If under 25, tell them they can not rent cars affordably
else if (age<25){
    console.log("You can't rent a car affordably!")
}
//If under 30, tell them they can not rent fancy cars affordably
else if (age<30){
    console.log("You can't rent a fancy car affordably!")
}
//If over 30, tell them there is nothing left to look forward too
//Don't need the if, because evey case will be covered.
else {
    console.log("There is nothing left to look forward to!")
}


//--- Harder
//On click of the h1
let h1 = document.querySelector("h1")

h1.addEventListener("click", checkAge)
//Take the value from the input
//Place the result of the conditional in the paragraph
let p = document.querySelector("p")

function checkAge(){
let age = Number(document.querySelector("#danceDanceRevolution").value)

if (age<16){
    p.innerText = "You can't drive!"
}

//If under 18, tell them they can't hate from outside the club, because they can't even get in
else if (age<18){
    p.innerText = "You can't get in the club!"
}
//If under 21, tell them they can not drink
else if (age<21){
    p.innerText = "You can't drink!"
}
//If under 25, tell them they can not rent cars affordably
else if (age<25){
    p.innerText = "You can't rent a car affordably!"
}
//If under 30, tell them they can not rent fancy cars affordably
else if (age<30){
    p.innerText = "You can't rent a fancy car affordably!"
}
//If over 30, tell them there is nothing left to look forward too
//Don't need the if, because evey case will be covered.
else {
    p.innerText = "There is nothing left to look forward to!"
}



}