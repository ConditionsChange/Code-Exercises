//use indexOf to check whether or not something is in an array

const letters = ["a", "b", "c", "d", "e"];

if (letters.indexOf("c") >= 0){
    console.log(`Found at index ${letters.indexOf("a")}`)
}

if (letters.indexOf("z") < 0) {
    console.log("Not in letters array")
}