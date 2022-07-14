/**
 * https://leetcode.cn/problems/subsets/
 */

/**
 * 根据nums的长度 依次按照长度去获取结果
 * 需要剪枝
 */
// export function subsets(nums: number[]): number[][] {
//   // 结果
//   const result: number[][] = [];

//   // 回溯函数
//   function backtrack(paths: number[], initIndex: number, count: number) {
//     // 终止条件
//     if (paths.length === count) {
//       result.push([...paths]);
//       return;
//     }
//     // 循环回溯
//     for (let i = initIndex; i < nums.length; i++) {
//       // 选择
//       paths.push(nums[i]);
//       // 递归
//       backtrack(paths, i + 1, count);
//       // 撤销选择
//       paths.pop();
//     }
//   }

//   for (let i = 0; i <= nums.length; i++) {
//     backtrack([], 0, i);
//   }

//   return result;
// };

export function subsets(nums: number[]): number[][] {
  // 结果
  const result: number[][] = [];

  // 回溯函数
  function backtrack(paths: number[], initIndex: number) {
    // 无须终止条件 全部都添加
    result.push([...paths]);
    // 循环回溯
    for (let i = initIndex; i < nums.length; i++) {
      // 选择
      paths.push(nums[i]);
      // 递归
      backtrack(paths, i + 1);
      // 撤销选择
      paths.pop();
    }
  }

  backtrack([], 0);

  return result;
}
