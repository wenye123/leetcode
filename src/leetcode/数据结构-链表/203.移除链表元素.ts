/**
 * https://leetcode.cn/problems/remove-linked-list-elements/
 */

import { List, ListNode } from "../../base/List";

/**
 * 循环写法
 */
export function removeElements(head: ListNode<number>, val: number): ListNode<number> {
  // 去掉头结点相同的
  while (head !== null) {
    if (head.val === val) {
      head = head.next;
    } else {
      break;
    }
  }
  if (head === null) return head;
  // 去掉后续相同节点
  let curr = head;
  while (curr.next !== null) {
    if (curr.next.val === val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  // 返回头结点
  return head;
}

/**
 * 哨兵写法
 *   相比较循环写法，可以省去去掉头结点的部分
 */
export function removeElementsBySentry(head: ListNode<number>, val: number): ListNode<number> {
  // 哨兵节点
  const sentry = new List(0, head);
  // 去掉后续匹配到的节点
  let curr = sentry;
  while (curr.next !== null) {
    if (curr.next.val === val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  // 返回哨兵的下一个节点
  return sentry.next;
}

/**
 * 递归写法
 */
export function removeElementsByRecursive(head: ListNode<number>, val: number): ListNode<number> {
  if (head === null) return head;
  head.next = removeElementsByRecursive(head.next, val);
  return head.val === val ? head.next : head;
}
