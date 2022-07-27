/**
 * https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/
 */
// !看不懂

/**
 * 贪心
 */
export function maxProfit2_1(prices: number[]): number {
  let minPrice = Infinity;
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (minPrice === Infinity) {
      // 没买过 或者已经卖掉 则买入股票
      minPrice = prices[i];
    } else {
      // 买过更新最小股票
      minPrice = Math.min(minPrice, prices[i]);
    }

    // 最小值存在且当前股票大于最小值
    if (minPrice !== Infinity && prices[i] > minPrice) {
      if (i === prices.length - 1) {
        // 如果当前值是最后一位则卖掉
        profit += prices[i] - minPrice;
      } else {
        // 否则判断明天是否价格更低 是则卖掉
        if (prices[i + 1] < prices[i]) {
          profit += prices[i] - minPrice;
          minPrice = Infinity;
        }
      }
    }
  }

  return profit;
}

/** 动态规划 */
export function maxProfit2_2(prices: number[]): number {
  if (prices.length === 0) return 0;

  // 状态 i天数 k是否持有
  const dp = new Array(prices.length).fill(0).map(() => new Array(2).fill(0));

  // 初始条件
  dp[0] = [0, -prices[0]];

  // 转移: 不操作 买入 卖出
  for (let i = 1; i < prices.length; i++) {
    dp[i] = [
      Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]), // 不持有利润(不操作 卖出)
      Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]), // 持有利润(不操作 买入)
    ];
  }

  // 最终返回不持有的最大收益
  return dp[prices.length - 1][0];
}
