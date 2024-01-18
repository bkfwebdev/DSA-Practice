var largestUniqueNumber = function(nums) {
    let LUN = -1; // Initialize to -1 since -1 is not a valid number in the array
    let numMap = new Map();
    let large = false;
    let unique = false;

    for (let i = 0; i < nums.length; i++) {
        if (!numMap.has(nums[i])) {
            unique = true;
        }

        if (nums[i] > LUN && unique) {
            LUN = nums[i];
            large = true;
        }

        numMap.set(nums[i], true);
    }

    if (large && unique) {
        return LUN;
    } else {
        return -1;
    }
};
