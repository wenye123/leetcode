/**
 * https://leetcode.cn/problems/validate-binary-search-tree/
 */

import { TreeNode } from "../../base/Tree";

/**
 * 二叉搜索树中序遍历是递增的
 */
export function isValidBST(root: TreeNode | null): boolean {
  let prev = -Infinity;
  function dfs(node: TreeNode | null): boolean {
    // 终止条件
    if (node === null) return true;
    // 递归(中序遍历)
    const left = dfs(node.left);
    if (prev >= node.val) return false;
    prev = node.val;
    const right = dfs(node.right);
    // 返回结果
    return left && right;
  }
  return dfs(root);
}
