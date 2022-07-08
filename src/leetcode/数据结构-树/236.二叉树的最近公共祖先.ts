/**
 * https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/
 */

import { Tree, TreeNode } from "../../base/Tree";

/**
 * 如果节点B在节点A上 则节点A就是最近公共祖先
 * 如果节点B不在节点A上 则两者的父节点就是最近公共祖先
 */

/** 递归 */
export function lowestCommonAncestor(root: TreeNode | null, p: TreeNode, q: TreeNode): TreeNode | null {
  if (root === null) return null;
  // 返回查找到的节点
  if (root.val === p.val) return p;
  if (root.val === q.val) return q;

  // 左子树 右子树分别查找
  const left = lowestCommonAncestor(root.left!, p, q);
  const right = lowestCommonAncestor(root.right!, p, q);

  // 如果左右子树都有 则父节点就是最近公共祖先
  if (left && right) return root;
  // 只有一棵树上有 则最先查找到的节点就是最近公共祖先
  return left ? left : right;
}

/** 递归转循环 */
interface StackItem<T> {
  color: "white" | "gray";
  node: TreeNode<T>;
}
export function lowestCommonAncestor2(root: TreeNode | null, p: TreeNode, q: TreeNode): TreeNode | null {
  // 终止条件
  if (root === null) return null;
  if (root.val === p.val) return p;
  if (root.val === q.val) return q;

  const stack: StackItem<number>[] = [{ node: root, color: "white" }];
  const retStack: Tree[] = [];

  while (stack.length > 0) {
    const { node, color } = stack.pop()!;

    if (color === "gray") {
      // 返回结果
      const leftRet = retStack.pop();
      const rightRet = retStack.pop();
      let ret: Tree = null;
      if (leftRet && rightRet) {
        ret = node;
      } else {
        ret = leftRet ? leftRet! : rightRet!;
      }
      retStack.push(ret);
    } else {
      stack.push({ node, color: "gray" });

      // 终止条件&&递归
      if (node.right === null) {
        retStack.push(null);
      } else if (node.right.val === p.val) {
        retStack.push(p);
      } else if (node.right.val === q.val) {
        retStack.push(q);
      } else {
        stack.push({ node: node.right, color: "white" });
      }

      if (node.left === null) {
        retStack.push(null);
      } else if (node.left.val === p.val) {
        retStack.push(p);
      } else if (node.left.val === q.val) {
        retStack.push(q);
      } else {
        stack.push({ node: node.left, color: "white" });
      }
    }
  }
  return retStack[retStack.length - 1];
}
