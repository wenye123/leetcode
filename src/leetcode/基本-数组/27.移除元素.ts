/**
 * https://leetcode-cn.com/problems/remove-element/
 */

/**
 * 双指针: 初始化i j为0，j不断向前 如果值等于目标值则i不动 否则将nums[j]的值赋值给nums[i]并且i++
 */
export function removeElement(nums: number[], val: number): number {
  if (nums.length === 0) return 0;

  let i = 0,
    j = 0;
  while (j < nums.length) {
    if (nums[j] !== val) {
      nums[i++] = nums[j];
    }
    j++;
  }
  return i;
}
