/**
 * https://leetcode-cn.com/problems/reverse-linked-list/
 */

import { List, createListTail, ListNode } from "./utils/List";

function reverseList<T>(list: ListNode<T>) {
  const tmp = new List(null) as any;
  let curr = list;
  // 通过头插法反转
  while (curr !== null) {
    const node = new List(curr.val);
    node.next = tmp.next;
    tmp.next = node;
    curr = curr.next;
  }
  return tmp.next;
}

const list = createListTail([1, 2, 3]);
console.log(reverseList(list));
