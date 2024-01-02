/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let nl = nums.length;
    let ap = true;
    let ns = 0;
    let solution = null;

    for (let i = 0; i < nl; i++) {
        if (Math.sign(nums[i]) === -1) {
            ap = false;
            ns += nums[i];
        }
    }

    if (ap) {
        solution = 1;
    } else {
        solution = Math.abs(ns) + 1;
    }

    console.log(solution);
    return solution;
};

let testData1 = [-3, 2, -3, 4, 2]; // solution = 5
let testData2 = [1, 2]; // solution = 1
let testData3 = [1, -2, -3]; // solution = 5

minStartValue(testData1);
minStartValue(testData2);
minStartValue(testData3);
