/**
 * https://leetcode.cn/problems/binary-tree-inorder-traversal/
 */

import { TreeNode } from "../../base/Tree";

/** 递归 */
export function inorderTraversal(root: TreeNode<number> | null): number[] {
  if (root === null) return [];
  return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)];
}

/** 循环 */
export function inorderTraversal2(root: TreeNode<number> | null): number[] {
  if (root === null) return [];
  const arr: number[] = [];
  const stack: any[] = [];
  stack.push({ color: "white", node: root });
  while (stack.length !== 0) {
    const { color, node } = stack.pop();
    if (color === "gray") {
      arr.push(node.val);
    } else {
      if (node.right) stack.push({ color: "white", node: node.right });
      stack.push({ color: "gray", node });
      if (node.left) stack.push({ color: "white", node: node.left });
    }
  }
  return arr;
}
