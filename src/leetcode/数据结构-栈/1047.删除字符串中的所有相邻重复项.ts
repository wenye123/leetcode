/**
 * https://leetcode.cn/problems/remove-all-adjacent-duplicates-in-string/
 */

export function removeDuplicates(s: string): string {
  const stack: string[] = [s[0]];
  for (let i = 1; i < s.length; i++) {
    const top = stack[stack.length - 1];
    if (top === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.join("");
}
