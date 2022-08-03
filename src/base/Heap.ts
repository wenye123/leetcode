/**
 * 满二叉树
 *   定义: 除最后一层没有任何子节点外 每一层节点都有两个子节点
 *   数学公式: 层次为h(从0开始) 深度为d(h+1) 节点总数n
 *     - 每一层的节点个数: 2^n
 *     - 节点总数: 2^d -1
 *     - 深度: log2n
 *     - parent(i) = Math.floor((i-1)/2)
 *     - left(i) = 2*i+1
 *     - right(i) = 2*i+2
 *   例子
 *         1
 *        2 3
 *      4 5 6 7
 *
 * 完全二叉树
 *   定义: 除了最后一层外 其他各层节点数都是满的 且最后一层的节点都连续集中在左边
 *   例子:
 *         1
 *        2 3
 *      4 5
 *
 * 堆:
 *   定义: 满足如下性质的完全二叉树
 *     - 大顶堆: 父节点的值比每个子节点的值要大
 *     - 小顶堆: 父节点的值比每个子节点的值要小
 *   特点:
 *     - 堆顶永远是最大/最小值 但是其他元素顺序未知
 *   数学公式: 为了方便计算i从1开始
 *     - parent(i) = Math.floor(i/2)
 *     - left(i) = 2*i
 *     - right(i) = 2*i+1
 *     - parent(i) >= left(i) && parent(i) >= right(i) - 大顶堆
 *   堆操作
 *     - 堆上浮: 将节点和父节点进行比较 如果不满足堆条件则和父节点交换 直到满足条件
 *     - 堆下沉: 将节点和子节点比较 找到最符合堆条件的节点和父节点交换 直到满足条件
 *     - 添加元素: 将节点添加到堆尾，然后执行上浮操作，复杂度O(log2n)
 *     - 弹出元素: 交换堆顶和堆尾元素值，然后弹出堆尾，复杂度O(log2n)
 *     - 获取堆顶元素值: 复杂度O(1)
 *   用途:
 *     优先级队列 解决Top[k]系列问题
 *     堆排序 复杂度O(logn)
 *   例子: 大顶堆
 *         1
 *        2 3
 *      4 5
 *
 */

class Heap {
  protected heapArr: number[];

  constructor() {
    this.heapArr = [0]; // 下标从1开始
  }

  // 交换
  private swap(i: number, j: number) {
    [this.heapArr[j], this.heapArr[i]] = [this.heapArr[i], this.heapArr[j]];
  }
  // 获取左节点索引
  private getLeftIndex(i: number) {
    return 2 * i;
  }
  // 获取右节点索引
  private getRightIndex(i: number) {
    return 2 * i + 1;
  }
  // 获取父节点索引
  private getParentIndex(i: number) {
    return i >> 1;
  }

  // 对比方法-默认小顶堆
  protected compare(parentIndex: number, childIndex: number) {
    return this.heapArr[parentIndex] < this.heapArr[childIndex];
  }
  // 上浮
  private shiftUp(i: number) {
    while (i > 1 && this.compare(this.getParentIndex(i), i) === false) {
      const parentIndex = this.getParentIndex(i);
      this.swap(i, parentIndex); // 交换两者的值
      i = parentIndex;
    }
  }
  // 下沉/堆化
  private shiftDown(i: number) {
    while (this.getLeftIndex(i) <= this.size) {
      let childIndex = this.getLeftIndex(i);
      let rightIndex = this.getRightIndex(i);
      // 小顶堆下 如果右节点的值更小 则交换右节点
      if (rightIndex <= this.size && this.compare(rightIndex, childIndex)) childIndex = rightIndex;
      if (this.compare(i, childIndex)) return; // 如果值满足条件则跳出循环
      this.swap(i, childIndex);
      // 继续下沉
      i = childIndex;
    }
  }

  // 获取堆长度
  get size() {
    return this.heapArr.length - 1;
  }
  // 获取堆顶元素
  peek() {
    return this.heapArr[1];
  }
  // 添加元素
  push(item: number) {
    // 添加元素后上浮
    this.heapArr.push(item);
    this.shiftUp(this.size);
  }
  // 弹出元素
  pop() {
    if (this.size === 0) return undefined;
    this.swap(1, this.size);
    const item = this.heapArr.pop();
    this.shiftDown(1); // 下沉
    return item;
  }
}

// 小顶堆
export class MinHeap extends Heap {
  protected compare(parentIndex: number, childIndex: number) {
    return this.heapArr[parentIndex] < this.heapArr[childIndex];
  }
}

// 大顶堆
export class MaxHeap extends Heap {
  protected compare(parentIndex: number, childIndex: number) {
    return this.heapArr[parentIndex] > this.heapArr[childIndex];
  }
}
