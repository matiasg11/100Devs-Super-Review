//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

function arrayEvens(arr){
    let evens = []
    arr.forEach(element => { 
        if(element%2==0){
            evens.push(element)
        }
    });
    console.log(evens)
    return evens
    
}

arrayEvens([0,2,1,4,2,5,61,2,3,6,33])
