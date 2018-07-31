// Print out numbers 1 - 100. For multiples of 3 print Fizz. For multiples of 5 print Buzz. For multiples of both 3 and 5 print FizBuzz.

for (let i = 1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0){
        console.log("Fizz");
    }
    else if (i % 5 === 0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
}