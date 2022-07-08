/**
 * https://leetcode.cn/problems/minimum-depth-of-binary-tree/
 */

import { TreeNode } from "../../base/Tree";

/** 深度优先遍历-递归 */
export function minDepth(root: TreeNode | null): number {
  if (root === null) return 0;
  if (root.left === null) return minDepth(root.right) + 1;
  if (root.right === null) return minDepth(root.left) + 1;
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
}

/** 深度优先遍历-循环 */
interface StackItem {
  node: TreeNode;
  depth: number;
}
export function minDepth2(root: TreeNode | null): number {
  // 条件判断
  if (root === null) return 0;
  const stack: StackItem[] = [{ node: root, depth: 1 }];
  let minDepth = Infinity; // 返回值
  while (stack.length > 0) {
    const { node, depth } = stack.pop()!;
    // 条件判断
    if (node.left === null && node.right === null) {
      minDepth = Math.min(minDepth, depth);
    } else if (node.left === null && node.right !== null) {
      stack.push({ node: node.right, depth: depth + 1 });
    } else if (node.left !== null && node.right === null) {
      stack.push({ node: node.left, depth: depth + 1 });
    } else {
      stack.push({ node: node.right!, depth: depth + 1 });
      stack.push({ node: node.left!, depth: depth + 1 });
    }
  }
  return minDepth;
}

/**
 * 广度优先遍历-循环
 *  通过层次遍历找到第一个叶子节点
 */
export function minDepth3(root: TreeNode | null): number {
  if (root === null) return 0;
  const queue: TreeNode[] = [root];
  let level = 1; // 层级
  while (queue.length !== 0) {
    let len = queue.length;
    while (len > 0) {
      const node = queue.shift();
      if (node?.left === null && node.right === null) return level; // 如果是叶子节点直接退出
      if (node?.left) queue.push(node.left);
      if (node?.right) queue.push(node.right);
      len--;
    }
    level++; // 遍历完一层后++
  }
  return level;
}

/**
 * 广度优先遍历-递归
 */
function walk(root: TreeNode | null, queue: TreeNode[], level: number): number {
  if (root === null) return 0;
  // 第一层将根节点添加进队列
  if (level === 0) queue.push(root);
  // 获取当前层的节点 查找叶子
  let len = queue.length;
  while (len > 0) {
    const node = queue.shift();
    if (node?.left === null && node.right === null) return level + 1; // 如果是叶子节点直接退出
    if (node?.left) queue.push(node.left);
    if (node?.right) queue.push(node.right);
    len--;
  }
  return walk(root, queue, level) + 1;
}
export function minDepth4(root: TreeNode | null): number {
  return walk(root, [], 0);
}
