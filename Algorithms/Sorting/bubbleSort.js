// Bubble sort: sort a number array in order
// In a for loop, for every index, check index + 1. If index + 1 is less than index, swap positions

var unsortedArr = [
    10,
    5,
    25,
    1,
    33,
    90,
    17,
    20,
    7,
    9,
    22,
    37,
    99,
    1000,
    100,
    100,
    200,
    300
  ];

const bubbleSort = (unsortedArr) => {
    let sorted = false;
    let end = unsortedArr.length;
    while (sorted === false){
        sorted = true;
        for (let i = 0; i < end; i++){
            if (unsortedArr[i+1] < unsortedArr[i]){
                const a = unsortedArr[i];
                const b = unsortedArr[i+1];
                unsortedArr[i] = b;
                unsortedArr[i+1] = a;
                sorted = false;
            }
        }
        end--

        if (sorted === true){
            break;
        }
    }
    return unsortedArr;
}
console.log("Bubble sort result:")
console.log(bubbleSort(unsortedArr))


// Bubble sort using do while

var unsortedArr2 = [
    10,
    5,
    25,
    1,
    33,
    90,
    17,
    20,
    7,
    9,
    22,
    37,
    99,
    1000,
    100,
    100,
    200,
    300
  ];

let sorted;
let end = unsortedArr2.length;
const bubbleSortDoWhile = (array) => {
    sorted = true;
    for (let i = 0; i < end; i++){
        if (array[i+1] < array[i]){
            const a = array[i];
            const b = array[i+1];
            array[i] = b;
            array[i+1] = a;
            sorted = false;
        }
    }
    end--;
}

do{
bubbleSortDoWhile(unsortedArr2);
}while(!sorted);
console.log("\nUsing do while:");
console.log(unsortedArr2);