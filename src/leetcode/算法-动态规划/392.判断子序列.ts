/**
 * https://leetcode.cn/problems/is-subsequence/
 */

/** 贪心 */
export function isSubsequence(s: string, t: string): boolean {
  let matchIndex = 0;

  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[matchIndex]) {
      matchIndex++;
    }
  }

  return matchIndex === s.length;
}

/**
 * 动态规划
 *
  从s开始 每个值和t对比 如果值相等就拿上一个值+1 如果不相等就将一整行的值赋值为前一个的值
  abc ahbgdc
  [
    [0, a, h, b, g, d, c],
    [a, 1, 1, 1, 1, 1, 1],
    [b, 0, 0, 2, 2, 2, 2],
    [c, 0, 0, 0, 0, 0, 3],
  ]
 *
 */
export function isSubsequence1(s: string, t: string): boolean {
  const sLen = s.length,
    tLen = t.length;
  // 状态: i和j分别是s和t的索引 值为相同子序列的长度
  const dp = new Array(sLen + 1).fill(0).map(() => new Array(tLen + 1).fill(0));

  for (let i = 1; i <= sLen; i++) {
    for (let j = 1; j <= tLen; j++) {
      if (s[i - 1] === t[j - 1]) {
        // 找到s前一个字符的值+1
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        // 将这个值等于前一个值
        dp[i][j] = dp[i][j - 1];
      }
    }
  }

  return dp[sLen][tLen] === sLen;
}
