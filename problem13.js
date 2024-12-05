/*Write a function called "findPrimeNumbers" that takes an array of positive integers as input and returns a new array containing only the prime numbers from the original array.
For example:
Input: [2, 3, 4, 5, 6, 7, 8, 9, 10]
Output: [2, 3, 5, 7]
*/

function isPrime(n) {
    if (n < 2) return false; 
    for (let i = 2; i <= Math.sqrt(n); i++) { 
        if (n % i === 0) { 
            return false;
        }
    }
    return true; 
}
function findPrimeNumbers(arr){
    let primeArray=[];
    arr.forEach((ele)=>{
        if(isPrime(ele)){
            primeArray.push(ele);
        }
    })
    console.log(primeArray);
}

findPrimeNumbers([2, 3, 4, 5, 6, 7, 8, 9, 10]);