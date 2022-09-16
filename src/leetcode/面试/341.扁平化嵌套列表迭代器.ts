/**
 * https://leetcode.cn/problems/flatten-nested-list-iterator/
 */

/** 递归 */
function _flat(nestNums: Array<number[] | number>, flatNums: number[] = []) {
  for (let nestNum of nestNums) {
    if (Array.isArray(nestNum)) {
      _flat(nestNum, flatNums);
    } else {
      flatNums.push(nestNum);
    }
  }
  return flatNums;
}
export function flatByRecursive(nestNums: Array<number[] | number>) {
  return _flat(nestNums, []);
}

/** 通过栈 */
export function flatByStack(nestNums: Array<number[] | number>) {
  const stack = [...nestNums];
  const result: number[] = [];

  while (stack.length > 0) {
    const item = stack.pop()!;
    if (Array.isArray(item)) {
      stack.push(...item);
    } else {
      result.unshift(item);
    }
  }

  return result;
}
