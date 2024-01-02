/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let nl = nums.length;
    let minPrefixSum = 0;
    let prefixSum = 0;

    for (let i = 0; i < nl; i++) {
        prefixSum += nums[i];
        minPrefixSum = Math.min(minPrefixSum, prefixSum);
    }

    const solution = Math.max(1, 1 - minPrefixSum);
    console.log(solution);
    return solution;
};

let testData1 = [-3, 2, -3, 4, 2]; // solution = 5
let testData2 = [1, 2]; // solution = 1
let testData3 = [1, -2, -3]; // solution = 5

minStartValue(testData1);
minStartValue(testData2);
minStartValue(testData3);
