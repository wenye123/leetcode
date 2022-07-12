/**
 * https://leetcode.cn/problems/recover-binary-search-tree/
 */

import { TreeNode } from "../../base/Tree";

/** 递归
 *    错误节点会破坏中序遍历有序性 并且第一个错误的值是比后一个值大 第二个错误的值比前一个值小
 */

export function recoverTree(root: TreeNode | null) {
  let prev = new TreeNode(-Infinity);
  let firstWrongNode = new TreeNode(-Infinity); // 第一个值错误值
  let secondtWrongNode = new TreeNode(-Infinity); // 第二个值错误值
  function dfs(node: TreeNode | null) {
    if (node === null) return;
    dfs(node.left);
    if (prev.val > node.val) {
      if (firstWrongNode.val === -Infinity) {
        firstWrongNode = prev; // 第一个错误值就是比后一个大
      }
      secondtWrongNode = node; // 第二个错误的值就是比前一个小
    }
    prev = node;
    dfs(node.right);
  }
  dfs(root);
  // 交换两个的值
  [firstWrongNode.val, secondtWrongNode.val] = [secondtWrongNode.val, firstWrongNode.val];
}
