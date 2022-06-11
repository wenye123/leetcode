/**
 * https://leetcode.cn/problems/power-of-two/
 */

/**
 * 循环写法
 */
export function isPowerOfTwo(n: number): boolean {
  let i = 0;
  let tmp = Math.pow(2, i);
  while (tmp <= n) {
    if (tmp === n) return true;
    tmp = Math.pow(2, ++i);
  }
  return false;
}

/**
 * 位运算写法
 *  2的幂次方有个特点 就是第一位都是1 n-1之后两者&之后值肯定就是0了
 *    2的幂次方       n-1之后       &之后
 *    1 - 1          0 - 0         0 - 0
 *    10 - 2         01 - 1        0 - 0
 *    100 - 4        011 - 3       0 - 0
 *    1000 - 8       0111 - 7      0 - 0
 */
export function isPowerOfTwoByBit(n: number): boolean {
  if (n <= 0) return false;
  return (n & (n - 1)) === 0 ? true : false;
}
