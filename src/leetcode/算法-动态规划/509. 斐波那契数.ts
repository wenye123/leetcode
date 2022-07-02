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
    1. 定义状态: i表示n dp[i]表示结果
    2. 定义转移方程式: dp[i] = dp[i-1]+dp[i-2]
    3. 确定初始条件和遍历顺序
    4. 边界判断
 */
export function fibByDp(n: number): number {
  // 初始条件
  const dp = [0, 1];
  // 状态转移方程式
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}
