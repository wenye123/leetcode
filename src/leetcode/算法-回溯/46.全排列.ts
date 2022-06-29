/**
 * https://leetcode.cn/problems/permutations/
 */

/**
 * 回溯公式
 *  - 已选择列表
 *  - 可选择列表
 *  - 结束条件
 *
  const result = [];
  function backtrack(已选择列表, 可选择列表) {
    if (满足结束条件) {
      result.push(已选择列表)
      return
    }
    for (选择 of 可选择列表) {
      做选择: 已选择列表.push(选择)
      backtrack(已选择列表, 可选择列表)
      撤销选择: 已选择列表.pop()
    }
  }

  回溯本质是通过递归进行深度优先遍历
    - 叶子节点就是return的结果值
    - 通过pop已选择列表实现回溯
 */

/** */
function backtrack(track: number[], nums: number[], result: number[][]) {
  if (track.length === nums.length) {
    result.push([...track]);
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    // 如果已经存在值则跳过循环 不存在则添加进track数组
    if (track.includes(nums[i]) === true) {
      continue;
    }
    track.push(nums[i]);
    // 递归
    backtrack(track, nums, result);
    // pop一个值 如果弹出刚好是最后一个值 本轮也刚好结束 返回上一级别函数 直接再弹出一个值 然后上一级函数继续执行循环
    track.pop();
  }
}

export function permute(nums: number[]): number[][] {
  const result: number[][] = [];
  backtrack([], nums, result);
  return result;
}
