/**
 * https://leetcode-cn.com/problems/palindrome-linked-list/submissions/
 */

import { List, ListNode } from "../../base/List";

/**
 * 快慢指针+反转头插前半部分: 将前半部分反转 在和后半部分进行一一对比 如果不相等则不是回文
 * [1,2,2,1] => [2,1,2,1]
 * [1,2,3,2,1] => [2,1,3,2,1]
 */
export function isPalindrome(head: List<number>): boolean {
  if (head === null) return false;
  if (head.next === null) return true;

  let sentry = new ListNode(0);

  let slow = head,
    fast = head;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next!;
    // 反转前半部分
    const next = slow.next!;
    slow.next = sentry.next;
    sentry.next = slow;
    slow = next;
  }

  // 如果是奇数slow还需要前进一位
  if (fast !== null) {
    slow = slow.next!;
  }

  // 对比反转后的链表和后续的链表
  let curr = sentry.next!;
  while (slow !== null) {
    if (slow.val !== curr.val) {
      return false;
    }
    slow = slow.next!;
    curr = curr.next!;
  }
  return true;
}
