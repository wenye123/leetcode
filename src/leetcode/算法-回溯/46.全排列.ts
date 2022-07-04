/**
 * https://leetcode.cn/problems/permutations/
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
