/**
 * https://leetcode.cn/problems/combination-sum/
 */

export function combinationSum(candidates: number[], target: number): number[][] {
  // 先进行排序方便过滤
  candidates = candidates.sort();
  // 结果
  const result: number[][] = [];

  // 回溯函数(已选择列表 待选择列表)
  function backtrack(track: number[], list: number[], index: number, sum: number) {
    // 结束条件
    if (sum > target) return;
    if (sum === target) return result.push([...track]);
    // 循环选择 从index开始 跳过遍历过的首元素
    for (let i = index; i < list.length; i++) {
      // 选择
      if (sum + list[i] > target) continue;
      track.push(list[i]);
      sum += list[i];
      // 递归
      backtrack(track, list, i, sum);
      // 取消选择
      track.pop();
      sum -= list[i];
    }
  }

  backtrack([], candidates, 0, 0);
  return result;
}
