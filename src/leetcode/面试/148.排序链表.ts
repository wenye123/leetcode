/**
 * https://leetcode.cn/problems/sort-list/
 */

import { ListNode } from "../../base/List";

export function sortList(head: ListNode | null): ListNode | null {
  if (head === null) return null;
  // 转换成数组
  let arr: ListNode[] = [];
  let curr = head;
  while (curr !== null) {
    arr.push(curr);
    curr = curr.next!;
  }
  // 数组排序
  arr = arr.sort((a, b) => a.val - b.val);
  // 数组转换成链表
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      arr[i].next = null;
    } else {
      arr[i].next = arr[i + 1];
    }
  }
  return arr[0];
}
