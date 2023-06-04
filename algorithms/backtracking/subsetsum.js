function subsetSum(nums, target) {
    const n = nums.length;
    const dp = new Array(n + 1).fill(false);
  
    // Initialize the base case: an empty subset can sum up to 0
    dp[0] = true;
  
    for (let i = 1; i <= n; i++) {
      for (let j = target; j >= nums[i - 1]; j--) {
        // Check if including the current number can form a subset sum
        dp[j] = dp[j] || dp[j - nums[i - 1]];
      }
    }
  
    return dp[target];
  }
  
  // Example usage:
  const nums = [2, 4, 6, 8];
  const target = 10;
  
  const isSubsetSumPossible = subsetSum(nums, target);
  console.log(isSubsetSumPossible); // Output: true
  