/**
 * https://leetcode-cn.com/problems/remove-element/
 */

function removeElement(nums: number[], val: number) {
  if (nums.length === 0) return 0;

  let i = 0,
    j = 0;
  for (; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j];
      i++;
    }
  }

  return i;
}

console.log(removeElement([1, 1, 2], 1));
