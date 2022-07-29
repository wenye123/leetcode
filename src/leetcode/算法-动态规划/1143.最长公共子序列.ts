/**
 * https://leetcode.cn/problems/longest-common-subsequence/
 */

/**
 * 动态规划
 * abcde ace
  [
    [ 0, a, c, e ],
    [ a, 1, 1, 1 ],
    [ b, 1, 1, 1 ],
    [ c, 1, 2, 2 ],
    [ d, 1, 2, 2 ],
    [ e, 1, 2, 3 ]
  ]
 */
export function longestCommonSubsequence(text1: string, text2: string): number {
  const len1 = text1.length,
    len2 = text2.length;

  const dp = new Array(len1 + 1).fill(0).map(() => new Array(len2 + 1).fill(0));

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        // 找到s前一个字符的值+1
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        // 将自身值和前一个值对比哪一个大
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
      }
    }
  }

  return dp[len1][len2];
}

/** 题目变种
 *  求最长公共子串
 *
  abcbcde bbcbce
  const a = [
    [0, b, b, c, b, c, e],
    [a, 0, 0, 0, 0, 0, 0],
    [b, 1, 1, 0, 1, 0, 0],
    [c, 0, 0, 2, 0, 2, 0],
    [b, 1, 1, 0, 3, 0, 0],
    [c, 0, 0, 2, 0, 4, 0],
    [d, 0, 0, 0, 0, 0, 0],
    [e, 0, 0, 0, 0, 0, 1],
  ];
 */
export function maxSubString(s1: string, s2: string) {
  let len1 = s1.length,
    len2 = s2.length;

  // 状态 ij 值为截止到i的s1和j的s2 这两个字符串的最长公共子串长度是多少
  const dp = new Array(len1 + 1).fill(0).map(() => new Array(len2 + 1).fill(0));
  let maxSubLen = -Infinity;

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        // 相同 则上一个值的长度+1
        dp[i][j] = dp[i - 1][j - 1] + 1;
        maxSubLen = Math.max(maxSubLen, dp[i][j]);
      } else {
        // 不相同则重置为0 表示以i和j结尾的最长公共子串长度不存在
        dp[i][j] = 0;
      }
    }
  }

  return maxSubLen;
}
