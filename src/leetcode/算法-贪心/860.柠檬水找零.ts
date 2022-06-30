/**
 * https://leetcode.cn/problems/lemonade-change/
 */

/**
 * 1. 给5块 直接收下
 * 2. 给10块 如果有5块就给他
 * 3. 给20块 - 贪心算法
 *  给10+5 或者5+5+5
 *  优先给10块
 */
export function lemonadeChange(bills: number[]): boolean {
  let fiveCount = 0;
  let tenCount = 0;

  for (let bill of bills) {
    if (bill === 5) {
      fiveCount++;
    } else if (bill === 10) {
      if (fiveCount <= 0) return false;
      fiveCount--;
      tenCount++;
    } else if (bill === 20) {
      if (tenCount > 0 && fiveCount > 0) {
        tenCount--;
        fiveCount--;
      } else if (fiveCount >= 3) {
        fiveCount -= 3;
      } else {
        return false;
      }
    }
  }
  return true;
}
