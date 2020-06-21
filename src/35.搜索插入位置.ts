/**
 * https://leetcode-cn.com/problems/search-insert-position/
 */

function searchInsert(nums: number[], target: number) {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

console.log(searchInsert([1, 3, 5, 6], 5));
