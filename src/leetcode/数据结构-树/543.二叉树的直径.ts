/**
 * https://leetcode.cn/problems/diameter-of-binary-tree/
 */

import { TreeNode } from "../../base/Tree";

/**
 * 递归
 *   最长路径=左子树最长路径+右子树最长路径
 */
export function diameterOfBinaryTree(root: TreeNode | null): number {
  let maxPathLen = 0;

  function dfs(root: TreeNode | null): number {
    if (root === null) return 0;

    const left = dfs(root.left);
    const right = dfs(root.right);
    maxPathLen = Math.max(maxPathLen, left + right);

    return Math.max(left, right) + 1;
  }
  dfs(root);

  return maxPathLen;
}
