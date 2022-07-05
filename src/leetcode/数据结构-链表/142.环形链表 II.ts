/**
 * https://leetcode.cn/problems/linked-list-cycle-ii/
 */

import { List } from "../../base/List";

/** 通过set */
export function detectCycle(head: List<number>): List<number> {
  const set = new Set();
  let curr = head;
  while (curr !== null) {
    if (set.has(curr)) {
      return curr;
    } else {
      set.add(curr);
    }
    curr = curr.next;
  }
  return null;
}

/**
 * 快慢指针
 *  每次快指针走两步 慢指针走一步
 *  假设表头到入环点距离为D 入环点到相遇距离为S1 相遇距离到入环点距离为S2
 *  到第一次相遇 慢指针走的距离D+S1 快指针走的D+S1+S2+S1
 *  快指针走的距离是慢指针的两倍 因此2*(D+S1)= D+S1+S2+S1 得出D=S2
 *  所以头节点和相遇节点一直走 第一次相遇的点就是入环点
 */
export function detectCycle2(head: List<number>): List<number> {
  // if (head === null) return head;
  // if ((head.next = head)) return head;

  // 快慢指针寻找相遇点
  let slow = head,
    fast = head,
    firstMeet = null;
  while (fast !== null && fast.next !== null) {
    slow = slow!.next;
    fast = fast!.next!.next;
    if (slow === fast) {
      firstMeet = slow;
      break;
    }
  }

  // 没找到相遇点说明没有坏
  if (firstMeet === null) return null;

  // 头结点和相遇节点一直走 相遇就是入环点
  let curr = head;
  while (curr !== firstMeet) {
    curr = curr!.next;
    firstMeet = firstMeet!.next;
  }
  return curr;
}
