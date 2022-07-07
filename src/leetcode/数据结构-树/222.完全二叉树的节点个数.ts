/**
 * https://leetcode.cn/problems/count-complete-tree-nodes/
 */

import { TreeNode } from "../../base/Tree";

export function countNodes(root: TreeNode | null): number {
  // 终止条件
  if (root === null) return 0;
  // 递归
  const leftCount = countNodes(root.left);
  const rightCount = countNodes(root.right);
  // 返回结果
  return leftCount + rightCount + 1;
}
