/**
 * https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/
 */

/**
 * 状态:
 * 方程式:
 * 边界:
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
