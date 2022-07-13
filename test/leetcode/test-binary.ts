import { assert } from "chai";
import { findMin } from "../../src/leetcode/算法-二分/153.寻找旋转排序数组中的最小值";
import { mySqrt } from "../../src/leetcode/算法-二分/69.x的平方根";
import { search } from "../../src/leetcode/算法-二分/704.二分查找";

describe("二分", function () {
  describe("704.二分查找", function () {
    const examples = [
      { arg1: [-1, 0, 3, 5, 9, 12], arg2: 9, ret: 4 },
      { arg1: [-1, 0, 3, 5, 9, 12], arg2: 2, ret: -1 },
    ];
    it("二分", function () {
      examples.forEach((example) => {
        const ret = search(example.arg1, example.arg2);
        assert.strictEqual(ret, example.ret);
      });
    });
  });
  describe("153.寻找旋转排序数组中的最小值", function () {
    const examples = [
      { arg1: [3, 4, 5, 1, 2], ret: 1 },
      { arg1: [4, 5, 6, 7, 0, 1, 2], ret: 0 },
      { arg1: [11, 13, 15, 17], ret: 11 },
    ];
    it("二分", function () {
      examples.forEach((example) => {
        const ret = findMin(example.arg1);
        assert.strictEqual(ret, example.ret);
      });
    });
  });
  describe("69.x的平方根", function () {
    const examples = [
      { arg1: 4, ret: 2 },
      { arg1: 8, ret: 2 },
    ];
    it("二分", function () {
      examples.forEach((example) => {
        const ret = mySqrt(example.arg1);
        assert.strictEqual(ret, example.ret);
      });
    });
  });
});
