class TreeNode<T> {
  val: T;
  left: Tree<T>;
  right: Tree<T>;

  constructor(val: T, left?: Tree<T>, right?: Tree<T>) {
    this.val = val;
    this.left = left ? left : null;
    this.right = right ? right : null;
  }
}
export type Tree<T> = TreeNode<T> | null;
export type TraversalType = "before" | "middle" | "after";

/**
 * 层序生成树
 *   对于严格按照二叉树表示的数组 符合符合父节点i 左子节点2i 右子节点2i+1，可以采用类似归并排序那种方式生成
 *   这里考虑的是不完全的二叉树，也就是优化后的数组
 *
 * 数组: [1,null,2,3,4,null,null,5]
 * 树:
 *   1
 *    \
 *     2
 *    / \
 *   3   4
 *       /
 *      5
 */
export function createTree<T>(arr: T[]) {
  if (arr.length == 0 || arr[0] === null) return null;

  const root = new TreeNode(arr.shift()!);
  const queue = [root]; // 队列辅助

  while (arr.length !== 0) {
    const node = queue.shift()!;
    // 左子树
    if (arr.length !== 0) {
      const leftVal = arr.shift()!;
      if (leftVal !== null) {
        const left = new TreeNode(leftVal);
        node.left = left;
        queue.push(left);
      }
    }
    // 右子树
    if (arr.length !== 0) {
      const rightVal = arr.shift()!;
      if (rightVal !== null) {
        const right = new TreeNode(rightVal);
        node.right = right;
        queue.push(right);
      }
    }
  }

  return root;
}

/** 递归遍历 */
export function traversalRecursive<T>(root: Tree<T>, type: TraversalType): T[] {
  if (root === null) return [];
  if (type === "before") {
    return [root.val, ...traversalRecursive(root.left, type), ...traversalRecursive(root.right, type)];
  } else if (type === "middle") {
    return [...traversalRecursive(root.left, type), root.val, ...traversalRecursive(root.right, type)];
  } else if (type === "after") {
    return [...traversalRecursive(root.left, type), ...traversalRecursive(root.right, type), root.val];
  } else {
    throw new Error("非法类型");
  }
}

/** 非递归-栈遍历 */
export function traversalTree<T>(root: Tree<T>, type: TraversalType) {
  if (root === null) return [];
  const stack: any[] = [];
  const arr: string[] = [];
  stack.push({
    color: "white",
    node: root,
  });
  while (stack.length !== 0) {
    const { node, color } = stack.pop();
    if (color === "gray") {
      arr.push(node.val);
    } else {
      // 这里注意 要先判断推右节点 再推左节点
      if (type === "after") stack.push({ color: "gray", node }); // 后序遍历
      if (node.right) stack.push({ color: "white", node: node.right });
      if (type === "middle") stack.push({ color: "gray", node }); // 中序遍历
      if (node.left) stack.push({ color: "white", node: node.left });
      if (type === "before") stack.push({ color: "gray", node }); // 前序遍历
    }
  }
  return arr;
}
