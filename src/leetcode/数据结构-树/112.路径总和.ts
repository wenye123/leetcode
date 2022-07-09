/**
 * https://leetcode.cn/problems/path-sum/
 */

import { TreeNode } from "../../base/Tree";

export function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  // 终止条件
  if (root === null) return false;

  let isFindPath = false;
  function dfs(root: TreeNode | null, targetSum: number, pathSum: number) {
    // 终止条件
    if (root === null) return null;
    if (isFindPath === true) return root;
    // 递归
    const left = dfs(root.left, targetSum, root.val + pathSum);
    const right = dfs(root.right, targetSum, root.val + pathSum);
    // 返回结果
    if (left === null && right === null) {
      if (pathSum + root.val === targetSum) isFindPath = true;
    }
  }
  dfs(root, targetSum, 0);

  return isFindPath;
}
