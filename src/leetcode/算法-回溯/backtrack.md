```js
回溯公式
  - 已选择列表
  - 可选择列表
  - 结束条件

  const result = [];
  function backtrack(已选择列表, 可选择列表) {
    if (满足结束条件) {
      result.push(已选择列表)
      return
    }
    for (选择 of 可选择列表) {
      做选择: 已选择列表.push(选择)
      backtrack(已选择列表, 可选择列表)
      撤销选择: 已选择列表.pop()
    }
  }

  回溯本质是通过递归进行深度优先遍历
    - 叶子节点就是return的结果值
    - 通过pop已选择列表实现回溯

```
