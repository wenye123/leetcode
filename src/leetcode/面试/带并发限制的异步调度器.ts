/**
 * 带并发限制的异步调度器
 *  定义一个队列 满足大小的任务直接执行 多余的放在队列中 等之前的执行完后自动从队列中取一个新的执行
 *  难点:
 *    1. add方法需要返回一个promise 但是promise的执行时机不知道 这时候需要将此promise的resolve传递到实际resolve的时候 如何传递
 *      给task增加一个resolve属性
 *
 */

type Task<T> = (() => Promise<T>) & { resolve?: Function };

export class Scheduler<T = number> {
  private restCount: number; // 剩余可执行次数
  private waitQueue: Task<T>[] = []; // 等待队列

  constructor(maxCount: number) {
    this.restCount = maxCount;
  }

  // 运行任务
  private runTask(task: Task<T>) {
    this.restCount--; // 剩余次数-1
    task().then((data) => {
      task.resolve!(data); // 执行resolve
      this.restCount++; // 执行后次数+1
      // 此时还有更多任务则递归执行
      if (this.restCount > 0 && this.waitQueue.length > 0) {
        const task = this.waitQueue.shift()!;
        this.runTask(task);
      }
    });
  }

  // 添加任务
  add(task: Task<T>): Promise<T> {
    return new Promise((resolve) => {
      task.resolve = resolve; // 将resolve传递
      if (this.restCount > 0) {
        this.runTask(task);
      } else {
        this.waitQueue.push(task);
      }
    });
  }
}

// function timeout(ms: number, data: number): Promise<number> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(data);
//     }, ms);
//   });
// }

// const scheduler = new Scheduler(2);
// function addTask(ms: number, data: number) {
//   return scheduler.add(() => timeout(ms, data)).then((data) => console.log(data));
// }

// addTask(1000, 1);
// addTask(500, 2);
// addTask(300, 3);
// addTask(400, 4);
// 2 3 1 4
