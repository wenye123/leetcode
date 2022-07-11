/**
 * https://leetcode.cn/problems/balanced-binary-tree/
 */

import { TreeNode } from "../../base/Tree";

export function isBalanced(root: TreeNode | null): boolean {
  let maxDiff = 0;
  function dfs(root: TreeNode | null): number {
    if (root === null) return 0;
    if (maxDiff > 1) return -1;
    const left = dfs(root.left); // 左子树深度
    const right = dfs(root.right); // 右子树深度
    // 最大深度差
    maxDiff = Math.max(maxDiff, Math.abs(left - right));
    if (maxDiff > 1) return -1;
    // 返回左右子树深度的最大值
    return Math.max(left, right) + 1;
  }
  return dfs(root) === -1 ? false : true;
}

// function dfs(root: TreeNode | null): number {
//   // 终止条件
//   if (root === null) return 0;

//   const stack: any[] = [{ node: root, color: "white" }]; // 字段可以用来作为参数
//   const retStack: any[] = []; // 返回值栈

//   while (stack.length > 0) {
//     const { node, color } = stack.pop()!;
//     if (color === "gray") {
//       // 返回结果
//       const left = retStack.pop();
//       const right = retStack.pop();
//       let ret = 0;
//       if (Math.abs(left - right) > 1) {
//         ret = -1;
//       } else {
//         ret = Math.max(left, right) + 1;
//       }
//       retStack.push(ret);
//       if (ret == -1) break;
//     } else {
//       stack.push({ node: node, color: "gray" });
//       // 终止条件&&递归
//       if (node.right) {
//         stack.push({ node: node.right, color: "white" });
//       } else {
//         retStack.push(0);
//       }
//       if (node.left) {
//         stack.push({ node: node.left, color: "white" });
//       } else {
//         retStack.push(0);
//       }
//     }
//   }

//   return retStack[retStack.length - 1];
// }

// 返回-1表示深度超过1 其他值表示树的最大深度
// function dfs(root: TreeNode | null): number {
//   // 终止条件
//   if (root === null) return 0;
//   // 递归
//   const leftDepth = dfs(root.left);
//   if (leftDepth == -1) return -1;
//   const rightDepth = dfs(root.right);
//   if (rightDepth === -1) return -1;
//   // 返回结果
//   if (Math.abs(leftDepth - rightDepth) > 1) return -1; // 高度差超过1则返回-1
//   return Math.max(leftDepth, rightDepth) + 1; // 否则返回左右子树深度的最大值
// }
/** 递归: 左右子树的深度差不超过1 */
// export function isBalanced(root: TreeNode | null): boolean {
//   return dfs(root) === -1 ? false : true;
// }
