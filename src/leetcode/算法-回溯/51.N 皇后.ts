/**
 * https://leetcode.cn/problems/n-queens/
 */

/**
 * 行索引row 列索引col
 *
 * 攻击的情况:
 *  同一行 row相等 其实也就意味着一行只能有一个皇后
 *  同一列 col相等
 *  上斜对角线 row+col的值相等
 *  下斜对角线 row-col的值相等
 *
 * 具体实现就是一行一行放(因为一行只能放一个) 第一行从0开始放 然后第二行开始按照攻击情况判断可不可以放 如果可以就递归下一行 不行就continue下一个节点
 *
 *
 */
export function solveNQueens(n: number): string[][] {
  // 结果
  const result: string[][] = [];

  // 回溯函数(已选路径 待选数组) 这里retArr是一个索引为row值为col的数组 row是当前行的索引
  function backtrack(paths: number[], row: number) {
    // 终止条件
    if (paths.length === n) {
      const str = paths.map((col) => {
        const arr = new Array(n).fill(".");
        arr[col] = "Q";
        return arr.join("");
      });
      result.push(str);
      return;
    }
    // 回溯循环
    for (let col = 0; col < n; col++) {
      // 选择: 通过和之前值对比判断位置
      const canNoPut = paths.some((c, r) => {
        return col === c || r + c === row + col || r - c === row - col;
      });
      if (canNoPut === true) continue;
      paths.push(col);
      // 递归
      backtrack(paths, row + 1);
      // 撤销选择
      paths.pop();
    }
  }

  backtrack([], 0);
  return result;
}
