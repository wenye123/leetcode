/**
 * https://leetcode-cn.com/problems/palindrome-number/
 */

/**
 * 反转后对比
 */
function isPalindrome1(x: number) {
  if (x < 0) return false;
  let rev = 0,
    y = x;
  while (y !== 0) {
    const pop = y % 10;
    y = Math.floor(y / 10);
    rev = rev * 10 + pop;
  }
  return rev === x;
}

/**
 * 只判断一半位数
 */
function isPalindrome2(x: number) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
  let rev = 0;
  while (x > rev) {
    const pop = x % 10;
    x = Math.floor(x / 10);
    rev = rev * 10 + pop;
  }
  return x === rev || x === Math.floor(rev / 10);
}

console.log(isPalindrome1(121));

console.log(isPalindrome2(122));
