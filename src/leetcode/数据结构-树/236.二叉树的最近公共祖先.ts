/**
 * https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/
 */

import { TreeNode } from "../../base/Tree";

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
