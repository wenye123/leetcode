/**
 * https://leetcode.cn/problems/combinations/
 */

/**
 * 不包含重复项 且 结果去重
 */
export function combine(n: number, k: number): number[][] {
  // 结果
  const result: number[][] = [];

  // 回溯函数(已选路径 待选数组) initNum初始值 剪枝用
  function backtrack(paths: number[], initNum: number) {
    // 终止条件
    if (paths.length === k) {
      result.push([...paths]);
      return;
    }
    // 回溯循环
    for (let i = initNum; i <= n; i++) {
      // 选择
      paths.push(i);
      // 递归
      backtrack(paths, i + 1);
      // 撤销选择
      paths.pop();
    }
  }

  backtrack([], 1);
  return result;
}
