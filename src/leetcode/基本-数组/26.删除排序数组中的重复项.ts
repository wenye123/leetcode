/**
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
 */

/**
 * 有序数组: 代表可以顺序判断 不用担心同个元素分散在天涯各地
 * 如何去掉重复元素: 通过双指针 如果两个值相同则跳过 不相同则赋值给下一个
 */

export function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0;

  let i = 0,
    j = 1;
  while (j < nums.length) {
    if (nums[i] !== nums[j]) {
      nums[++i] = nums[j];
    }
    j++;
  }
  return i + 1;
}
