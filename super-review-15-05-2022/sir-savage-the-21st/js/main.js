//Create a function that has a loop that prints '21' 21 times to the console and then call that function
function twentyOne(){
    let h2 = document.querySelector("h2")
    for (let i=1; i<=21; i++){
        console.log("21")
        h2.innerText += "21\n"
    }
}
twentyOne()
//Bonus can you make it print '21' 21 times to the dom?

