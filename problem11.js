/*Write a function called "findMissingNumber" that takes an array of consecutive integers from 1 to n, with one number missing, and returns the missing number.
For example:
Input: [1, 2, 3, 5, 6, 7, 8]
Output: 4
*/
function findMissingNumber(arr){

    const n = arr.length + 1; 

    const sum = (n * (n + 1)) / 2 ;

    const actualSum = arr.reduce((acc, num)=> acc + num, 0);

    return sum - actualSum;

}

console.log(findMissingNumber([1, 2, 3, 5, 6, 7, 8]))