function mergeArray(arr1, arr2){
    let array = [...arr1, ...arr2];
    return array.sort((a,b)=> a-b);
}

console.log(mergeArray([1,3,5,7,9], [2,4,6,8,10]))