/**
 * https://leetcode.cn/problems/maximum-binary-tree/
 */

import { TreeNode } from "../../base/Tree";

export function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  if (nums.length === 0) return null;
  let maxIndex = 0,
    maxVal = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > maxVal) {
      maxIndex = i;
      maxVal = nums[i];
    }
  }
  const root = new TreeNode(nums[maxIndex]);
  root.left = constructMaximumBinaryTree(nums.slice(0, maxIndex));
  root.right = constructMaximumBinaryTree(nums.slice(maxIndex + 1, nums.length));
  return root;
}
