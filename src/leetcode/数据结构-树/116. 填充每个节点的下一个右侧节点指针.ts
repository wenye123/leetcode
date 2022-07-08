/**
 * https://leetcode.cn/problems/populating-next-right-pointers-in-each-node/
 */

export class NextTreeNode<T = number> {
  val: T;
  left: NextTree<T>;
  right: NextTree<T>;
  next: NextTree<T>;

  constructor(val: T, left?: NextTree<T>, right?: NextTree<T>, next?: NextTree<T>) {
    this.val = val;
    this.left = left ? left : null;
    this.right = right ? right : null;
    this.next = next ? next : null;
  }
}
export type NextTree<T = number> = NextTreeNode<T> | null;

/** 层次遍历 */
export function connect(root: NextTree): NextTree {
  if (root === null) return null;

  const queue: NextTreeNode[] = [root];
  while (queue.length) {
    let levelLen = queue.length;
    // let sentry = new NextTreeNode(0); // 哨兵节点
    while (levelLen-- > 0) {
      const node = queue.shift()!;
      // 尾插法
      // sentry.next = node;
      // sentry = sentry.next;
      // 直接指向下一个节点写法
      if (levelLen > 0) {
        node.next = queue[0];
      }
      // 添加左右子节点
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return root;
}
