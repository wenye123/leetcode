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

/**
 *      a
 *     / \
 *    b   c
 *   / \   \
 *  d  e   f
 *
 * 前序遍历: abdecf
 * 中序遍历: dbeacf
 * 后序遍历: debfca
 */
const tree: Node = {
  val: "a",
  left: {
    val: "b",
    left: {
      val: "d",
      left: null,
      right: null,
    },
    right: {
      val: "e",
      left: null,
      right: null,
    },
  },
  right: {
    val: "c",
    left: null,
    right: {
      val: "f",
      left: null,
      right: null,
    },
  },
};

console.log(`
   a
  / \\
 b   c
/ \\   \\
d  e   f
`);
console.log("前序遍历: [ 'a', 'b', 'd', 'e', 'c', 'f' ]");
console.log("中序遍历: [ 'd', 'b', 'e', 'a', 'c', 'f' ]");
console.log("后序遍历: [ 'd', 'e', 'b', 'f', 'c', 'a' ]");

/** 递归遍历 */
{
  function inorderTraversal(root: Node) {
    const arr: string[] = [];
    helper(root, arr);
    return arr;
  }
  function helper(node: Node, arr: string[]) {
    if (node === null) return;
    // arr.push(node.val); // 前序遍历
    if (node.left) helper(node.left, arr);
    arr.push(node.val); // 后序遍历
    if (node.right) helper(node.right, arr);
    // arr.push(node.val); // 后序遍历
  }

  console.log(inorderTraversal(tree));
}

/** 中序遍历: 递归版: 直接返回数组 */
{
  function inorderTraversal(root: Node): string[] {
    if (root === null) return [];
    return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)];
  }

  console.log(inorderTraversal(tree));
}

/** 非递归: 深度优先遍历(借助栈) */
{
  function inorderTraversal(root: Node): string[] {
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
        // stack.push({ color: "gray", node }); // 后序遍历
        if (node.right) stack.push({ color: "white", node: node.right });
        stack.push({ color: "gray", node }); // 中序遍历
        if (node.left) stack.push({ color: "white", node: node.left });
        // stack.push({ color: "gray", node }); // 前序遍历
      }
    }

    return arr;
  }

  console.log(inorderTraversal(tree));
}
