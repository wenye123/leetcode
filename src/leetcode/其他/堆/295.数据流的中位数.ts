/**
 * https://leetcode.cn/problems/find-median-from-data-stream/
 */

import { MaxHeap, MinHeap } from "../../../base/Heap";

/** 通过有序数组 */
// export class MedianFinder {
//   arr: number[];
//   constructor() {
//     this.arr = [];
//   }

//   addNum(num: number) {
//     // 数组为空则直接添加
//     if (this.arr.length === 0) return this.arr.push(num);
//     // 找到第一个比num大的索引
//     let index = -1;
//     for (let i = 0; i < this.arr.length; i++) {
//       if (this.arr[i] > num) {
//         index = i;
//         break;
//       }
//     }
//     // 没找到更大的值则添加到尾部
//     if (index === -1) return this.arr.push(num);
//     // 添加到指定位置
//     this.arr.splice(index, 0, num);
//   }

//   findMedian(): number {
//     if (this.arr.length % 2 === 0) {
//       const index1 = Math.floor((this.arr.length - 1) / 2);
//       const index2 = index1 + 1;
//       return (this.arr[index1] + this.arr[index2]) / 2;
//     } else {
//       const index = Math.floor((this.arr.length - 1) / 2);
//       return this.arr[index];
//     }
//   }
// }

/** 通过大小顶堆:
 * 大顶堆存储小的部分 小顶堆存储大的部分 两者数量差1则是奇数 中位数为大顶堆的值 两者数量相同则是两者的平均数
 */
export class MedianFinder {
  minHeap = new MinHeap();
  maxHeap = new MaxHeap();

  addNum(num: number): void {
    if (this.maxHeap.size === 0 || this.maxHeap.peek() > num) {
      this.maxHeap.push(num);
    } else {
      this.minHeap.push(num);
    }
    // 维持平衡
    if (this.maxHeap.size - this.minHeap.size > 1) {
      this.minHeap.push(this.maxHeap.pop()!);
    }
    if (this.minHeap.size - this.maxHeap.size > 0) {
      this.maxHeap.push(this.minHeap.pop()!);
    }
  }

  findMedian(): number {
    if ((this.maxHeap.size + this.minHeap.size) % 2 === 0) {
      return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
    } else {
      return this.maxHeap.peek();
    }
  }
}
