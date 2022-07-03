/**
 * https://leetcode.cn/problems/move-zeroes/
 */

function swap(nums: number[], a: number, b: number) {
  const temp = nums[b];
  nums[b] = nums[a];
  nums[a] = temp;
}

/**
 * 快慢指针: 快指针一直移动 如果快指针等于0 则慢指针不动 否则交换快慢指针的值 慢指针前进一步
 */
export function moveZeroes(nums: number[]): void {
  if (nums.length <= 1) return;
  let slow = 0,
    fast = 0;
  while (fast < nums.length) {
    if (nums[fast] !== 0) {
      swap(nums, slow, fast);
      slow++;
    }
    fast++;
  }
}
