import { binarySearch, sentrySearch, sentrySearch2 } from "../../src/base/Search";
import { assert } from "chai";
import {
  bubbleSort,
  bubbleSort2,
  fastSort1,
  fastSort2,
  fastSort3,
  insertSort,
  mergeSort1,
  mergeSort2,
  shellSort,
  swapSort,
  swapSort2,
} from "../../src/base/Sort";

describe("基础", function () {
  describe("查找", function () {
    it("线性查找-无哨兵查找", function () {
      let ret = sentrySearch([3, 5, 7], 7);
      assert.strictEqual(ret, 2);
      ret = sentrySearch([3, 5, 7], 1);
      assert.strictEqual(ret, -1);
    });

    it("线性查找-有哨兵查找", function () {
      let ret = sentrySearch2([3, 5, 7], 7);
      assert.strictEqual(ret, 2);
      ret = sentrySearch2([3, 5, 7], 1);
      assert.strictEqual(ret, -1);
    });

    it("有序查找-折半查找", function () {
      const ret = binarySearch([1, 2, 3, 4], 3);
      assert.strictEqual(ret, 2);
    });
  });
  describe.only("排序", function () {
    let nums: number[] = [];
    let sortNums = [1, 2, 3, 4, 6, 8, 9];
    beforeEach(() => {
      nums = [6, 3, 1, 8, 4, 2, 9];
    });

    it("简单算法-交换排序", function () {
      swapSort(nums);
      assert.deepStrictEqual(nums, sortNums);
    });
    it("简单算法-简单选择排序(交换排序改进版)", function () {
      swapSort2(nums);
      assert.deepStrictEqual(nums, sortNums);
    });
    it("简单算法-冒泡排序", function () {
      bubbleSort(nums);
      assert.deepStrictEqual(nums, sortNums);
    });
    it("简单算法-冒泡排序改进版", function () {
      bubbleSort2(nums);
      assert.deepStrictEqual(nums, sortNums);
    });
    it("简单算法-插入排序", function () {
      insertSort(nums);
      assert.deepStrictEqual(nums, sortNums);
    });

    it("改进算法-希尔排序", function () {
      shellSort(nums);
      assert.deepStrictEqual(nums, sortNums);
    });
    it("改进算法-归并排序-递归版", function () {
      const arr = mergeSort1(nums);
      assert.deepStrictEqual(arr, sortNums);
    });
    it("改进算法-归并排序-循环递归版", function () {
      mergeSort2(nums);
      assert.deepStrictEqual(nums, sortNums);
    });
    it("改进算法-快速排序-递归内存版", function () {
      const arr = fastSort1(nums);
      assert.deepStrictEqual(arr, sortNums);
    });
    it("改进算法-快速排序-递归分区版", function () {
      fastSort2(nums);
      assert.deepStrictEqual(nums, sortNums);
    });
    it("改进算法-快速排序-栈循环分区版", function () {
      fastSort3(nums);
      assert.deepStrictEqual(nums, sortNums);
    });
  });
});
