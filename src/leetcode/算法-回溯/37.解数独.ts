/**
 * https://leetcode.cn/problems/sudoku-solver/
 */

/**
 * 合法条件: 数组当前行不存在该值 当前列不存在该值 当前九宫格不存在该值
 * 每一次递归 都遍历一遍整个数独 找出还没填的值 依次用1-9去填
 */
export function solveSudoku(board: string[][]): void {
  // 回溯函数(待选路径 可选数组)
  function backtarck() {
    // 回溯循环
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        // 如果有值则下一轮
        if (board[i][j] !== ".") continue;
        // 遍历可能值进行填充
        for (let k = 1; k <= 9; k++) {
          // 选择
          const val = String(k);
          const valid = isValid(board, i, j, val);
          if (valid === false) continue;
          board[i][j] = val;
          // 递归
          const ret = backtarck();
          if (ret === true) return true;
          // 撤销选择
          board[i][j] = ".";
        }
        // 1-9都没找到适合值填 就返回false
        return false;
      }
    }
    // 全部都执行完了
    return true;
  }

  backtarck();
}

function isValid(board: string[][], row: number, col: number, val: string) {
  // 判断行列是否有相同值
  for (let i = 0; i < 9; i++) {
    // 当前行有值
    if (board[row][i] === val) return false;
    // 当前列有值
    if (board[i][col] === val) return false;
  }
  // 判断九宫格是否有相同值
  let beginRow = Math.floor(row / 3) * 3; // 九宫格的开始行
  let beginCol = Math.floor(col / 3) * 3; // 九宫格的开始列
  for (let i = beginRow; i < beginRow + 3; i++) {
    for (let j = beginCol; j < beginCol + 3; j++) {
      if (board[i][j] === val) return false;
    }
  }
  // 都合法情况
  return true;
}
