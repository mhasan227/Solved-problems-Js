/*Write a function called ‘countCharacter’ that takes a string as parameters and returns an object with character count.
For Example:
Input: “Hello”
Output: {H:1, e:1, l: 2, o:1}
*/

function countCharacter(str){
    let charCount = {};

    for (const ele of str) {
        if(charCount[ele]){
            charCount[ele] += 1;
        }else{
            charCount[ele] = 1;
        }
    }
        
    return charCount;
}

console.log(countCharacter('Hello'))