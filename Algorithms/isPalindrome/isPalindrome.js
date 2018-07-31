// Detect if a test string is a palindrome or not

const test1 = "racecar";
const test2 = "otter";

const isPalindrome = (string) => {
    if (string.toLowerCase() === string.toLowerCase().split("").reverse().join("")){
        return true;
    }
    return false;
}

console.log(isPalindrome(test1));
console.log(isPalindrome(test2));