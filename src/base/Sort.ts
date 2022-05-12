/** 排序: 进行比较和移动
 *    内排序: 在内存中排序
 *    外排序: 排序过程中需要多次内外存交换数据
 * 简单算法: O(n^2)
 * 改进算法:
 *
 */

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
    for (let j = 0; j < nums.length - 1 - i; j++) {
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
    current = nums[i];
    for (j = i - 1; j >= 0 && nums[j] > current; j--) {
      nums[j + 1] = nums[j];
    }
    nums[j + 1] = current;
  }
}

/************************ 改进算法 ************************** */

/** 快速排序 */
export function fast(nums: number[]): number[] {
  if (nums.length <= 1) return nums;
  const index = Math.floor(nums.length / 2);
  const curr = nums[index];
  const left = [];
  const right = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === index) {
      continue;
    } else if (nums[i] < curr) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }
  return [...fast(left), curr, ...fast(right)];
}

const nums = [6, 3, 1, 8];
console.log(fast(nums));
