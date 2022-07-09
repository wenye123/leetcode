```js
- 遍历
  - 深度优先遍历
  - 广度优先遍历
- 递归函数
  function dfs (root: Tree, p: TreeNode, q: TreeNode) { // 可以定义额外参数作为父节点向子节点传值
    // 终止条件
    if (p === null || q === null) return p === q;
    if (p.val !== q.val) return false;
    // 递归
    const left = isSameTree(p.left, q.left);
    const right = isSameTree(p.right, q.right);
    // 返回结果: 其实就是子节点向父节点传值
    return left && right;
  }

### 提醒
- 合并二叉树
- 反转二叉树
- 二叉树的最大深度
- 相同的树
- 全路径
- 二叉搜索树
```
