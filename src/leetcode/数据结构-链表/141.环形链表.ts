/**
 * https://leetcode.cn/problems/linked-list-cycle/
 */

import { ListNode } from "../../base/List";

/**
 * 使用哈希: 时间和空间复杂度都是O(n)
 */
export function hasCycle(head: ListNode<number>): boolean {
  const set = new Set();
  let curr = head;
  while (curr !== null) {
    if (set.has(curr)) return true;
    set.add(curr);
    curr = curr.next;
  }
  return false;
}

/**
 * 快慢指针
 *   龟兔赛跑 乌龟一次跑异步 兔子一次跑两步 只要有环形 那就一定会相遇
 */
export function hasCycle2(head: ListNode<number>): boolean {
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow!.next; // 慢的一次跑一步
    fast = fast!.next.next; // 快的一次跑两步
    if (slow === fast) return true;
  }
  return false;
}
