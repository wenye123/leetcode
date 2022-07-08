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
 *     递归函数的返回值就是子节点向父节点传值
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

/**
 * 递归转循环: 先处理完左右节点后再处理父节点 所以采用后序遍历
 *   终止条件: 在根节点和push的每一个子节点中判断 并将结果推进结果栈
 *   可以在节点栈中存储变量模拟递归函数参数
 *   定义一个结果栈 每次弹出两个值为左右节点的返回值 处理完结果push回结果栈 最终栈数组最后一个元素就是最终结果
 *
 * 这道题无需用到结果栈 用到结果栈的例子可以参考 ./236.二叉树的最近公共祖先.ts
 */
export function binaryTreePaths2(root: TreeNode<string> | null): string[] {
  // 终止条件
  if (root === null) return [];

  const ret: string[] = [];
  const stack: any[] = [{ node: root, color: "white", data: [] }]; // data表示参数

  while (stack.length > 0) {
    const { node, color, data } = stack.pop()!;
    if (color === "gray") {
      // 返回结果
      if (node.left === null && node.right === null) {
        ret.push([...data, node.val].join("->"));
      }
    } else {
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
