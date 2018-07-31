//write a function that checks whether a string contains all the letters of the alphabet

var test1 = "The quick brown fox jumps over the lazy dog.";
var test2 = "The quick brown fox jumps over the lazy do.";

const isPangram = (sentence) => {

if (test1.length < 26){
    return false;
}

sentence = sentence.toLowerCase();
const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');

for (let i = 0; i < alphabet.length; i++){
        if (sentence.indexOf(alphabet[i]) <  0){
            return false;
        }
}

return true;

}

console.log(isPangram(test1));
console.log(isPangram(test2));