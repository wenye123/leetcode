/**
 * https://leetcode.cn/problems/single-number/
 *
 */

/**
 * 位运算
 *  2^3^2^4^4 = 2^2^3^3^4 = 0^0^3 = 3
 */
export function singleNumber(nums: number[]): number {
  let ret = 0;
  nums.forEach((num) => {
    ret = ret ^ num;
  });
  return ret;
}
