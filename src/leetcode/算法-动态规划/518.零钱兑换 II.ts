/**
 * https://leetcode.cn/problems/coin-change-2/
 */
//! 看不懂

/**
 * 动态规划
 *
 * [1,2,5]
 *
 *   状态: i金额 dp[i]硬币组合数
 *   方程式: dp[5] = dp[5-1] + dp[5-2] + dp[5-5]
 *
 */
export function change(amount: number, coins: number[]): number {
  // 状态 i金额 dp[i]表示硬币组合数
  const dp = new Array(amount + 1).fill(0);
  dp[0] = 1;

  for (let coin of coins) {
    for (let i = 1; i <= amount; i++) {
      if (i - coin >= 0) {
        dp[i] += dp[i - coin];
      }
    }
  }

  return dp[amount];
}
