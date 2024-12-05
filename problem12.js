/*Write a function called "getMaxProduct" that takes an array of integers as input and returns the maximum product that can be obtained by multiplying any two distinct elements from the array.
Sample Input: [2, 3, 5, 6, 7]
Sample Output: 42 (obtained by multiplying 6 and 7)
*/
function getMaxProduct(arr){

    arr.sort((a,b)=> b-a);

    console.log(`${arr[0] * arr[1]} (obtained by multiplying ${arr[1]} and ${arr[0]})`);
}

getMaxProduct([2, 3, 5, 6, 7]);