/**
 * https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array/
 */

/**
 * 特性: 两个升序数组 如果中间值比右边值要大 说明最小值在右边 否则在左边
 */
export function findMin(nums: number[]): number {
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    const mid = left + ((right - left) >> 2);
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return nums[left];
}
