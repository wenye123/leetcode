/**
 * https://leetcode.cn/problems/4sum/
 */

/** 回溯 */
export function fourSum(nums: number[], target: number): number[][] {
  // 先排序
  nums = nums.sort((a, b) => a - b);

  // 结果
  const result: number[][] = [];

  // 回溯函数
  function backtrack(paths: number[], count: number, initIndex: number, target: number) {
    // 终止条件
    if (count === 0 && target === 0) {
      return result.push([...paths]);
    }
    // 回溯循环
    for (let i = initIndex; i < nums.length; i++) {
      // 选择
      if (i > initIndex && nums[i] === nums[i - 1]) continue; // 相同值跳过
      // 剪枝降低复杂度
      if (nums.length - initIndex < count) break; // 剩下个数不足4个
      if (count * nums[initIndex] > target) break; // 剩下的最少都超过目标值
      if (count * nums[nums.length - 1] < target) break; // 剩下的最大都不够
      paths.push(nums[i]);
      // 递归
      backtrack(paths, count - 1, i + 1, target - nums[i]);
      // 撤销
      paths.pop();
    }
  }

  backtrack([], 4, 0, target);

  return result;
}
