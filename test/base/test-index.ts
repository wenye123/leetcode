import { binarySearch, sentrySearch, sentrySearch2 } from "../../src/base/Search";
import { assert } from "chai";
import { bubbleSort, bubbleSort2, insertSort, swapSort, swapSort2 } from "../../src/base/Sort";

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
    beforeEach(() => {
      nums = [6, 3, 1, 8, 4, 2];
    });

    it("交换排序", function () {
      swapSort(nums);
      assert.deepStrictEqual(nums, [1, 2, 3, 4, 6, 8]);
    });
    it("简单选择排序(交换排序改进版)", function () {
      swapSort2(nums);
      assert.deepStrictEqual(nums, [1, 2, 3, 4, 6, 8]);
    });
    it("冒泡排序", function () {
      bubbleSort(nums);
      assert.deepStrictEqual(nums, [1, 2, 3, 4, 6, 8]);
    });
    it("冒泡排序改进版", function () {
      bubbleSort2(nums);
      assert.deepStrictEqual(nums, [1, 2, 3, 4, 6, 8]);
    });
    it("插入排序", function () {
      insertSort(nums);
      assert.deepStrictEqual(nums, [1, 2, 3, 4, 6, 8]);
    });
  });
});
