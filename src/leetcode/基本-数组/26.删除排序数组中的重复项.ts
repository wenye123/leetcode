/**
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
 */

/**
 * 有序数组: 代表可以顺序判断 不用担心同个元素分散在天涯各地
 * 如何去掉重复元素: 通过快慢指针 如果值相同则不动 不同则慢指针移动一位 并将快指针的值赋值给慢指针
 */

export function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0;
  let slow = 0,
    fast = 0;
  while (fast < nums.length) {
    if (nums[slow] !== nums[fast]) {
      slow++;
      nums[slow] = nums[fast];
    }
    fast++;
  }
  return slow + 1;
}
