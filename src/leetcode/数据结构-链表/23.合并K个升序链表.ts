import { List, ListNode } from "../../base/List";

/** 多指针+尾插法 n^2 不推荐 */

// 合并两个链表
function mergeTwoLists(list1: List, list2: List): List {
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
  currSentry.next = curr1 == null ? curr2 : curr1;

  return sentry.next;
}

// 多路归并
function mergeMultiLists(lists: Array<List>, start: number, end: number): List {
  if (start === end) return lists[start];
  const mid = start + ((end - start) >> 1);
  const leftLists = mergeMultiLists(lists, start, mid);
  const rightLists = mergeMultiLists(lists, mid + 1, end);
  return mergeTwoLists(leftLists, rightLists);
}

/** 归并排序 */
export function mergeKLists(lists: Array<List>): List {
  if (lists.length === 0) return null;
  return mergeMultiLists(lists, 0, lists.length - 1);
}
