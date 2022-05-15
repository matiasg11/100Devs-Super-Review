// *Variables*
// Create a variable and console log the value
let myVar = 100
console.log(myVar)
// Create a variable, add 10 to it, and alert the value
let myVar2 = 1002
myVar2 += 10
alert(myVar2)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtract4(a,b,c,d){
    console.log(a-b-c-d)
    alert(a-b-c-d)
}
subtract4(100,10,20,30)

// Create a function that divides one number by another and returns the remainder
function divideRemainder(a,b){
    let result = a%b
    console.log(result)
    return result
}
divideRemainder(100,8)

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanji(a,b){
    if (a+b > 50){
        console.log("Jumanji!!")
        alert("Jumanji!!")
    }
}
jumanji(35,16)


// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function zebra(a,b,c){
    if ((a*b*c)%3 == 0){
        console.log("Zebra")
        alert("ZEBRA")
    }
}
zebra (1,2,3)

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function repeatedWord(word, times){
    for (let i=1; i<=times; i++){
        console.log(word)
    }
}
repeatedWord("Boca",10)