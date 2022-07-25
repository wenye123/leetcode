/**
 * https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/
 */

export function maxProfit(prices: number[]): number {
  if (prices.length === 0) return 0;

  const dp: number[] = [];
  let minPrice = prices[0];

  for (let i = 0; i < prices.length; i++) {
    dp[i] = prices[i] - minPrice;
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
  }

  return Math.max(...dp);
}

/** 变量写法 */
export function maxProfit2(prices: number[]): number {
  if (prices.length === 0) return 0;

  let maxProfit = 0;
  let minPrice = prices[0];

  for (let i = 0; i < prices.length; i++) {
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    minPrice = Math.min(minPrice, prices[i]);
  }

  return maxProfit;
}
