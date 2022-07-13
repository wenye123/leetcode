/**
 * https://leetcode.cn/problems/combination-sum/
 */

export function combinationSum(candidates: number[], target: number): number[][] {
  // 先进行排序方便过滤
  candidates = candidates.sort();
  // 结果
  const result: number[][] = [];

  // 回溯函数(已选路径 待选数组)
  function backtrack(paths: number[], arr: number[], index: number, sum: number) {
    // 终止条件
    if (sum > target) return;
    if (sum === target) return result.push([...paths]);
    // 回溯循环: 从index开始 跳过遍历过的首元素
    for (let i = index; i < arr.length; i++) {
      // 选择
      if (sum + arr[i] > target) continue;
      paths.push(arr[i]);
      sum += arr[i];
      // 递归
      backtrack(paths, arr, i, sum);
      // 撤销选择
      paths.pop();
      sum -= arr[i];
    }
  }

  backtrack([], candidates, 0, 0);
  return result;
}
