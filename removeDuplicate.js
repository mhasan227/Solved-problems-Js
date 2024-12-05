function removeDuplicate(arr){
    return [...new Set (arr)];
}

console.log(removeDuplicate(['antu','zisan', 'faizan', 'antu', 'shahed']))
// another way
function removeDuplicate(arr){
    let uniqueArr = []; 

    for(let i = 0; i<arr.length; i++){
        if(!uniqueArr.includes(arr[i])){
            uniqueArr.push(arr[i])
        }
    }

    return uniqueArr;
}