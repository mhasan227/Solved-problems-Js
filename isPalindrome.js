function isPalindrome(str){

    let tempStr = str.split('').reverse().join(''); 
    
    return str === tempStr;
}

console.log(isPalindrome('racecar'));
console.log(isPalindrome('hello'));