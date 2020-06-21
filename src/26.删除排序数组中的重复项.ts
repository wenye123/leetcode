/**
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
 */

function removeDuplicates(nums: number[]) {
  if (nums.length === 0) return 0;

  let i = 0,
    j = 0;
  for (; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }

  return i + 1;
}

console.log(removeDuplicates([1, 1, 2, 3, 3, 4]));
