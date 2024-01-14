/* 
Given an integer array arr, count how many elements x there are, such that x + 1 is also in arr. 
If there are duplicates in arr, count them separately.
*/

/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
    let numMap = new Map()
    let numCounter = 0
    let max = arr.length
    // convert array to map
    for ( let i = 0 ; i < max ; i++ ){
        numMap.set(arr[i],true)      
    }
    // check map for +1 elements , if found add 1 to +1 element counter
    for ( let i = 0 ; i < max ; i++ ){
        if(numMap.has(arr[i]+1) == true){numCounter++}
    }
    return numCounter
};