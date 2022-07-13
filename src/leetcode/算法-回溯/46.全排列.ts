/**
 * https://leetcode.cn/problems/permutations/
 */

/** */

export function permute(nums: number[]): number[][] {
  // 结果
  const result: number[][] = [];

  // 回溯函数(已选路径 可选数组)
  function backtrack(paths: number[], arr: number[]) {
    // 终止条件
    if (paths.length === arr.length) {
      result.push([...paths]);
      return;
    }
    // 回溯循环
    for (let i = 0; i < arr.length; i++) {
      // 做选择
      if (paths.includes(arr[i]) === true) continue;
      paths.push(arr[i]);
      // 递归
      backtrack(paths, arr);
      // 撤销选择
      paths.pop();
    }
  }

  backtrack([], nums);
  return result;
}
