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
  let arr: string[][] = [];
  for (let n of digits) {
    arr.push(map[n]);
  }

  // 回溯函数(已选路径 待选数组)
  function backtrack(paths: string[], arr: string[][]) {
    // 终极条件
    if (paths.length === digits.length) return result.push(paths.join(""));
    // 回溯循环
    for (let w of arr[paths.length]) {
      // 做选择
      paths.push(w);
      // 递归
      backtrack(paths, arr);
      // 撤销选择
      paths.pop();
    }
  }

  backtrack([], arr);
  return result;
}
