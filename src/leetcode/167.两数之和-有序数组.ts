/**
 * https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/
 */

function twoSum(nums: number[], target: number) {
  let i = 0,
    j = nums.length - 1;

  for (; j > i; ) {
    if (target - nums[i] === nums[j]) {
      return [i + 1, j + 1];
    } else if (target - nums[i] > nums[j]) {
      i++;
    } else {
      j--;
    }
  }
  return [-1, -1];
}

console.log(twoSum([2, 7, 11, 15], 9));
