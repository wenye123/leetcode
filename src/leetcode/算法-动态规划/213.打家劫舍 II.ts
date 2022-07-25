/**
 * https://leetcode.cn/problems/house-robber-ii/
 */

/**
 * 你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都 围成一圈 ，这意味着第一个房屋和最后一个房屋是紧挨着的。
 * 同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你 在不触动警报装置的情况下 ，今晚能够偷窃到的最高金额。
 * [2,3,2]-3 [1,2,3,1]-4
 *
 * 同198题一样 只是要判断下有头没尾和有尾没头的大小
 *
 */

function _rob(nums: number[]): number {
  if (nums.length < 2) return Math.max(...nums);

  const arr = [nums[0], Math.max(nums[0], nums[1])];
  for (let i = 2; i < nums.length; i++) {
    arr[i] = Math.max(nums[i] + arr[i - 2], arr[i - 1]);
  }

  return arr[arr.length - 1];
}

export function rob(nums: number[]): number {
  if (nums.length < 2) return Math.max(...nums);

  const a = _rob(nums.slice(1));
  const b = _rob(nums.slice(0, nums.length - 1));
  return Math.max(a, b);
}
