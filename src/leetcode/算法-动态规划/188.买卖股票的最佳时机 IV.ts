/**
 * https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iv/
 */

export function maxProfit4_1(k: number, prices: number[]): number {
  if (prices.length === 0 || k === 0) return 0;

  const buyCount = k;
  // 状态 i天数 j买入次数 k是否持有
  const dp = new Array(prices.length)
    .fill(0)
    .map(() => new Array(buyCount + 1).fill(0).map(() => new Array(2).fill(0)));

  // 初始条件
  for (let i = 1; i <= buyCount; i++) {
    dp[0][i] = [0, -prices[0]];
  }

  // 转移: 不操作 买入 卖出
  for (let i = 1; i < prices.length; i++) {
    for (let j = 1; j <= buyCount; j++) {
      dp[i][j] = [
        Math.max(dp[i - 1][j][0], dp[i - 1][j][1] + prices[i]), // 不持有利润(不操作 卖出)
        Math.max(dp[i - 1][j][1], dp[i - 1][j - 1][0] - prices[i]), // 持有利润(不操作 买入)
      ];
    }
  }

  // 最终返回不持有的最大收益
  return dp[prices.length - 1][buyCount][0];
}
