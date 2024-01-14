/*

Given an array nums containing n distinct numbers in the range [0, n], 
return the only number in the range that is missing from the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // get max number
    let numMap = new Map()
    let max = nums.length

    // create set
    for (let i = 0 ; i < max ; i++){
        numMap.set(nums[i],true)
    }
    // check for missing number
    for (let i = 0 ; i <= max ; i++){
        if(numMap.has(i)!=true){return i}
    }   
};

