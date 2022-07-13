/**
 * https://leetcode.cn/problems/letter-combinations-of-a-phone-number/
 */

const map: Record<string, string[]> = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};
export function letterCombinations(digits: string): string[] {
  // 前置判断
  if (digits === "") return [];

  const result: string[] = [];
  let list: string[][] = [];
  for (let n of digits) {
    list.push(map[n]);
  }

  // 回溯函数(已选择列表 待选择列表)
  function backtrack(track: string[], list: string[][]) {
    // 结束条件
    if (track.length === digits.length) return result.push(track.join(""));
    // 循环选择
    for (let w of list[track.length]) {
      // 做选择
      track.push(w);
      // 递归
      backtrack(track, list);
      // 撤销选择
      track.pop();
    }
  }

  backtrack([], list);
  return result;
}
