/**
 * https://leetcode.cn/problems/invert-binary-tree/
 */

import { Tree } from "../../base/Tree";

/** 递归 */
export function invertTreeByRecursive<T>(root: Tree<T>): Tree<T> {
  // 终止条件
  if (root === null) return null;
  // 递归
  [root.right, root.left] = [invertTreeByRecursive(root.left), invertTreeByRecursive(root.right)];
  return root;
}

/** 通过栈 */
export function invertTree<T>(root: Tree<T>): Tree<T> {
  if (root === null) return null;

  const stack: Tree<T>[] = [];
  stack.push(root);

  while (stack.length !== 0) {
    let node = stack.pop()!;
    [node.right, node.left] = [node?.left, node?.right];

    if (node?.right) {
      stack.push(node.right);
    }
    if (node?.left) {
      stack.push(node.left);
    }
  }

  return root;
}
