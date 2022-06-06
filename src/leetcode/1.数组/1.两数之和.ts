/**
 * https://leetcode-cn.com/problems/two-sum/
 */

/** 暴力法 */
export function twoSum(nums: number[], target: number) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

/** 借助map */
export function twoSumWithMap(nums: number[], target: number) {
  const map: Record<string, number> = {};
  for (let i = 0; i < nums.length; i++) {
    const diff = map[target - nums[i]];
    if (diff !== undefined) return [diff, i];
    map[nums[i]] = i;
  }
}
