import assert from "assert";
import { lengthOfLIS, lengthOfLIS2 } from "../../src/leetcode/算法-动态规划/300. 最长递增子序列";
import { coinChange } from "../../src/leetcode/算法-动态规划/322.零钱兑换";
import { fib, fibByDp } from "../../src/leetcode/算法-动态规划/509. 斐波那契数";
import { uniquePaths } from "../../src/leetcode/算法-动态规划/62.不同路径";
import { climbStairs } from "../../src/leetcode/算法-动态规划/70.爬楼梯";
import { minCostClimbingStairs, minCostClimbingStairs2 } from "../../src/leetcode/算法-动态规划/746.使用最小花费爬楼梯";

describe("动态规划", function () {
  describe("509. 斐波那契数", function () {
    const examples = [
      { arg: 0, ret: 0 },
      { arg: 10, ret: 55 },
    ];
    it("递归实现", function () {
      examples.forEach((item) => {
        const ret = fib(item.arg);
        assert.strictEqual(ret, item.ret);
      });
    });
    it("动态规划实现", function () {
      examples.forEach((item) => {
        const ret = fibByDp(item.arg);
        assert.strictEqual(ret, item.ret);
      });
    });
  });
  describe("322.零钱兑换", function () {
    const examples = [
      { arg1: [1, 2, 5], arg2: 11, ret: 3 },
      { arg1: [2], arg2: 3, ret: -1 },
    ];
    it("动态规划", function () {
      examples.forEach((item) => {
        const ret = coinChange(item.arg1, item.arg2);
        assert.strictEqual(ret, item.ret);
      });
    });
  });
  describe("300. 最长递增子序列", function () {
    const examples = [
      { arg: [10, 9, 2, 5, 3, 7, 101, 18], ret: 4 },
      { arg: [0, 1, 0, 3, 2, 3], ret: 4 },
      { arg: [], ret: 0 },
    ];
    it("动态规划", function () {
      examples.forEach((item) => {
        const ret = lengthOfLIS(item.arg);
        assert.strictEqual(ret, item.ret);
      });
    });
    it("贪心+二分", function () {
      examples.forEach((item) => {
        const ret = lengthOfLIS2(item.arg);
        assert.strictEqual(ret, item.ret);
      });
    });
  });
  describe("70.爬楼梯", function () {
    const examples = [
      { arg: 2, ret: 2 },
      { arg: 3, ret: 3 },
    ];
    it("动态规划", function () {
      examples.forEach((item) => {
        const ret = climbStairs(item.arg);
        assert.strictEqual(ret, item.ret);
      });
    });
  });
  describe("746.使用最小花费爬楼梯", function () {
    const examples = [
      { arg: [10, 15, 20], ret: 15 },
      { arg: [1, 100, 1, 1, 1, 100, 1, 1, 100, 1], ret: 6 },
    ];
    it("动态规划", function () {
      examples.forEach((item) => {
        const ret = minCostClimbingStairs(item.arg);
        assert.strictEqual(ret, item.ret);
      });
    });
    it("动态规划-变量写法", function () {
      examples.forEach((item) => {
        const ret = minCostClimbingStairs2(item.arg);
        assert.strictEqual(ret, item.ret);
      });
    });
  });
  describe("62.不同路径", function () {
    const examples = [
      { arg1: 3, arg2: 2, ret: 3 },
      { arg1: 3, arg2: 3, ret: 6 },
      { arg1: 3, arg2: 7, ret: 28 },
    ];
    it("动态规划", function () {
      examples.forEach((item) => {
        const ret = uniquePaths(item.arg1, item.arg2);
        assert.strictEqual(ret, item.ret);
      });
    });
  });
});
