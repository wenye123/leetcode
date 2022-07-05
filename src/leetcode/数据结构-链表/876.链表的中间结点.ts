/**
 * https://leetcode.cn/problems/middle-of-the-linked-list/
 */

import { List } from "../../base/List";

/** 快慢指针: 快的一次跑两步 慢的一次跑一步 */
export function middleNode(head: List<number>): List<number> {
  if (head === null || head.next === null) return head;
  let slow: List<number> = head,
    fast: List<number> = head;

  while (fast !== null && fast.next !== null) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  return slow;
}
