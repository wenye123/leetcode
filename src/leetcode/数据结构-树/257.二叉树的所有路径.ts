/**
 * https://leetcode.cn/problems/binary-tree-paths/
 */

import { TreeNode } from "../../base/Tree";

/** 递归:
 *   深度优先遍历自带回溯, 天生会查找完所有路径
 *   递归函数的参数就是每个节点函数的参数 通过记录父节点 能获取到整条路径
 */
export function binaryTreePaths(root: TreeNode<string> | null): string[] {
  let ret: string[] = [];
  function dfs(tree: TreeNode<string> | null, arr: string[]) {
    // 终止条件
    if (tree === null) return null;
    // 递归
    const left = dfs(tree.left, [...arr, tree.val]);
    const right = dfs(tree.right, [...arr, tree.val]);
    // 返回结果
    if (left === null && right === null) {
      ret.push([...arr, tree.val].join("->"));
    }
  }
  dfs(root, []);
  return ret;
}
