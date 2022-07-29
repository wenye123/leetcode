/**
 * https://leetcode.cn/problems/valid-palindrome/
 */

export function isPalindrome(s: string): boolean {
  let left = 0,
    right = s.length - 1;
  while (left <= right) {
    if (/[0-9a-zA-Z]/.test(s[left]) === false) {
      left++;
      continue;
    }
    if (/[0-9a-zA-Z]/.test(s[right]) === false) {
      right--;
      continue;
    }
    if (s[left].toLowerCase() === s[right].toLowerCase()) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
}
