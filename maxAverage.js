var findMaxAverage = function(nums, k) {
    let sum = 0;
    
    // Calculate the initial sum of the first 'k' elements.
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }
    
    // Initialize 'max' with the average of the first 'k' elements.
    let max = sum / k;

    for (let i = k; i < nums.length; i++) {
        // Subtract the element that goes out of the window.
        sum -= nums[i - k];
        // Add the new element that comes into the window.
        sum += nums[i];
        
        // Update 'max' with the maximum average encountered.
        max = Math.max(max, sum / k);
    }

    return max;
};

let set2 = [0, 1, 1, 3, 3];
let answer = findMaxAverage(set2, 4);
console.log(answer);
