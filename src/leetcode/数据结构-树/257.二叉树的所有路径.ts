/**
 * https://leetcode.cn/problems/binary-tree-paths/
 */

import { TreeNode } from "../../base/Tree";

/** 递归:
 *   深度优先遍历自带回溯, 天生会通过回流遍历完所有路径
 *
 *   终止条件就是遍历到什么时候停止 开始回溯 并返回值
 *   父子节点数据流
 *     递归函数的参数就是父节点给子节点传值 通过记录父节点 能获取到整条路径
 *     递归函数的返回结果就是子节点向父节点传值
 */
export function binaryTreePaths(root: TreeNode<string> | null): string[] {
  let ret: string[] = [];
  function getPathByDfs(tree: TreeNode<string> | null, arr: string[]) {
    // 终止条件
    if (tree === null) return null;
    // 递归
    const left = getPathByDfs(tree.left, [...arr, tree.val]);
    const right = getPathByDfs(tree.right, [...arr, tree.val]);
    // 返回结果
    if (left === null && right === null) {
      ret.push([...arr, tree.val].join("->"));
    }
  }
  getPathByDfs(root, []);
  return ret;
}

/** 递归转循环 */
export function binaryTreePaths2(root: TreeNode<string> | null): string[] {
  // 终止条件
  if (root === null) return [];

  const ret: string[] = [];
  const stack: any[] = [{ node: root, color: "white", data: [] }]; // data表示参数
  while (stack.length > 0) {
    const { node, color, data } = stack.pop()!;

    if (color === "gray") {
      if (node.left === null && node.right === null) {
        ret.push([...data, node.val].join("->"));
      }
    } else {
      // 后序遍历
      stack.push({ node, color: "gray", data });
      // 终止条件&&递归
      if (node.right) {
        stack.push({ node: node.right, color: "white", data: [...data, node.val] });
      }
      if (node.left) {
        stack.push({ node: node.left, color: "white", data: [...data, node.val] });
      }
    }
  }
  return ret;
}
