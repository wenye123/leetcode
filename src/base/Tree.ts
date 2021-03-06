/**
 * 1. 深度优先遍历
 *   对每一个可能的分支路径深入到不能再深入，每个节点只访问一次。细分为前中后序遍历
 * 2. 广度优先遍历/层次遍历
 *   从上到下，从左到右，一层访问完访问下一层，直到没有节点可以访问
 * 3. 深度优先搜索算法
 *   不保留全部节点，占用空间少，有回溯(入栈出栈)操作，运行速度慢
 * 4. 广度优先搜索算法
 *   保留全部节点，占用空间大，无回溯操作，运行速度快，但是有内存溢出风险
 */

/** 树节点 */
export class TreeNode<T = number> {
  val: T;
  left: Tree<T>;
  right: Tree<T>;

  constructor(val: T, left?: Tree<T>, right?: Tree<T>) {
    this.val = val;
    this.left = left ? left : null;
    this.right = right ? right : null;
  }
}
export type Tree<T = number> = TreeNode<T> | null;
export type TraversalType = "prev" | "middle" | "after";

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
  // 获取生成数组的第一个值为根节点
  const root = new TreeNode(arr.shift()!);
  const queue = [root]; // 队列辅助
  // 只要生成数组还有值就循环执行
  while (arr.length !== 0) {
    const node = queue.shift()!;
    // 拿一个生成数组的值做左子节点
    if (arr.length !== 0) {
      const leftVal = arr.shift()!;
      if (leftVal !== null) {
        const left = new TreeNode(leftVal);
        node.left = left;
        queue.push(left);
      }
    }
    // 拿一个生成数组的值做右子节点
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

/********************************遍历&搜索**************************************** */

/** 深度优先遍历-递归 */
export function dfsTreeByRecursive<T>(root: Tree<T>, type: TraversalType): T[] {
  if (root === null) return [];
  if (type === "prev") {
    return [root.val, ...dfsTreeByRecursive(root.left, type), ...dfsTreeByRecursive(root.right, type)];
  } else if (type === "middle") {
    return [...dfsTreeByRecursive(root.left, type), root.val, ...dfsTreeByRecursive(root.right, type)];
  } else if (type === "after") {
    return [...dfsTreeByRecursive(root.left, type), ...dfsTreeByRecursive(root.right, type), root.val];
  } else {
    throw new Error("非法类型");
  }
}

/**
 * 深度优先遍历-非递归前序遍历简单版
 */
export function dfsPrevTree<T>(root: Tree<T>) {
  if (root === null) return [];
  const arr: T[] = [];
  const stack: TreeNode<T>[] = [root];
  while (stack.length > 0) {
    const node = stack.pop()!;
    // 这行代码无论写在这个循环的哪里都是前序遍历
    arr.push(node.val);
    // 这里记得注意顺序 除非但有些题目不在乎是不是前序遍历 只是想要遍历完整个树的话
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return arr;
}

/**
 * 深度优先遍历-非递归实现
 *  三种遍历方式全实现
 */
interface StackItem<T> {
  color: "white" | "gray";
  node: TreeNode<T>;
}
export function dfsTree<T>(root: Tree<T>, type: TraversalType) {
  if (root === null) return [];
  const stack: StackItem<T>[] = [];
  const arr: T[] = [];
  stack.push({ color: "white", node: root });
  while (stack.length !== 0) {
    const { node, color } = stack.pop()!;
    if (color === "gray") {
      arr.push(node.val);
    } else {
      // 这里注意 先推右节点 再推左节点
      if (type === "after") stack.push({ color: "gray", node }); // 后序遍历
      if (node.right) stack.push({ color: "white", node: node.right });
      if (type === "middle") stack.push({ color: "gray", node }); // 中序遍历
      if (node.left) stack.push({ color: "white", node: node.left });
      if (type === "prev") stack.push({ color: "gray", node }); // 前序遍历
    }
  }
  return arr;
}

/** 广度优先遍历-递归 */
export function bfsTreeByRecursive<T>(root: Tree<T>, queue: Tree<T>[] = [], count = 0): T[] {
  // 空树直接返回
  if (root === null) return [];
  // 第一层将根节点添加进队列
  if (count === 0) queue.push(root);
  // 依次获取队列节点 如果超出边界获取不到则直接返回
  const node = queue[count];
  if (!node) return [];
  // 将节点的左右节点推进队列
  if (node.left) queue.push(node.left);
  if (node.right) queue.push(node.right);
  // 递归获取获取节点的值
  return [node.val, ...bfsTreeByRecursive(root, queue, ++count)];
}

/** 广度优先遍历-非递归 */
export function bfsTree<T>(root: Tree<T>) {
  // 空树直接返回
  if (root === null) return;
  // 将第一个阶段推送进队列
  const result: T[] = [];
  const queue: TreeNode<T>[] = [];
  queue.push(root);
  // 只要队列还有值就执行
  while (queue.length !== 0) {
    const node = queue.shift()!;
    result.push(node.val);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return result;
}

/**
 * 广度优先遍历-非递归2: 每层数据组合成一个数组
 */
export function bfsTree2<T>(root: TreeNode<T> | null): T[][] {
  if (root === null) return [];
  const queue: TreeNode<T>[] = [root];
  const ret: T[][] = []; // 结果
  while (queue.length > 0) {
    let currLevelLen = queue.length;
    const currLevelRet: T[] = []; // 当前层结果
    while (currLevelLen-- > 0) {
      const node = queue.shift()!;
      currLevelRet.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    ret.push(currLevelRet);
  }
  return ret;
}

/** 深度优先搜索-递归 */
export function dfSearchTreeRecursive<T>(root: Tree<T>, target: T): boolean {
  if (root === null) return false;
  if (root.val === target) return true;
  const left = dfSearchTreeRecursive(root.left, target);
  const right = dfSearchTreeRecursive(root.right, target);
  return left || right;
}

/** 深度优先搜索-非递归 */
export function dfSearchTree<T>(root: Tree<T>, target: T): boolean {
  if (root === null) return false;
  if (root.val === target) return true;
  const stack: TreeNode<T>[] = [];
  stack.push(root);
  // 通过栈循环查找
  while (stack.length !== 0) {
    const node = stack.pop()!;
    if (node.val === target) return true;
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return false;
}

/** 广度优先搜索-递归 */
export function bsSearchTreeByRecursive<T>(root: Tree<T>, target: T, queue: Tree<T>[] = [], count = 0): boolean {
  // 空树直接返回false
  if (root === null) return false;
  // 第一层将根节点添加进队列
  if (count === 0) queue.push(root);
  // 依次获取队列节点 如果超出边界获取不到则直接返回false
  const node = queue[count];
  if (!node) return false;
  // 值相等返回true
  if (node.val === target) return true;
  // 将节点的左右节点推进队列
  if (node.left) queue.push(node.left);
  if (node.right) queue.push(node.right);
  // 返回递归的值
  return bsSearchTreeByRecursive(root, target, queue, ++count);
}

/** 广度优先搜索-非递归 */
export function bfSearchTree<T>(root: Tree<T>, target: T) {
  // 空树直接返回false
  if (root === null) return false;
  // 将第一个阶段推送进队列
  const queue: TreeNode<T>[] = [];
  queue.push(root);
  // 只要队列还有值就执行
  while (queue.length !== 0) {
    const node = queue.shift()!;
    if (node.val === target) return true;
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return false;
}

/********************************获取所有路径**************************************** */

/**
 *  获取所有路径-深度优先遍历-递归
 *   深度优先遍历自带回溯, 天生会通过回流遍历完所有路径
 *
 *   终止条件就是遍历到什么时候停止 开始回溯 并返回值
 *   父子节点数据流
 *     递归函数的参数就是父节点给子节点传值 通过记录父节点 能获取到整条路径
 *     递归函数的返回值就是子节点向父节点传值
 */
export function getTreePathsByRecursive(root: TreeNode | null): number[][] {
  let paths: number[][] = [];
  function getPathByDfs(tree: TreeNode | null, arr: number[]) {
    // 终止条件
    if (tree === null) return null;
    // 递归
    const left = getPathByDfs(tree.left, [...arr, tree.val]);
    const right = getPathByDfs(tree.right, [...arr, tree.val]);
    // 返回结果
    if (left === null && right === null) {
      paths.push([...arr, tree.val]);
    }
  }
  getPathByDfs(root, []);
  return paths;
}

/**
 * 获取所有路径-深度优先遍历-递归转循环: 先处理完左右节点后再处理父节点 所以采用后序遍历
 *   终止条件: 在根节点和push的每一个子节点中判断 并将结果推进结果栈
 *   可以在节点栈中存储变量模拟递归函数参数
 *   定义一个结果栈 每次弹出两个值为左右节点的返回值 处理完结果push回结果栈 最终栈数组最后一个元素就是最终结果
 *
 * 这道题无需用到结果栈 用到结果栈的例子可以参考 236.二叉树的最近公共祖先.ts
 */
export function getTreePaths(root: TreeNode | null): number[][] {
  // 终止条件
  if (root === null) return [];

  const ret: number[][] = [];
  const stack: any[] = [{ node: root, color: "white", data: [] }]; // data表示参数

  while (stack.length > 0) {
    const { node, color, data } = stack.pop()!;
    if (color === "gray") {
      // 返回结果
      if (node.left === null && node.right === null) {
        ret.push([...data, node.val]);
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
