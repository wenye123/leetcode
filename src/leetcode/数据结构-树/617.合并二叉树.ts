/**
 * https://leetcode.cn/problems/merge-two-binary-trees/
 */

import { TreeNode } from "../../base/Tree";

/**
 * 其次就是将两棵树的数组进行合并 都存在则相加 有一个为null则值为另一个的值
 * [1,3,2,5]
 * [2,1,3,null,4]
 * 合并成 [3,4,5,5,4]
 */

/** 深度优先遍历-递归 */
export function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
  // 终止条件
  if (!root1) return root2;
  if (!root2) return root1;
  // 逻辑操作
  root1.val = root1.val + root2.val;
  // 递归
  root1.left = mergeTrees(root1.left, root2.left);
  root1.right = mergeTrees(root1.right, root2.right);
  // 返回结果
  return root1;
}

/** 深度优先遍历-非递归 */
export function mergeTrees2(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
  // 终止条件
  if (!root1) return root2;
  if (!root2) return root1;

  // 定义栈模拟递归
  const stack1: TreeNode[] = [root1];
  const stack2: TreeNode[] = [root2];

  while (stack1.length > 0) {
    const node1 = stack1.pop()!;
    const node2 = stack2.pop()!;

    // 逻辑操作
    node1.val += node2.val;

    // 递归左节点: 终止条件(通过不push进栈来终止)
    if (!node1.left || !node2.left) {
      // 终止条件
      node1.left = node1.left || node2.left;
    } else {
      stack1.push(node1.left);
      stack2.push(node2.left);
    }
    // 递归右节点: 终止条件(通过不push进栈来终止)
    if (!node1.right || !node2.right) {
      // 终止条件
      node1.right = node1.right || node2.right;
    } else {
      stack1.push(node1.right);
      stack2.push(node2.right);
    }
  }

  return root1;
}
