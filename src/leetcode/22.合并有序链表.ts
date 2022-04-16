/**
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/
 */

import { List, ListNode, createListTail, printList } from "../base/List";

/**
 * 递归
 * 时间复杂度: O(n+m)
 * 空间复杂度: O(n+m)
 */
function mergeTwoList1<T = number>(list1: ListNode<T>, list2: ListNode<T>) {
  if (list1 === null) return list2;
  if (list2 === null) return list1;
  if (list1.val < list2.val) {
    list1.next = mergeTwoList1(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoList1(list2.next, list1);
    return list2;
  }
}

/**
 * 迭代
 * 时间复杂度: O(n+m)
 * 空间复杂度O(1)
 */
function mergeTwoList2<T = number>(list1: ListNode<T>, list2: ListNode<T>) {
  const list = new List(-1) as any;
  let curr = list;
  // 双指针合并list1和list2
  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      curr.next = list1;
      curr = curr.next;
      list1 = list1.next;
    } else {
      curr.next = list2;
      curr = curr.next;
      list2 = list2.next;
    }
  }
  // 合并剩下的节点
  curr.next = list1 === null ? list2 : list1;
  return list.next;
}

{
  const list1 = createListTail([1, 3, 5]);
  const list2 = createListTail([2, 4, 6]);
  const list = mergeTwoList2(list1, list2);
  printList(list);
}
console.log("----------------------------");
{
  const list1 = createListTail([1, 3, 5]);
  const list2 = createListTail([2, 4, 6]);
  const list = mergeTwoList1(list1, list2);
  printList(list);
}
