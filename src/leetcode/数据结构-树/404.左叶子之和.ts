/**
 * https://leetcode.cn/problems/sum-of-left-leaves/
 */

import { TreeNode } from "../../base/Tree";

/**
 * 定义节点状态
 *   这里采用深度或者广度遍历都是一样的
 */
interface Item {
  node: TreeNode;
  type: "root" | "left" | "right";
}
export function sumOfLeftLeaves(root: TreeNode | null): number {
  // 终止条件
  if (root === null) return 0;

  const queue: Item[] = [{ node: root, type: "root" }];
  let sum = 0;

  while (queue.length) {
    const { node, type } = queue.shift()!;
    // 左叶子结点
    if (type === "left" && node.left === null && node.right === null) {
      sum += node.val;
    }
    if (node.left) queue.push({ node: node.left, type: "left" });
    if (node.right) queue.push({ node: node.right, type: "right" });
  }

  return sum;
}

/** 直接访问节点 */
export function sumOfLeftLeaves2(root: TreeNode | null): number {
  // 终止条件
  if (root === null) return 0;

  const queue: TreeNode[] = [root];
  let sum = 0;

  while (queue.length) {
    const node = queue.shift()!;
    // 左叶子结点
    const left = node.left;
    if (left && left.left === null && left.right === null) {
      sum += left.val;
    }
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return sum;
}
