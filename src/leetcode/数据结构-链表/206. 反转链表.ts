/**
 * https://leetcode.cn/problems/reverse-linked-list/
 */

import { List, ListNode } from "../../base/List";

/**
 * 哨兵+头插法+新建节点
 */
export function reverseList(head: List<number>): List<number> {
  // 哨兵节点
  const sentry = new ListNode(0);
  // 循环使用头插法插入到哨兵
  let curr = head;
  while (curr !== null) {
    const node = new ListNode(curr.val);
    node.next = sentry.next;
    sentry.next = node;
    curr = curr.next;
  }

  return sentry.next;
}

/**
 * 哨兵+头插法+利用已有节点
 */
export function reverseList2(head: List<number>): List<number> {
  if (head === null || head.next === null) return head;
  // 哨兵节点
  const sentry = new ListNode(0);

  let curr = head;
  while (curr !== null) {
    const next = curr.next;
    curr.next = sentry.next;
    sentry.next = curr;
    curr = next!;
  }

  return sentry.next;
}
