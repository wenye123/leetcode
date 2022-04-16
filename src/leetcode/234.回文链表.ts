/**
 * https://leetcode-cn.com/problems/palindrome-linked-list/submissions/
 */

import { createListTail, ListNode } from "../base/List";

function isPalindrome<T>(head: ListNode<T>) {
  const arr: T[] = [];
  let curr = head;
  // 将链表转换为数组
  while (curr !== null) {
    arr.push(curr.val);
    curr = curr.next;
  }
  // 双指针判断数组是否回文
  for (let i = 0, j = arr.length - 1; j > i; i++, j--) {
    if (arr[i] !== arr[j]) return false;
  }
  return true;
}

const list = createListTail([1, 2, 1]);
console.log(isPalindrome(list));
