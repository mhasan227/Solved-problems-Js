/*Write a function called "findMedian" that takes an array of numbers as input and returns the median value of the numbers.
For example:
Input: [5, 2, 8, 1, 9]
Output: 5
Input: [4, 2, 7, 1, 9, 10]
Output: 5.5
*/

function findMedian(arr){
    const sortedArray = arr.sort((a,b) => a-b);
    let mid = Math.floor(sortedArray.length/2);;
    if(sortedArray.length % 2 === 0){
        return (sortedArray[mid] + sortedArray[mid-1])/2;
    }else{
        return sortedArray[mid];
    }
    
}

console.log(findMedian([5, 2, 8, 1, 9]));
console.log(findMedian([4, 2, 7, 1, 9, 10]));