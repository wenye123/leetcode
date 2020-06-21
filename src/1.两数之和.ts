/**
 * https://leetcode-cn.com/problems/two-sum/
 */

/**
 * 暴力法
 */
function twoSum1(nums: number[], target: number) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

/**
 * 借助map
 */
function twoSum2(nums: number[], target: number) {
  const map: any = {};
  for (let i = 0; i < nums.length; i++) {
    const diff = map[target - nums[i]];
    if (diff !== undefined) {
      return [diff, i];
    } else {
      map[nums[i]] = i;
    }
  }
}

const nums = [2, 7, 11, 15];
console.log(twoSum1(nums, 9));
console.log(twoSum2(nums, 9));
