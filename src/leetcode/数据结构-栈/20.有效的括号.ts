/**
 * https://leetcode-cn.com/problems/valid-parentheses/
 */

/** 通过栈 */

export function isValid(s: string): boolean {
  const map: Record<string, string> = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    const w = s[i]; // 新字符
    const item = stack[stack.length - 1]; // 前一个字符
    if (map[item] === w) {
      stack.pop();
    } else {
      stack.push(w);
    }
  }
  // 如果栈还有值说明不合法
  return stack.length === 0;
}
