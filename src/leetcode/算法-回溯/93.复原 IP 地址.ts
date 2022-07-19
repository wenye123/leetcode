/**
 * https://leetcode.cn/problems/restore-ip-addresses/
 */

function isValid(s: string) {
  if (s.length > 1 && s[0] === "0") return false;
  const num = Number(s);
  return num >= 0 && num <= 255;
}

export function restoreIpAddresses(s: string): string[] {
  // 结果
  const result: string[] = [];

  // 回溯函数(待选择路径)
  function backtarck(paths: string[], initIndex: number) {
    // 终止条件
    if (paths.length === 4 && initIndex > s.length - 1) {
      return result.push(paths.join("."));
    }
    // 回溯循环
    for (let i = initIndex; i < s.length; i++) {
      // 选择
      const str = s.substring(initIndex, i + 1);
      if (isValid(str) === false) break; // 这里不用continue而用break是因为后续都没必要
      paths.push(str);
      // 递归
      backtarck(paths, i + 1);
      // 取消选择
      paths.pop();
    }
  }

  backtarck([], 0);

  return result;
}
