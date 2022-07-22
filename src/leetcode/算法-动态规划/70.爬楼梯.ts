/**
 * https://leetcode.cn/problems/climbing-stairs/
 */

/**
 * 其实就是斐波那契
 */
export function climbStairs(n: number): number {
  // 初始条件
  const dp = [1, 1];
  // 循环
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}
