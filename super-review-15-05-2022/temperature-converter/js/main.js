//Write your pseudo code first! 

//Need an input value.
//It should convert from C to F and not backwards.
//The formula is C*(9/5)+32
//It must return a number

document.querySelector("h1").addEventListener('click', celsiusToFahrenheit)

function celsiusToFahrenheit(celsius){
    let temp = Number(document.querySelector('input').value)
    //The formula is C*(9/5)+32
    temp = temp * 1.8 + 32
    //It must return a number
    document.querySelector("h2").innerText = temp
}

celsiusToFahrenheit(-40) //-40
celsiusToFahrenheit(0) //32
celsiusToFahrenheit(100) //212