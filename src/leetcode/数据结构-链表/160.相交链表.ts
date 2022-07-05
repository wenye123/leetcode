/**
 * https://leetcode.cn/problems/intersection-of-two-linked-lists/
 */

import { List } from "../../base/List";

/**
 * 通过哈希
 * 时间复杂度: (O(m+n))
 * 空间复杂度: O(m+n)
 */
export function getIntersectionNode(headA: List<number>, headB: List<number>): List<number> {
  const set = new Set();
  while (headA !== null) {
    set.add(headA);
    headA = headA.next;
  }
  while (headB !== null) {
    if (set.has(headB)) return headB;
    headB = headB.next;
  }
  return null;
}

/**
 * 双指针遍历
 *   因为headA或headB最后的节点都是一样的 因此采用A&B B&A进行遍历
 *   如果headA=headB则说明到了第一个相交的值 或者都是null
 */
export function getIntersectionNode2(headA: List<number>, headB: List<number>): List<number> {
  let currA = headA,
    currB = headB;
  while (currA !== currB) {
    currA = currA === null ? headB : currA!.next;
    currB = currB === null ? headA : currB!.next;
  }
  return currA;
}
