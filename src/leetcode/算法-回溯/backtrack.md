```js
回溯公式
  其实就是把所有结果全遍历一遍 寻找想要的结果 区别是通过递归会自动回溯

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

  剪枝: 为了让出现过的值不在出现 通过修改循环初始值实现
    例子: initNm就是为了剪去之前出现的值
    function backtrack(paths: number[], initNum: number) {
      if (paths.length === 2) {
        return result.push([...paths]);
      }
      for (let i = initNum; i <= n; i++) {
        paths.push(i);
        backtrack(paths, i + 1); // 通过传递i+1来剪枝
        paths.pop();
      }
    }

```
