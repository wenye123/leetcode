/**
 *  https://leetcode.cn/problems/maximum-depth-of-binary-tree/
 */

import { Tree } from "../../base/Tree";

/** 通过栈 */
interface StackItem<T> {
  node: Tree<T>;
  depth: number;
}
export function maxDepth<T>(root: Tree<T>): number {
  // 空树直接返回0
  if (root === null) return 0;

  const stack: StackItem<T>[] = [];
  let maxDepth = 1;
  stack.push({ node: root, depth: maxDepth });

  while (stack.length !== 0) {
    // 弹出栈顶元素
    const { node, depth } = stack.pop()!;
    // 如果节点的深度比之前的大则替换
    if (depth > maxDepth) maxDepth = depth;
    // 将左右子树添加进栈
    if (node?.right) stack.push({ node: node.right, depth: depth + 1 });
    if (node?.left) stack.push({ node: node.left, depth: depth + 1 });
  }

  return maxDepth;
}
