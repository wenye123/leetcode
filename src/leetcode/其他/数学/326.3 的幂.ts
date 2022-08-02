/**
 * https://leetcode.cn/problems/power-of-three/
 */

export function isPowerOfThree(n: number): boolean {
  if (n <= 0) return false;
  while (n !== 1) {
    if (n % 3 !== 0) return false;
    n = n / 3;
  }
  return true;
}
