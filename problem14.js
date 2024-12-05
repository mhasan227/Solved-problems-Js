/*
Write a program that prints a triangle asterisk (*). The number of rows in the triangle is determined by the user's input. Each row should contain a  string where the characters are repeated in a mirrored pattern.
For example, if the user inputs 5, the program should print:
      *
    ***
   ****
  *****
 ******
*/

function printTriangleStar(rows){
    for(let i = 0; i< rows ; i++){
        let space = ' '.repeat(rows-i);
        let star  = '*'.repeat(i + 1);

        console.log(space + star);
    }
}

printTriangleStar(5);