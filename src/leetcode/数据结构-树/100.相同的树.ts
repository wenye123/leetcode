/**
 * https://leetcode.cn/problems/same-tree/
 */

import { TreeNode } from "../../base/Tree";

/** 深度优先遍历-递归 */
export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null || q === null) return p === q;
  if (p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

/** 深度优先遍历-循环 */
export function isSameTree2(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null || q === null) return p === q;

  const stackP: TreeNode[] = [p];
  const stackQ: TreeNode[] = [q];

  // 循序直到其中一个树遍历完
  while (stackP.length !== 0 && stackQ.length !== 0) {
    const pItem = stackP.pop();
    const qItem = stackQ.pop();
    // 判断两节点是否相同
    if (pItem?.val !== qItem?.val) return false;
    // 判断左右节点想否存在
    if ((pItem?.left === null && qItem?.left !== null) || (pItem?.left !== null && qItem?.left === null)) return false;
    if ((pItem?.right === null && qItem?.right !== null) || (pItem?.right !== null && qItem?.right === null))
      return false;
    // 将p的左右节点推入栈
    if (pItem?.right) stackP.push(pItem.right);
    if (pItem?.left) stackP.push(pItem.left);
    // 将q的左右节点推入栈
    if (qItem?.right) stackQ.push(qItem.right);
    if (qItem?.left) stackQ.push(qItem.left);
  }

  return stackP.length === stackQ.length;
}
