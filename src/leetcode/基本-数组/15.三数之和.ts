/**
 * https://leetcode.cn/problems/3sum/
 */

/**
 * 三数之和
 *  如果采用遍历的做法 复杂度达到O(n^3) 并且去重又要消耗一波
 *  实际做法
 *    在无序的数组里 查找目标和大小相关 可以先将数组进行排序降低复杂度 O(nlogn)
 *    使用双指针遍历查找目标 O(n^2)
 *    所以整体复杂度 O(n^2)
 */
export function threeSum(nums: number[]): number[][] {
  if (nums.length < 3) return [];

  const arr: Array<number[]> = [];
  nums.sort((a, b) => a - b); // 先对数组进行排序

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // 去重

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      if (nums[i] + nums[left] + nums[right] === 0) {
        arr.push([nums[i], nums[left], nums[right]]);
        // 因为要找出全部 所以继续找
        while (left < right && nums[left] === nums[left + 1]) left++; // 去重
        while (left < right && nums[right] === nums[right - 1]) right--; // 去重
        left++;
        right--;
      } else if (nums[i] + nums[left] + nums[right] > 0) {
        right--;
      } else {
        left++;
      }
    }
  }

  return arr;
}
