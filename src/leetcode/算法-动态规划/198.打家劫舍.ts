/**
 * https://leetcode.cn/problems/house-robber/
 */

/**
 * 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，
 * 如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。
 *
 * [1,2,3,1]-4 [2,7,9,3,1]-12
 *
 * 1. 转移方程
 *  1. 定义状态: currMax是打劫前i家能得到的最大金钱
 *  2. 状态转移方程式: f(1)=nums[1], f(2)=Math.max(nums[1], nums[2])
 *    如果打劫第n家就不能打劫n-1家 所以最大值为n-2家的最大值+当前值 如果不打劫就是n-1家的最大值
 *    f(n)=Math.max(f(n-1), nums[n]+ f(n-2))
 * 2. 初始条件
 * 3. 特殊处理
 *  长度为0和1的情况
 *
 */
export function rob(nums: number[]): number {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  const arr = [nums[0], Math.max(nums[0], nums[1])];
  for (let i = 2; i < nums.length; i++) {
    arr[i] = Math.max(nums[i] + arr[i - 2], arr[i - 1]);
  }

  return arr[arr.length - 1];
}
