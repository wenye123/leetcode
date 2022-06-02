class TreeNode {
  val: string;
  left: Node;
  right: Node;

  constructor(val: string) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
export type Node = TreeNode | null;
export type TraversalType = "before" | "middle" | "after";

/** 递归遍历 */
export function traversalRecursive(root: Node, type: TraversalType): string[] {
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
export function traversalTree(root: Node, type: TraversalType) {
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
      if (type === "after") stack.push({ color: "gray", node }); // 后序遍历
      if (node.right) stack.push({ color: "white", node: node.right });
      if (type === "middle") stack.push({ color: "gray", node }); // 中序遍历
      if (node.left) stack.push({ color: "white", node: node.left });
      if (type === "before") stack.push({ color: "gray", node }); // 前序遍历
    }
  }
  return arr;
}
