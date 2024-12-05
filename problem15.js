/*
Write a program that prints a triangle of palindromic strings. The number of rows in the triangle is determined by the user's input. Each row should contain a palindromic string where the characters are repeated in a mirrored pattern.
For example, if the user inputs 5, the program should print:
      1
    232
   34543
  4567654
 567898765
*/

function printTrianglePalindromicString(row){
    let space = '';
    for(let i = 1; i <= row; i++){
        space = ' '.repeat(row - i);

        let increase = '';
        for(let j = 0; j<i; j++){
            increase += (i+j).toString();
        }

        let decrease = increase.slice(0,-1).split("").reverse().join("");

        console.log(space + increase + decrease);

    }
}

printTrianglePalindromicString(5);