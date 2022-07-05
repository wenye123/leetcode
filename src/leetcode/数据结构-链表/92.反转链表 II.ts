/**
 * https://leetcode.cn/problems/reverse-linked-list-ii/
 */

import { List, ListNode } from "../../base/List";

/** 头插法 */
export function reverseBetween(head: List<number>, left: number, right: number): List<number> {
  if (head === null || head.next === null) return head;

  const sentry = new ListNode(0, head); // 哨兵

  // 查找left前一个节点before
  let before: List<number> = sentry;
  for (let i = 1; i < left; i++) {
    before = before!.next;
  }

  // 反转范围节点
  let reverseSentry = new ListNode(0);
  let curr = before!.next;
  for (let i = left; i <= right; i++) {
    const next = curr!.next;
    curr!.next = reverseSentry.next;
    reverseSentry.next = curr;
    curr = next;
  }

  // before.next此时是反转节点的尾结点 指向curr
  before!.next!.next = curr;
  // 将before.next 指向反转节点
  before!.next = reverseSentry.next;

  return sentry.next;
}
