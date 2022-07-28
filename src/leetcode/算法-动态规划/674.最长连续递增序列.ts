/**
 * https://leetcode.cn/problems/longest-continuous-increasing-subsequence/
 */

/** 暴力 */
export function findLengthOfLCIS1(nums: number[]): number {
  let maxLen = 1;

  for (let i = 0; i < nums.length; i++) {
    let count = 1;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[j - 1]) {
        count++;
      } else {
        break;
      }
    }
    maxLen = Math.max(maxLen, count);
  }

  return maxLen;
}

/** 动态规划 */
export function findLengthOfLCIS2(nums: number[]): number {
  // 状态: i索引 值为连续递增长度
  const dp: number[] = [1];
  let maxLen = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      dp[i] = dp[i - 1] + 1;
      maxLen = Math.max(maxLen, dp[i]);
    } else {
      dp[i] = 1;
    }
  }

  return maxLen;
}
