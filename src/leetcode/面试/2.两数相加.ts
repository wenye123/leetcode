/**
 * https://leetcode.cn/problems/add-two-numbers/
 */

import { ListNode } from "../../base/List";

// export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
//   if (l1 === null) return l2;
//   if (l2 === null) return l1;

//   let incrNum = 0;

//   const sentry = new ListNode(0);
//   let curr = sentry;

//   // 将l1或者l2其中一个相加完
//   while (l1 !== null && l2 !== null) {
//     const sum = l1.val + l2.val + incrNum;
//     let val = 0;
//     if (sum > 9) {
//       incrNum = 1;
//       val = sum % 10;
//     } else {
//       val = sum;
//       incrNum = 0;
//     }
//     curr.next = new ListNode(val);
//     curr = curr.next;

//     l1 = l1.next;
//     l2 = l2.next;
//   }

//   // 将剩下的元素添加到新链表中
//   let restList = l1 === null ? l2 : l1;
//   while (incrNum > 0 && restList !== null) {
//     const sum = restList.val + incrNum;
//     let val = 0;
//     if (sum > 9) {
//       incrNum = 1;
//       val = sum % 10;
//     } else {
//       val = sum;
//       incrNum = 0;
//     }
//     curr.next = new ListNode(val);
//     curr = curr.next;
//     restList = restList.next;
//   }

//   // 如果incrNum还有值说明最后多进了一位 需要添加进去 否则直接将剩下的链表添加到新链表中
//   if (incrNum > 0) {
//     curr.next = new ListNode(incrNum);
//   } else {
//     curr.next = restList;
//   }

//   return sentry.next;
// }

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (l1 === null) return l2;
  if (l2 === null) return l1;

  let incrNum = 0;

  const sentry = new ListNode(0);
  let curr = sentry;

  while (incrNum > 0 || l1 !== null || l2 !== null) {
    const l1val = l1 ? l1.val : 0;
    const l2val = l2 ? l2.val : 0;

    const sum = l1val + l2val + incrNum;
    let val = 0;
    if (sum > 9) {
      incrNum = 1;
      val = sum % 10;
    } else {
      val = sum;
      incrNum = 0;
    }
    curr.next = new ListNode(val);
    curr = curr.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return sentry.next;
}
