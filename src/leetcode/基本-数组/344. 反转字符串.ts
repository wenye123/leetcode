/**
 * https://leetcode.cn/problems/reverse-string/
 */

function swap(nums: string[], a: number, b: number) {
  const tmp = nums[a];
  nums[a] = nums[b];
  nums[b] = tmp;
}

/** 头尾指针 */
export function reverseString(s: string[]): void {
  let left = 0,
    right = s.length - 1;
  while (left < right) {
    swap(s, left, right);
    left++;
    right--;
  }
}
