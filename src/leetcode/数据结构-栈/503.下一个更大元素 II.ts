/**
 * https://leetcode.cn/problems/next-greater-element-ii/
 */

export function nextGreaterElements(nums: number[]): number[] {
  const stack: number[] = []; // 单调递增栈
  const ret: number[] = new Array(nums.length).fill(-1);

  // 通过索引来拼接两个数组
  for (let i = 0; i < nums.length * 2; i++) {
    const realIndex = i % nums.length;
    const realNum = nums[realIndex];
    // 如果遇到更大的则推出
    while (stack.length > 0 && nums[stack[stack.length - 1]] < realNum) {
      const smallIndex = stack.pop()!;
      ret[smallIndex] = realNum;
    }
    // 否则添加
    stack.push(realIndex);
  }

  return ret;
}
