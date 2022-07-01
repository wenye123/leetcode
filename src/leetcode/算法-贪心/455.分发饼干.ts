/**
 * https://leetcode.cn/problems/assign-cookies/
 */

/**
 * 贪心+双指针
 *  先给孩子和饼干进行排序 这样就能使用双指针
 *  贪心: 这里有个误区 就是用最小的饼干不断去喂最小孩子 不行就下一个饼干 这样子会造成两次for循环
 *        正确的做法应该是用最大的饼干去喂最大的孩子 如果最大的都喂不了说明这个孩子应该放弃
 *
 */
export function findContentChildren(g: number[], s: number[]): number {
  // 排序为了双指针
  g = g.sort((a, b) => a - b);
  s = s.sort((a, b) => a - b);
  // 孩子和饼干有一个发完就结束
  let count = 0,
    gi = g.length - 1,
    si = s.length - 1;
  while (gi >= 0 && si >= 0) {
    if (s[si] >= g[gi]) {
      count++;
      si--;
    }
    gi--;
  }
  return count;
}
