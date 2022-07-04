/**
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/
 */

import { List, ListNode } from "../../base/List";

/** 双指针+尾插法 */
export function mergeTwoLists(list1: List<number>, list2: List<number>): List<number> {
  const sentry = new ListNode(0);
  let currSentry = sentry;

  // 遍历两个链表直至其中一个结束
  let curr1 = list1,
    curr2 = list2;
  while (curr1 !== null && curr2 !== null) {
    if (curr1.val < curr2.val) {
      currSentry.next = curr1;
      currSentry = currSentry.next!;
      curr1 = curr1.next;
    } else {
      currSentry.next = curr2;
      currSentry = currSentry.next!;
      curr2 = curr2.next;
    }
  }
  // 将剩下的链表补全
  // while (curr1 !== null) {
  //   currSentry.next = curr1;
  //   currSentry = currSentry.next!;
  //   curr1 = curr1.next;
  // }
  // while (curr2 !== null) {
  //   currSentry.next = curr2;
  //   currSentry = currSentry.next!;
  //   curr2 = curr2.next;
  // }
  currSentry.next = curr1 == null ? curr2 : curr1;

  return sentry.next;
}

/** 递归 */
export function mergeTwoLists2(list1: List<number>, list2: List<number>): List<number> {
  if (list1 === null) return list2;
  if (list2 === null) return list1;

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists2(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists2(list2.next, list1);
    return list2;
  }
}
