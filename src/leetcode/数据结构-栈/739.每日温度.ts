/**
 * https://leetcode.cn/problems/daily-temperatures/
 */

export function dailyTemperatures(temperatures: number[]): number[] {
  const stack: number[] = []; // 单调递增栈
  const ret: number[] = new Array(temperatures.length).fill(0); // 结果 默认都为0

  for (let [index, value] of temperatures.entries()) {
    // 如果遇到一个大值将之前全部比他小的值弹出来 计算差的天数
    while (stack.length > 0 && temperatures[stack[stack.length - 1]] < value) {
      const smallIndex = stack.pop()!;
      ret[smallIndex] = index - smallIndex;
    }
    // 如果没遇到比他大的 就推进栈
    stack.push(index);
  }

  return ret;
}
