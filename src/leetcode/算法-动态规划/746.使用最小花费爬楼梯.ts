/**
 * https://leetcode.cn/problems/min-cost-climbing-stairs/
 */

/**
 * 给你一个整数数组 cost ，其中 cost[i] 是从楼梯第 i 个台阶向上爬需要支付的费用。一旦你支付此费用，即可选择向上爬一个或者两个台阶。
 * 你可以选择从下标为 0 或下标为 1 的台阶开始爬楼梯。
 * 请你计算并返回达到楼梯顶部的最低花费。
 * [10,15,20]-15 [1,100,1,1,1,100,1,1,100,1]-6
 *
 * - 转移状态: i表示台阶的索引 dp[i]表示台阶的花费
 * - 转移方程式: dp[i] = Math.min(dp[i-1], dp[i-2]) + cost[i]
 * - 初始条件和循环: 前两个阶梯可选没有计算必要 因此从第三个阶梯开始计算 最后返回最后两个阶梯的最小值
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
