/**
 * https://leetcode.cn/problems/min-cost-climbing-stairs/
 */

/**
 * - 转移状态: i表示台阶的索引 dp[i]表示台阶的花费
 * - 转移方程式: dp[i] = Math.min(dp[i-1], dp[i-2]) + cost[i]
 * - 初始条件和循环
 * - 边界
 */
export function minCostClimbingStairs(cost: number[]): number {
  // 初始条件
  const dp = [cost[0], cost[1]];

  for (let i = 2; i < cost.length; i++) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
  }

  return Math.min(dp[dp.length - 1], dp[dp.length - 2]);
}

/** 通过变量 */
export function minCostClimbingStairs2(cost: number[]): number {
  let prev = cost[0];
  let next = cost[1];

  for (let i = 2; i < cost.length; i++) {
    const tmp = Math.min(prev, next) + cost[i];
    prev = next;
    next = tmp;
  }

  return Math.min(prev, next);
}
