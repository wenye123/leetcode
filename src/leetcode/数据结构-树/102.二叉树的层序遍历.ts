/**
 * https://leetcode.cn/problems/binary-tree-level-order-traversal/
 */

import { TreeNode } from "../../base/Tree";

/** 队列循环 */
export function levelOrder(root: TreeNode | null): number[][] {
  if (root === null) return [];
  const queue: TreeNode[] = [root];
  const ret: number[][] = []; // 结果
  while (queue.length > 0) {
    let currLevelLen = queue.length;
    const currLevelRet: number[] = []; // 当前层结果
    while (currLevelLen-- > 0) {
      const node = queue.shift()!;
      currLevelRet.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    ret.push(currLevelRet);
  }
  return ret;
}
