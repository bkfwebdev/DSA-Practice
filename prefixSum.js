function prefixSum(nums, k) {
    if (k < 0 || k >= nums.length) {
      throw new Error("Index out of bounds");
    }
  
    // Use reduce to calculate the prefix sum up to index k
    const result = nums.slice(0, k + 1).reduce((acc, curr) => acc + curr, 0);
  
    return result;
  }
  
  // Example usage:
  const nums = [1, 2, 3, 4, 5];
  const k = 2; // Calculate prefix sum up to index 2
  
  try {
    const sum = prefixSum(nums, k);
    console.log(`Prefix sum at index ${k} is ${sum}`);
  } catch (error) {
    console.error(error.message);
  }
  