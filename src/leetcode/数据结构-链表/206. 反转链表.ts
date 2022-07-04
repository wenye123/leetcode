/**
 * https://leetcode.cn/problems/reverse-linked-list/
 */

import { List, ListNode } from "../../base/List";

/**
 * 头插法
 */
export function reverseList(head: List<number>): List<number> {
  if (head === null || head.next === null) return head;
  let sentry = new ListNode(0); // 新的链表
  let curr = head;
  while (curr !== null) {
    // 保存原链表后续节点
    const next = curr.next;
    // 对curr节点进行操作: 头插法
    curr.next = sentry.next;
    sentry.next = curr;
    // curr指向原链表后续节点 循环继续
    curr = next!;
  }
  // 返回新的链表
  return sentry.next;
}
