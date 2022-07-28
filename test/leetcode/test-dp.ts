import assert from "assert";
import { maxProfit1_1, maxProfit1_2 } from "../../src/leetcode/算法-动态规划/121.买卖股票的最佳时机";
import { maxProfit2_1, maxProfit2_2 } from "../../src/leetcode/算法-动态规划/122.买卖股票的最佳时机 II";
import { maxProfit3_1 } from "../../src/leetcode/算法-动态规划/123.买卖股票的最佳时机 III";
import { maxProfit4_1 } from "../../src/leetcode/算法-动态规划/188.买卖股票的最佳时机 IV";
import { rob } from "../../src/leetcode/算法-动态规划/198.打家劫舍";
import { rob as rob2 } from "../../src/leetcode/算法-动态规划/213.打家劫舍 II";
import { lengthOfLIS, lengthOfLIS2 } from "../../src/leetcode/算法-动态规划/300. 最长递增子序列";
import { coinChange } from "../../src/leetcode/算法-动态规划/322.零钱兑换";
import { fib, fibByDp } from "../../src/leetcode/算法-动态规划/509. 斐波那契数";
import { change } from "../../src/leetcode/算法-动态规划/518.零钱兑换 II";
import { maxSubArray1, maxSubArray2 } from "../../src/leetcode/算法-动态规划/53.最大子数组和";
import { uniquePaths } from "../../src/leetcode/算法-动态规划/62.不同路径";
import { findLengthOfLCIS1, findLengthOfLCIS2 } from "../../src/leetcode/算法-动态规划/674.最长连续递增序列";
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
  describe("198.打家劫舍", function () {
    const examples = [
      { arg1: [1, 2, 3, 1], ret: 4 },
      { arg1: [2, 7, 9, 3, 1], ret: 12 },
    ];
    it("动态规划", function () {
      examples.forEach((item) => {
        const ret = rob(item.arg1);
        assert.strictEqual(ret, item.ret);
      });
    });
  });
  describe("213.打家劫舍 II", function () {
    const examples = [
      { arg1: [2, 3, 2], ret: 3 },
      { arg1: [1, 2, 3, 1], ret: 4 },
    ];
    it("动态规划", function () {
      examples.forEach((item) => {
        const ret = rob2(item.arg1);
        assert.strictEqual(ret, item.ret);
      });
    });
  });
  describe("121.买卖股票的最佳时机", function () {
    const examples = [
      { arg1: [7, 1, 5, 3, 6, 4], ret: 5 },
      { arg1: [7, 6, 4, 3, 1], ret: 0 },
    ];
    it("贪心", function () {
      examples.forEach((item) => {
        const ret = maxProfit1_1(item.arg1);
        assert.strictEqual(ret, item.ret);
      });
    });
    it("动态规划", function () {
      examples.forEach((item) => {
        const ret = maxProfit1_2(item.arg1);
        assert.strictEqual(ret, item.ret);
      });
    });
  });
  describe("122.买卖股票的最佳时机 II", function () {
    const examples = [
      { arg1: [7, 1, 5, 3, 6, 4], ret: 7 },
      { arg1: [1, 2, 3, 4, 5], ret: 4 },
    ];
    it("贪心", function () {
      examples.forEach((item) => {
        const ret = maxProfit2_1(item.arg1);
        assert.strictEqual(ret, item.ret);
      });
    });
    it("动态规划", function () {
      examples.forEach((item) => {
        const ret = maxProfit2_2(item.arg1);
        assert.strictEqual(ret, item.ret);
      });
    });
  });
  describe("123.买卖股票的最佳时机 III", function () {
    const examples = [
      { arg1: [3, 3, 5, 0, 0, 3, 1, 4], ret: 6 },
      { arg1: [1, 2, 3, 4, 5], ret: 4 },
    ];
    it("动态规划", function () {
      examples.forEach((item) => {
        const ret = maxProfit3_1(item.arg1);
        assert.strictEqual(ret, item.ret);
      });
    });
  });
  describe("188.买卖股票的最佳时机 IV", function () {
    const examples = [
      { arg1: 2, arg2: [2, 4, 1], ret: 2 },
      { arg1: 2, arg2: [3, 2, 6, 5, 0, 3], ret: 7 },
    ];
    it("动态规划", function () {
      examples.forEach((item) => {
        const ret = maxProfit4_1(item.arg1, item.arg2);
        assert.strictEqual(ret, item.ret);
      });
    });
  });
  describe("53.最大子数组和", function () {
    const examples = [
      { arg1: [-2, 1, -3, 4, -1, 2, 1, -5, 4], ret: 6 },
      { arg1: [1], ret: 1 },
      { arg1: [5, 4, -1, 7, 8], ret: 23 },
    ];
    it("暴力", function () {
      examples.forEach((item) => {
        const ret = maxSubArray1(item.arg1);
        assert.strictEqual(ret, item.ret);
      });
    });
    it("动态规划", function () {
      examples.forEach((item) => {
        const ret = maxSubArray2(item.arg1);
        assert.strictEqual(ret, item.ret);
      });
    });
  });
  describe("674.最长连续递增序列", function () {
    const examples = [
      { arg1: [1, 3, 5, 4, 7], ret: 3 },
      { arg1: [2, 2, 2, 2, 2], ret: 1 },
    ];
    it("暴力", function () {
      examples.forEach((item) => {
        const ret = findLengthOfLCIS1(item.arg1);
        assert.strictEqual(ret, item.ret);
      });
    });
    it("动态规划", function () {
      examples.forEach((item) => {
        const ret = findLengthOfLCIS2(item.arg1);
        assert.strictEqual(ret, item.ret);
      });
    });
  });
  describe("518.零钱兑换 II", function () {
    const examples = [
      { arg1: 5, arg2: [1, 2, 5], ret: 4 },
      { arg1: 3, arg2: [2], ret: 0 },
    ];
    it("动态规划", function () {
      examples.forEach((item) => {
        const ret = change(item.arg1, item.arg2);
        assert.strictEqual(ret, item.ret);
      });
    });
  });
});
