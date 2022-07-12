/**
 * https://leetcode.cn/problems/implement-queue-using-stacks/
 */

/**
 * 特性: 从栈轮一圈值会相反 轮两边就是正常数据了
 *
 * pop
 *   只要stackOut栈还有值 直接pop即可 否则将stackIn的值重新推进stackOut待pop
 * push
 *   直接推进stackIn即可
 */
export class MyQueue {
  stackIn: number[] = []; // 存储值
  stackOut: number[] = []; // 实际推出值

  constructor() {
    this.stackIn = [];
    this.stackOut = [];
  }
  // 推进值
  push(x: number): void {
    this.stackIn.push(x);
  }
  // 弹出值
  pop(): number {
    // 有值直接pop
    if (this.stackOut.length > 0) {
      return this.stackOut.pop()!;
    }
    // 没有值将stackIn的值push进来在pop
    while (this.stackIn.length > 0) {
      this.stackOut.push(this.stackIn.pop()!);
    }
    return this.stackOut.pop()!;
  }
  // 获取队首
  peek(): number {
    const x = this.pop();
    this.stackOut.push(x);
    return x;
  }
  // 是否为空
  empty(): boolean {
    return this.stackIn.length === 0 && this.stackOut.length === 0;
  }
}
