/**
 * https://leetcode.cn/problems/happy-number/
 */

function getNum(num: number) {
  let sum = 0;
  while (num !== 0) {
    sum += (num % 10) ** 2;
    num = Math.trunc(num / 10);
  }
  return sum;
}

/** 哈希表: 如果出现重复则表示无限循环 */
export function isHappy(n: number): boolean {
  const obj: Record<string, true> = {};
  while (n !== 1) {
    if (obj[n] === true) return false;
    obj[n] = true;
    n = getNum(n);
  }
  return true;
}

/** 采用快慢指针 */
export function isHappy2(n: number): boolean {
  let slow = n,
    fast = n;

  while (fast !== 1 && getNum(fast) !== 1) {
    slow = getNum(slow);
    fast = getNum(getNum(fast));
    if (slow === fast) return false; // 遇到则说明闭环
  }
  return true;
}
