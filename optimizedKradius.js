const k_radius_subarray = (nums, k) => {
    const n = nums.length;
    const avg = Array(n).fill(-1);
  
    if (k === 0) {
      return nums;
    }
  
    for (let centerPointer = k; centerPointer < n - k; centerPointer++) {
      let sum = 0;
  
      for (let i = centerPointer - k; i <= centerPointer + k; i++) {
        sum += nums[i];
      }
  
      avg[centerPointer] = Math.floor(sum / (2 * k + 1));
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
  