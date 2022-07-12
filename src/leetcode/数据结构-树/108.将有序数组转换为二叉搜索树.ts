/**
 * https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree/
 */

import { TreeNode } from "../../base/Tree";

/**
 * 取有序数组中间值作为根节点进行构建 可以保证树的高度不超过1
 */
export function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (nums.length === 0 || nums[0] === null) return null;
  if (nums.length === 1) return new TreeNode(nums[0]);
  // 获取中间值作为根节点
  const mid = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[mid]);
  // 递归构建树
  root.left = sortedArrayToBST(nums.slice(0, mid));
  root.right = sortedArrayToBST(nums.slice(mid + 1, nums.length));
  return root;
}
