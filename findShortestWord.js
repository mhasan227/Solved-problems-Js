function findShortestWord(str){
    let allStr = str.split(" ");

    let shortest = allStr[0];
    for(let i = 1; i<allStr.length ; i++){
        if(shortest.length > allStr[i].length){
            shortest = allStr[i];
        }
    }

    return shortest;
}

console.log(findShortestWord("Hello World"));
console.log(findShortestWord("Today is Monday"));