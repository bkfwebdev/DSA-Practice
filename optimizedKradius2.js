const k_radius_subarray = (nums, k) => {
    const n = nums.length;
    const avg = Array(n).fill(-1);
  
    if (k === 0) {
      return nums;
    }
  
    // Calculate the prefix sum array
    const prefixSum = [0];
    for (let i = 0; i < n; i++) {
      prefixSum[i + 1] = prefixSum[i] + nums[i];
    }
  
    for (let centerPointer = k; centerPointer < n - k; centerPointer++) {
      const leftPointer = centerPointer - k;
      const rightPointer = centerPointer + k;
  
      // Calculate the sum within the window [leftPointer, rightPointer]
      const windowSum = prefixSum[rightPointer + 1] - prefixSum[leftPointer];
  
      // Calculate the average
      avg[centerPointer] = Math.floor(windowSum / (2 * k + 1));
    }
  
    return avg;
  }
  
  // Test data
  let nums = [7, 4, 3, 9, 1, 8, 5, 2, 6];
  let k = 3;
  let testResult = k_radius_subarray(nums, k);
  let solution = [-1, -1, -1, 5, 4, 4, -1, -1, -1];
  console.log(testResult);
  console.log(solution);
  