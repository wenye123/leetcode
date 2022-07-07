/**
 * https://leetcode.cn/problems/balanced-binary-tree/
 */

import { TreeNode } from "../../base/Tree";

// export function isBalanced(root: TreeNode | null): boolean {
//   let maxDiff = 0;

//   function dfs(root: TreeNode | null): number {
//     if (root === null) return 0;
//     if (maxDiff > 1) return -1;
//     const left = dfs(root.left) + 1; // 左子树深度
//     const right = dfs(root.right) + 1; // 右子树深度
//     // 最大深度差
//     maxDiff = Math.max(maxDiff, Math.abs(left - right));
//     if (maxDiff > 1) return -1;
//     // 返回左右子树深度的最大值
//     return Math.max(left, right);
//   }
//   return dfs(root) === -1 ? false : true;
// };

/** 递归: 左右子树的深度差不超过1 */
export function isBalanced(root: TreeNode | null): boolean {
  // 返回-1表示深度超过1 其他值表示树的最大深度
  function dfs(root: TreeNode | null): number {
    // 终止条件
    if (root === null) return 0;
    // 递归
    const leftRet = dfs(root.left);
    if (leftRet == -1) return -1;
    const leftDepth = leftRet + 1;
    const rightRet = dfs(root.right);
    if (rightRet === -1) return -1;
    const rightDepth = rightRet + 1;
    // 返回结果
    if (Math.abs(leftDepth - rightDepth) > 1) return -1; // 高度差超过1则返回-1
    return Math.max(leftDepth, rightDepth); // 否则返回左右子树深度的最大值
  }
  return dfs(root) === -1 ? false : true;
}
