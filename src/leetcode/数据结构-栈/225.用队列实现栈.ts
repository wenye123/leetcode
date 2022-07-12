/**
 * https://leetcode.cn/problems/implement-stack-using-queues/
 */

/**
 * pop
 *   主队列都将元素备份到备份队列到剩一个 shift这个值 也就是每次pop都会让主队列的值清空 下次会交换两队列的值继续
 * push
 *   直接推送到主队列就行 反正下次pop值都会备份到备份队列
 */
export class MyStack {
  /** 主队列 */
  queue1: number[];
  /** 备份队列 */
  queue2: number[];

  constructor() {
    this.queue1 = [];
    this.queue2 = [];
  }
  // 添加值
  push(x: number): void {
    // 有值直接推送到主队列 下次pop所有值都会备份到备份队列
    this.queue1.push(x);
  }
  // 弹出值
  pop(): number {
    // 如果主队列没值 说明都在备份队列中 直接交换两者的值
    if (this.queue1.length === 0) {
      [this.queue1, this.queue2] = [this.queue2, this.queue1];
    }
    // 备份值直到最后一个
    while (this.queue1.length > 1) {
      this.queue2.push(this.queue1.shift()!);
    }
    // 返回剩下的元素
    return this.queue1.shift()!;
  }
  // 获取栈顶
  top(): number {
    const x = this.pop();
    this.queue1.push(x);
    return x;
  }
  // 是否为空
  empty(): boolean {
    return this.queue1.length === 0 && this.queue2.length === 0;
  }
}
