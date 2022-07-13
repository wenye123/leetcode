/**
 * https://leetcode.cn/problems/permutations/
 */

/** */

export function permute(nums: number[]): number[][] {
  // 结果
  const result: number[][] = [];

  // 回溯函数(已选择列表 待选择列表)
  function backtrack(track: number[], nums: number[]) {
    // 终止条件
    if (track.length === nums.length) {
      result.push([...track]);
      return;
    }
    // 循环选择
    for (let i = 0; i < nums.length; i++) {
      // 如果已经存在值则跳过循环 不存在则添加进track数组
      if (track.includes(nums[i]) === true) {
        continue;
      }
      track.push(nums[i]);
      // 递归
      backtrack(track, nums);
      // pop一个值 如果弹出刚好是最后一个值 本轮也刚好结束 返回上一级别函数 直接再弹出一个值 然后上一级函数继续执行循环
      track.pop();
    }
  }

  backtrack([], nums);
  return result;
}
