/**
 * https://leetcode.cn/problems/subtree-of-another-tree/
 */

import { TreeNode } from "../../base/Tree";

function isSameTree(tree1: TreeNode | null, tree2: TreeNode | null): boolean {
  if (tree1 === null || tree2 === null) return tree1 === tree2;
  if (tree1.val !== tree2.val) return false;
  return isSameTree(tree1.left, tree2.left) && isSameTree(tree1.right, tree2.right);
}

/** 递归: 先查找子树根节点是否存在 再判断两棵树是否同一颗树 */
export function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (root === null || subRoot === null) return false;
  // 递归查找子树
  let ret = false;
  function dfsSearchNode(root: TreeNode | null, subRoot: TreeNode): void {
    if (root === null) return;
    // 如果值相同则判断下是否相同树
    if (root.val === subRoot.val) {
      ret = ret || isSameTree(root, subRoot);
      if (ret) return; // 如果查到到直接返回 否则继续查找
    }
    dfsSearchNode(root.left, subRoot);
    dfsSearchNode(root.right, subRoot);
  }
  dfsSearchNode(root, subRoot);
  return ret;
}
