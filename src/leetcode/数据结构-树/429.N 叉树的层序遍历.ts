/**
 * https://leetcode.cn/problems/n-ary-tree-level-order-traversal/
 */

export class ChildrenTreeNode<T = number> {
  val: T;
  children: ChildrenTreeNode[];

  constructor(val: T) {
    this.val = val;
    this.children = [];
  }
}
export type ChildrenTree<T = number> = ChildrenTreeNode<T> | null;

export function levelOrder(root: ChildrenTree): number[][] {
  if (root === null) return [];

  const queue: ChildrenTreeNode[] = [root];
  const ret: number[][] = [];

  while (queue.length) {
    let levelLen = queue.length;
    const levelRet: number[] = [];
    while (levelLen-- > 0) {
      const node = queue.shift()!;
      levelRet.push(node?.val);
      for (let childNode of node.children) {
        queue.push(childNode);
      }
    }
    ret.push(levelRet);
  }
  return ret;
}
