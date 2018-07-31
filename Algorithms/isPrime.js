// Check to see if a number is prime or not

const test1 = 1;
const test2 = 3;
const test3 = 7;
const test4 = 8;
const test5 = 51;

const isPrime = (number) => {
    if (number < 2){
        return false;
    }
    for (let i = 2; i < number; i++){
        if (number % i === 0){
            return true;
        }
    }
    return false;
}

console.log(isPrime(test1));
console.log(isPrime(test2));
console.log(isPrime(test3));
console.log(isPrime(test4));
console.log(isPrime(test5));