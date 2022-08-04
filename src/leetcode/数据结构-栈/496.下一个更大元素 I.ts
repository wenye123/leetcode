/**
 * https://leetcode.cn/problems/next-greater-element-i/
 */

export function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const map: Record<string, number> = {}; // 储存nums2的结果
  const stack: number[] = []; // 单调递增栈
  const ret: number[] = new Array(nums1.length).fill(-1); // 结果 默认都是-1

  // 遍历nums的值
  for (let value of nums2) {
    // 只要值比栈的值要大 则弹出
    while (stack.length > 0 && stack[stack.length - 1] < value) {
      const smallItem = stack.pop()!;
      map[smallItem] = value;
    }
    // 否则将值推进栈
    stack.push(value);
  }
  // 遍历nums1的值
  for (let [index, value] of nums1.entries()) {
    // 存在值则修改
    if (map[value] !== undefined) {
      ret[index] = map[value];
    }
  }

  return ret;
}
