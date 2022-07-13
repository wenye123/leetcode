/**
 * https://leetcode.cn/problems/sqrtx/
 */

export function mySqrt(x: number): number {
  let left = 0,
    right = x;
  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    const ret = mid * mid;
    if (x === ret) {
      return mid;
    } else if (x > ret) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left - 1;
}
