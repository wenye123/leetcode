/**
 * 动态规划
 *  利用原问题和子问题的关系，将大问题的解转换为小问题解的函数
 *  做法
 *    1. 转移方程(大问题和小问题的关系)
 *      1. 定义状态，例如f(i) = a[i]目前为止最小值
 *      2. 设计转移方程式，根据上方状态方程式可得f(i+1)=min(f(i), arr[i+1])
 *      注意: 转移方程的设计完全依赖于状态的定义，并不是什么样的状态定义，都有状态转移方程式，因此状态定义决定了DP方法能否实现
 *    2. 初始条件的设置
 *      DP的本质还是迭代，总要有一个迭代的初值
 *    3. 特殊处理小size的问题
 */

/**
 * 买卖股票的最佳时机
 *
 * 1. 转移方程
 *  1. 定义状态: maxProfit是第i天的最大收益
 *  2. 设计转移方程式: f(i) = Math.max(前i-1天的最大收益，第i天的价格-前i-1天的最小价格)
 *      前i-1天最小价格需要实时更新
 * 2. 初始条件设置
 *  minPrice和maxProfit
 *  minPrice可以等于第一天的price
 *  maxProfit可以等于0
 * 3. 特殊处理
 *  数组长度为0和1时候情况
 *
 */
{
  function maxProfit(prices: number[]) {
    if (prices.length <= 1) return 0;

    let minPrice = prices[0];
    let maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
      minPrice = Math.min(minPrice, prices[i]);
      maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }
    return maxProfit;
  }

  const arr = [7, 1, 5, 3, 6, 4];
  console.debug(maxProfit(arr));
}

/**
 * 打家劫舍: https://leetcode-cn.com/problems/house-robber/
 *
 * 1. 转移方程
 *  1. 定义状态: currMax是打劫前i家能得到的最大金钱
 *  2. 状态转移方程式: f(1)=nums[1], f(2)=Math.max(nums[1], nums[2])
 *    如果打劫第n家就不能打劫n-1家 所以最大值为n-2家的最大值+当前值 如果不打劫就是n-1家的最大值
 *    f(n)=Math.max(f(n-1), nums[n]+ f(n-2))
 * 2. 初始条件
 *  currMax和prevMax
 *  currMax默认可以为两个值的最大值
 *  prevMax默认为可以等于第一个值
 * 3. 特殊处理
 *  长度为0和1的情况
 *
 */
{
  function rob1(nums: number[]) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];

    const arr = [];
    arr[0] = nums[0];
    arr[1] = Math.max(nums[0], nums[1]);
    for (let i = 2; i < nums.length; i++) {
      arr[i] = Math.max(nums[i] + arr[i - 2], arr[i - 1]);
    }

    return arr[arr.length - 1];
  }

  function rob2(nums: number[]) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];

    let prevMax = nums[0];
    let currMax = Math.max(nums[0], nums[1]);
    for (let i = 2; i < nums.length; i++) {
      const tmp = currMax;
      currMax = Math.max(currMax, nums[i] + prevMax);
      prevMax = tmp;
    }

    return currMax;
  }

  const arr = [2, 7, 9, 3, 1];
  console.debug(rob1(arr));
  console.debug(rob2(arr));
}

/**
 * 使用最小花费爬楼梯: https://leetcode-cn.com/problems/min-cost-climbing-stairs/
 *
 * 1. 转移方程
 *  1. 定义状态:
 *  2. 状态转移方程式:
 *    f(i) = Math.min(f(n-2), f(n-1)) + nums[n]
 * 2. 初始化条件
 * 3. 特殊处理
 *  长度为0和1的情况
 */
{
  function minCostClimbingStairs1(cost: number[]) {
    cost.push(0);

    const dp = [];
    dp[0] = cost[0];
    dp[1] = cost[1];

    for (let i = 2; i < cost.length; i++) {
      dp[i] = Math.min(dp[i - 2], dp[i - 1]) + cost[i];
    }

    return dp[cost.length - 1];
  }

  function minCostClimbingStairs2(cost: number[]) {
    let prev = cost[0];
    let next = cost[1];

    for (let i = 2; i < cost.length; i++) {
      let tmp = next;
      next = Math.min(prev, next) + cost[i];
      prev = tmp;
    }

    return Math.min(prev, next);
  }

  const arr = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
  console.debug(minCostClimbingStairs1(arr));
  console.debug(minCostClimbingStairs2(arr));
}
