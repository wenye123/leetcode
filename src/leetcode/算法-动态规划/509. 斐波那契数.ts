/**
 * https://leetcode.cn/problems/fibonacci-number/
 */

/** 递归版本 */
export function fib(n: number): number {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

/**
 * 动态规划实现
    1. 转移方程
      1. 定义状态: dp[i]
      2. 状态转移方程式: dp[i] = dp[i-1]+dp[i-2]
    2. 初始化条件
    3. 特殊处理
 *
 */
export function fibByDp(n: number): number {
  // 状态&特殊处理
  const dp = [0, 1];
  // 初始条件和状态转移方程式
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}
