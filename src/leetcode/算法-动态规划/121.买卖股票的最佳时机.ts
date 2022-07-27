/**
 * https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/
 */

/** 贪心 */
export function maxProfit1_1(prices: number[]): number {
  if (prices.length === 0) return 0;

  let minPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
  }

  return maxProfit;
}

// export function maxProfit1_1(prices: number[]): number {
//   if (prices.length === 0) return 0;

//   // 状态 i天数 值为利润
//   const dp = [];
//   let minPrice = prices[0]; // 最小的股价

//   for (let i = 0; i < prices.length; i++) {
//     dp[i] = prices[i] - minPrice;
//     minPrice = Math.min(minPrice, prices[i]);
//   }

//   return Math.max(...dp);
// }

/**
 * 动态规划
 *
 */
export function maxProfit1_2(prices: number[]): number {
  const dp: number[][] = [];

  // 初始条件
  dp[0] = [0, -prices[0]];

  // 状态转移
  for (let i = 1; i < prices.length; i++) {
    dp[i] = [
      Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]), // 不持有的最大利润(不操作 卖出)
      Math.max(dp[i - 1][1], -prices[i]), // 持有的最大利润(不操作 买入)
    ];
  }

  // 返回不持有的最大利润
  return dp[prices.length - 1][0];
}
