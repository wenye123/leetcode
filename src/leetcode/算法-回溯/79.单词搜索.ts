/**
 * https://leetcode.cn/problems/word-search/
 */

export function exist(board: string[][], word: string): boolean {
  if (board.length === 0) return false;
  if (word.length === 0) return true;

  const row = board.length;
  const col = board[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      // 0表示word的索引值
      const ret = backtarck(i, j, 0);
      if (ret) return ret;
    }
  }
  return false;

  function backtarck(i: number, j: number, w: number): boolean {
    // 结束条件
    if (i >= row || i < 0) return false; // 判断边界
    if (j >= col || j < 0) return false; // 判断边界
    const letter = board[i][j];
    if (letter !== word[w]) return false; // 想要查找的值和word进度值不同则返回false
    if (w === word.length - 1) return true; // 查找完毕
    // 做选择
    board[i][j] = "*"; // 标记*表示已经选中
    // 递归 判断上下左右的值
    const ret =
      backtarck(i + 1, j, w + 1) ||
      backtarck(i - 1, j, w + 1) ||
      backtarck(i, j + 1, w + 1) ||
      backtarck(i, j - 1, w + 1);
    // 回溯
    board[i][j] = letter;
    return ret;
  }
}
