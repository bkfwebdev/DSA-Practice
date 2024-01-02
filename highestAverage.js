/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let pointer1 = 0;
    let pointer2 = k-1;
    let limit = nums.length-1;
    let max = 0, currentMax = 0;
    while (pointer2 < limit){
        for (let i = pointer1; i <= pointer2 ; i++){
            currentMax = currentMax + nums[i];
            console.log(nums[i])
            console.log("running sum",currentMax)
        }     
        currentMax = currentMax/k
        console.log(currentMax)
        console.log("---------")
        if(currentMax > max){max = currentMax}
        currentMax = 0;
        pointer1++;
        pointer2++;
    }
    return max; 
};

let set2 = [0,1,1,3,3]
let answer = findMaxAverage(set2,4)
console.log(answer)