/**
 * https://leetcode.cn/problems/kth-smallest-element-in-a-bst/
 */

import { TreeNode } from "../../base/Tree";

/** 中序遍历 */
export function kthSmallest(root: TreeNode | null, k: number): number {
  let num = 0;
  function traverse(root: TreeNode | null, k: number): number {
    if (root === null) return -1;
    const left = traverse(root.left, k);
    if (left !== -1) return left;
    if (++num === k) return root.val;
    const right = traverse(root.right, k);
    if (right !== -1) return right;
    return -1;
  }
  return traverse(root, k);
}
