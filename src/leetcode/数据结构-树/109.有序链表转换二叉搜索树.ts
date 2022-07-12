/**
 * https://leetcode.cn/problems/convert-sorted-list-to-binary-search-tree/
 */

import { ListNode } from "../../base/List";
import { TreeNode } from "../../base/Tree";

/**
 * 将链表遍历成数组，后续做法就和108题一样了
 * 这里采用快慢指针遍历链表的方式
 */
export function sortedListToBST(head: ListNode | null): TreeNode | null {
  function traverse(head: ListNode | null, tail: ListNode | null): TreeNode | null {
    if (head === tail) return null;
    let slow = head,
      fast = head;
    // 执行完后中间节点就是slow
    while (fast !== tail && fast!.next !== tail) {
      slow = slow!.next;
      fast = fast!.next!.next;
    }
    const node = new TreeNode(slow!.val);
    node.left = traverse(head, slow);
    node.right = traverse(slow!.next, tail);
    return node;
  }
  return traverse(head, null);
}
