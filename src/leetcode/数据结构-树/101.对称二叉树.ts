/**
 * https://leetcode.cn/problems/symmetric-tree/
 */

import { TreeNode } from "../../base/Tree";

/** 是否反转树 */
function isInvertTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null || q === null) return p === q;
  if (p.val !== q.val) return false;
  return isInvertTree(p.left, q.right) && isInvertTree(p.right, q.left);
}

/**
 * 深度优先遍历-递归
 */
export function isSymmetric(root: TreeNode | null): boolean {
  if (root === null) return true;
  return isInvertTree(root.left, root.right);
}
