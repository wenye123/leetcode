/**
 * https://leetcode.cn/problems/jump-game/
 */

/**
 * 能跳步数如果>=nums.lenth-1说明能达到终点
 * 贪心: 每一步都寻找最优解: 循环能跳步数 取能跳步数和(当前步数+索引步数)的最大值
 */
export function canJump(nums: number[]): boolean {
  let cover = 0; // 能跳的步数
  for (let i = 0; i <= cover; i++) {
    cover = Math.max(cover, i + nums[i]);
    if (cover >= nums.length - 1) return true;
  }
  return false;
}

/**
 * 从后向前判断某个位置能否跳到最后一位
 */
export function canJump2(nums: number[]): boolean {
  if (nums.length === 0) return false;
  let pos = nums.length - 1; // 记录应该达到的位置
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] + i >= pos) {
      pos = i;
    }
  }
  return pos === 0;
}
