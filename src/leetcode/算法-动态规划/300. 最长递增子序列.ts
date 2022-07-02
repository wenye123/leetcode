/**
 * https://leetcode.cn/problems/longest-increasing-subsequence/
 */

/**
 * 动态规划
 *   1. 转移状态: i等于数组的索引 dp[i]表示最长递增子序列
 *   2. 转移方程式: dp[i] = Math.max(dp[i], dp[j]+1)
 *   3. 初始条件和遍历顺序
 *   4. 边界判断
 *
 * 复杂度O(n^2)
 */
export function lengthOfLIS(nums: number[]): number {
  // 边界判断
  if (nums.length === 0) return 0;
  // 转移状态和初始条件
  const dp = new Array(nums.length).fill(1);
  // 遍历
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp);
}

/**
 * 贪心+二分
 *
 * 算法思路: 维护一个数组 如果值比最后一个值大就push 否则就向前找到第一个比自己大的并替换掉它 最终数组的长度就是结果
 */
export function lengthOfLIS2(nums: number[]): number {
  if (nums.length === 0) return 0; // 边界
  const arr = [nums[0]]; // 定义维护数组
  for (let i = 1; i < nums.length; i++) {
    // 比最大的值大就push
    if (nums[i] > arr[arr.length - 1]) {
      arr.push(nums[i]);
    } else {
      // 二分查找第一个比它大的值
      let left = 0,
        right = arr.length - 1;
      while (left < right) {
        let mid = (left + right) >> 1;
        if (nums[i] > arr[mid]) {
          left = mid + 1;
        } else {
          // 这里需要注意不能设置为mid-1
          right = mid;
        }
      }
      arr[left] = nums[i];
    }
  }
  return arr.length;
}
