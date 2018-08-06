// Write a function that will return the fibonnaci sequence of an array up to n
// 1 1 2 3 5 8 13 21

// f(n) = f(n-1) + f(n-2); next number


const fibonacciIndex = (i) => { //return the fibonnaci value at index i
    if (i === 0 || i === 1){
        return 1;
    }
    return fibonacciIndex(i-1) + fibonacciIndex(i-2);
};


const fibonacciSequence = (s) => { //return the whole array of the fibonacci sequence out to s numbers
    let answer = [];
    for (let n = 0; n < s; n++){
        answer.push(fibonacciIndex(n));
    }
    return answer;
};

console.log(fibonacciSequence(0));
console.log(fibonacciSequence(1));
console.log(fibonacciSequence(2));
console.log(fibonacciSequence(3));
console.log(fibonacciSequence(4));
console.log(fibonacciSequence(5));
console.log(fibonacciSequence(6));
console.log(fibonacciSequence(7));
console.log(fibonacciSequence(8));