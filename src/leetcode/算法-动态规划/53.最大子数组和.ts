/**
 * https://leetcode.cn/problems/maximum-subarray/
 */

/** 暴力解法 */
export function maxSubArray1(nums: number[]): number {
  let maxSum = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      maxSum = Math.max(maxSum, sum);
    }
  }
  return maxSum;
}

/** 动态规划 */
export function maxSubArray2(nums: number[]): number {
  // i数组索引 dp[i]最大和 初始值为原先值
  const dp: number[] = [];
  dp[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(nums[i], nums[i] + dp[i - 1]);
  }

  return Math.max(...dp);
}
