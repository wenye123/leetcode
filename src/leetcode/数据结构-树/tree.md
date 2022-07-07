```js
- 遍历
  - 深度优先遍历
  - 广度优先遍历
- 递归函数
  function dfs (root: Tree, p: TreeNode, q: TreeNode) {
    // 终止条件
    if (p === null || q === null) return p === q;
    if (p.val !== q.val) return false;
    // 递归
    const left = isSameTree(p.left, q.left);
    const right = isSameTree(p.right, q.right);
    // 返回结果
    return left && right;
  }

```
