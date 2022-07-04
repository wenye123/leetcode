/**
 * https://leetcode.cn/problems/remove-nth-node-from-end-of-list/
 */

import { List, ListNode } from "../../base/List";

/**
 * 哨兵+额外数组
 * 时间复杂度O(n) 空间复杂度O(n)
 */
export function removeNthFromEnd(head: List<number>, n: number): List<number> {
  // 定义哨兵&数组存储节点
  const sentry = new ListNode(0, head);
  const nodes: ListNode<number>[] = [sentry];
  // 循环添加节点
  let curr = head;
  while (curr !== null) {
    nodes.push(curr);
    curr = curr.next;
  }
  // 删除指定节点
  nodes[nodes.length - 1 - n].next = nodes[nodes.length - n].next;
  // 返回新的链表
  return sentry.next;
}

/**
 * 哨兵+快慢指针: 快指针先走n步 慢指针和快指针在一起走 最后慢指针就是倒数第n个节点
 */
export function removeNthFromEnd2(head: List<number>, n: number): List<number> {
  const sentry = new ListNode(0, head);
  let slow = sentry,
    fast = sentry;
  // fast先走n步
  while (n > 0) {
    fast = fast.next!;
    n--;
  }
  // 然后slow和fast一起走 注意这里使用fast.next!==null 这样走完slow.next才是目标值
  while (fast.next !== null) {
    slow = slow.next!;
    fast = fast.next!;
  }
  // 删除节点
  slow.next = slow.next!.next!;

  return sentry.next;
}
