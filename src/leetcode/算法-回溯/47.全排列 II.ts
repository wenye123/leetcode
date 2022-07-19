/**
 * https://leetcode.cn/problems/permutations-ii/
 */

/**
 * 数字有重复 排列不能重复
 */
export function permuteUnique(nums: number[]): number[][] {
  // 结果
  const result: number[][] = [];

  function backtarck(paths: number[], use: boolean[]) {
    // 先排序
    nums = nums.sort();
    // 终止条件
    if (paths.length === nums.length) {
      return result.push([...paths]);
    }
    // 回溯循环
    for (let i = 0; i < nums.length; i++) {
      // 选择
      if (nums[i] === nums[i - 1] && use[i - 1] !== true) continue;
      if (use[i] === true) continue; // 不能选择自身
      paths.push(nums[i]);
      use[i] = true;
      // 递归
      backtarck(paths, use);
      // 选择
      paths.pop();
      use[i] = false;
    }
  }

  backtarck([], []);

  return result;
}
