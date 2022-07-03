/**
 * https://leetcode-cn.com/problems/remove-element/
 */

/**
 * 快慢指针: 快指针一直移动 如果值等于目标值慢指针不动 不等于则将该值赋值给慢指针 然后慢指针移动一位
 */
export function removeElement(nums: number[], val: number): number {
  if (nums.length === 0) return 0;
  let slow = 0,
    fast = 0;
  while (fast < nums.length) {
    if (nums[fast] !== val) {
      nums[slow] = nums[fast];
      slow++;
    }
    fast++;
  }
  return slow;
}
