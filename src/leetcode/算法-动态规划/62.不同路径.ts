/**
 * https://leetcode.cn/problems/unique-paths/
 */
// !看不懂

/**
 * - 转移状态: i j表示坐标 dp[i][j]表示当前节点的路径树
 * - 转移方程式: dp[i][j] = dp[i-1][j] + dp[i][j-1]
 * - 初始条件和循环
 * - 边界
 */
export function uniquePaths(m: number, n: number): number {
  // 初始条件
  const dp = new Array(m).fill("").map(() => new Array(n).fill(""));
  for (let i = 0; i < dp.length; i++) {
    for (let j = 0; j < dp[0].length; j++) {
      if (i === 0 || j === 0) dp[i][j] = 1;
    }
  }
  // 循环
  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[0].length; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
}
