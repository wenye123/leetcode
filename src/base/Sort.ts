/** 排序: 进行比较和移动
 *    内排序: 在内存中排序
 *    外排序: 排序过程中需要多次内外存交换数据
 * 简单算法: O(n^2)
 * 改进算法:
 *
 */

// eslint-disable-next-line @typescript-eslint/no-inferrable-types
const SHOW_LOG: boolean = false;
function log(msg: string, ...args: any[]) {
  if (SHOW_LOG !== true) return;
  console.log(msg, ...args);
}

function swap(nums: number[], a: number, b: number) {
  const tmp = nums[a];
  nums[a] = nums[b];
  nums[b] = tmp;
}

/************************ 简单算法 ************************** */

/**
 * 交换排序(冒泡排序初级版)
 *  将每个值和剩下的值进行比较 如果大于则交换 这样子一轮循环后 第一个值就是最小值
 *  缺点: 某轮排序对其他轮没有什么帮助 效率低下
 */
export function swapSort(nums: number[]) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        swap(nums, i, j);
      }
    }
  }
}

/**
 * 简单选择排序(交换排序优化版)
 *   定义一个变量存储最小值下标 如果有更小值就赋值 循环一轮结束如果下标改变才移动 减少了移动次数
 *   整体性能比冒泡排序要好
 */
export function swapSort2(nums: number[]) {
  let min = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    min = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[min] > nums[j]) {
        min = j;
      }
    }
    if (min !== i) {
      swap(nums, i, min);
    }
  }
}

/**
 * 冒泡排序
 *   每轮都是两个值两两比较，如果大于则交换，这样一轮循环后，最后一个值就是最大值
 *   每轮循环可以让其他字段也有所提升，可以减少交换次数
 */
export function bubbleSort(nums: number[]) {
  for (let i = 0; i < nums.length - 1; i++) {
    // 交换len-1次
    for (let j = 0; j < nums.length - 1 - i; j++) {
      // 两两交换
      if (nums[j] > nums[j + 1]) {
        swap(nums, j, j + 1);
      }
    }
  }
}

/**
 * 冒泡排序改进版
 *   增加flag判断 如果顺序表已经有序 则不再继续循环
 */
export function bubbleSort2(nums: number[]) {
  let isSwap = true;
  for (let i = 0; i < nums.length - 1 && isSwap; i++) {
    isSwap = false;
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        swap(nums, j, j + 1);
        isSwap = true;
      }
    }
  }
}

/**
 * 直接插入排序
 *   假定排完的就是有序的 是从第二个值开始 从后向前 如果遇到比自己大 将该值向后移动 否则该值插入遇到值得后面
 */
export function insertSort(nums: number[]) {
  let j = 0,
    current = 0;
  for (let i = 1; i < nums.length; i++) {
    // 默认从第二个元素向前
    current = nums[i];
    for (j = i - 1; j >= 0 && nums[j] > current; j--) {
      // 向前过程如果值比自己大则赋值当前
      nums[j + 1] = nums[j];
    }
    nums[j + 1] = current; // 如果没有比自己大的则写入当前值
  }
}

/************************ 改进算法 ************************** */

/**
 * 希尔排序(插入排序的改进)
 * 通过增量分组方式分割成若干个子序列，对子序列进行插入排序，当整个序列基本有序时候，在对全体进行一次插入排序
 */
export function shellSort(nums: number[]) {
  let j = 0,
    current = 0;
  // 增量减少 直到为1(1就是正常的直接插入排序)
  for (let increment = Math.floor(nums.length / 2); increment > 0; increment = Math.floor(increment / 2)) {
    for (let i = increment; i < nums.length; i++) {
      current = nums[i];
      for (j = i - increment; j >= 0 && nums[j] > current; j -= increment) {
        // 默认从递增量向前
        nums[j + increment] = nums[j];
      }
      nums[j + increment] = current;
    }
  }
}

/**
 * 归并排序(2路归并)
 *   采用分治的思想 原数组拆分为多个子序列 先让子序列有序 最后达到整体有序
 *   复杂度: 每次合并操作的平均复杂度是o(n) 树的深度是log2n 因此总的平均复杂度为O(nlogn)，空间复杂度O(n)
 *   比较占内存 效率高且稳定
 */
function merge(leftNums: number[], rightNums: number[]) {
  const tmp: number[] = [];
  let i = 0,
    j = 0;
  // 两个有序子序列进行对比 值小的推进临时数组中 直到其中一个数组遍历完
  while (i < leftNums.length && j < rightNums.length) {
    if (leftNums[i] < rightNums[j]) {
      tmp.push(leftNums[i++]);
    } else {
      tmp.push(rightNums[j++]);
    }
  }
  // 将左边剩余的添加到临时数组
  while (i < leftNums.length) {
    tmp.push(leftNums[i++]);
  }
  // 将右边剩余的添加到临时数组
  while (j < rightNums.length) {
    tmp.push(rightNums[j++]);
  }
  // 返回临时数组
  return tmp;
}

// 归并排序-递归版
export function mergeSort1(nums: number[]): number[] {
  if (nums.length === 1) return nums;
  const midIndex = Math.floor(nums.length / 2);
  const leftNums = nums.slice(0, midIndex);
  const rightNums = nums.slice(midIndex);
  return merge(mergeSort1(leftNums), mergeSort1(rightNums));
}

// 归并排序-循环版
export function mergeSort2(nums: number[]) {
  // 步长为1 每轮翻倍 直到最大为数组长度
  for (let step = 1; step <= nums.length; step = 2 * step) {
    log("----step----", step);
    for (let index = 0; index < nums.length; index += 2 * step) {
      // 计算子序列索引
      const left = index;
      let middle = index + step;
      if (middle >= nums.length) middle = nums.length; // 边界判断
      let right = index + 2 * step;
      if (right >= nums.length) right = nums.length; // 边界判断
      // 获取子序列
      const leftNums = nums.slice(left, middle);
      const rightNums = nums.slice(middle, right);
      // 排序子序列
      const mergeArr = merge(leftNums, rightNums);
      log("merge", left, middle, right, leftNums, rightNums, mergeArr);
      // 将排序后的子序列写回原数组
      for (let i = left; i < right; i++) {
        nums[i] = mergeArr[i - left];
      }
    }
  }
  return nums;
}

/**
 * 快速排序
 *   步骤
 *     数组中选择一个元素作为基点
 *     排序数组 所有比基点大的值放左边 否则放右边 最后基点插入在中间
 *     递归左右数组
 *   时间复杂度为最优O(logn)最差o(n^2) 空间复杂度最优O(logn)最差o(n) 不稳定
 */

// 快速排序-递归内存版
export function fastSort1(nums: number[]): number[] {
  if (nums.length <= 1) return nums;
  const index = Math.floor(nums.length / 2); // 取中间值当基点
  const curr = nums[index];
  const left = [],
    right = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === index) {
      continue;
    } else if (nums[i] < curr) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }
  return [...fastSort1(left), curr, ...fastSort1(right)];
}

// 通过双指针进行分区
function partition(nums: number[], left: number, right: number) {
  const pivotVal = nums[left]; // 选择左边索引值作为基准
  while (left < right) {
    // 如果比基准值小则交换到左边
    while (left < right && nums[right] >= pivotVal) right--;
    swap(nums, left, right);
    // 比基准值大就交换到右边
    while (left < right && nums[left] <= pivotVal) left++;
    swap(nums, left, right);
  }
  return left;
}

// 快速排序-递归分区版
function _fastSort2(nums: number[], left: number, right: number) {
  if (left < right) {
    const pivot = partition(nums, left, right);
    _fastSort2(nums, left, pivot - 1);
    _fastSort2(nums, pivot + 1, right);
  }
}
export function fastSort2(nums: number[]) {
  _fastSort2(nums, 0, nums.length - 1);
  return nums;
}

// 快速排序-栈循环分区版
export function fastSort3(nums: number[]) {
  // 定义一个栈
  const stack: Array<number[]> = [];
  // 将初始左右索引推入栈中
  stack.push([0, nums.length - 1]);
  // 只要存在未排序的子数组则循环
  while (stack.length > 0) {
    const [left, right] = stack.pop()!;
    const pivot = partition(nums, left, right);
    // 左侧有未排序元素则推入栈
    if (pivot - 1 > left) {
      stack.push([left, pivot - 1]);
    }
    // 右侧有未排序元素则推入栈
    if (pivot + 1 < right) {
      stack.push([pivot + 1, right]);
    }
  }
  return nums;
}
