/**
 * https://leetcode.cn/problems/coin-change/
 */

/**
 *
 * 动态规划
    1. 定义状态: i表示金额 dp[i]表示金额需要硬币数目
    2. 定义转移方程式: dp[i] = Math.min(dp[i], dp[amount - currCoin] + 1)
    3. 确定初始条件和遍历顺序
    4. 边界判断

    [1, 2, 5] amount=11
    dp[11] = Math.min(dp[11-1], dp[11-2], dp[11-5]) + 1 = Math.min(dp[10], dp[9], dp[6]) + 1
 */
export function coinChange(coins: number[], amount: number): number {
  // 定义状态和初始条件
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  // 遍历
  for (let coin of coins) {
    for (let currAmount = coin; currAmount <= amount; currAmount++) {
      // 转移方程式
      dp[currAmount] = Math.min(dp[currAmount], dp[currAmount - coin] + 1);
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
}
