/**
 * https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/
 */

/**
 * 头尾指针: 如果值被目标值小则left++ 否则right--
 */
export function twoSum2(numbers: number[], target: number): number[] {
  if (numbers.length < 2) return [];

  let left = 0,
    right = numbers.length - 1;
  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
  return [];
}
