```js
回溯公式

  const result = [];
  function backtrack(已选路径, 可选数组) {
    // 终止条件
    if (满足结束条件) {
      result.push([...已选路径]); // 因为引用类型这里需要复制下值
      return
    }
    // 回溯循环
    for (选择 of 可选数组) {
      做选择: 已选路径.push(选择);
      backtrack(已选路径, 可选数组);
      撤销选择: 已选路径.pop(); // 撤销选择是为了下一轮循环
    }
  }

  回溯本质是通过递归进行深度优先遍历
    - 叶子节点就是return的结果值


```
