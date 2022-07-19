/**
 * https://leetcode.cn/problems/palindrome-partitioning/
 */

function isPalindrome(s: string): boolean {
  let left = 0,
    right = s.length - 1;
  while (left <= right) {
    if (s[left] === s[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
}

export function partition(s: string): string[][] {
  const result: string[][] = [];

  // 回溯函数(待选择列表)
  function backtrack(paths: string[], initIndex: number) {
    // 终止条件
    if (initIndex > s.length - 1) {
      return result.push([...paths]);
    }
    // 回溯循环
    for (let i = initIndex; i < s.length; i++) {
      // 选择
      const str = s.substring(initIndex, i + 1);
      if (isPalindrome(str) === false) continue;
      paths.push(str);
      // 递归
      backtrack(paths, i + 1);
      // 取消选择
      paths.pop();
    }
  }

  backtrack([], 0);

  return result;
}
