/**
 * https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/
 */

import { TreeNode } from "../../base/Tree";

/**
 * 深度优先遍历
 */
export function flatten(root: TreeNode | null): void {
  if (root === null) return;
  const stack: TreeNode[] = [root];
  let sentry = new TreeNode(0);
  while (stack.length > 0) {
    const node = stack.pop()!;
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
    node.left = null;
    sentry.right = node;
    sentry = sentry.right;
  }
}
