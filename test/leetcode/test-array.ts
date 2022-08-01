import { assert } from "chai";
import { twoSum, twoSumWithMap } from "../../src/leetcode/基本-数组/1.两数之和";
import { isPalindrome } from "../../src/leetcode/基本-数组/125.验证回文串";
import { threeSum } from "../../src/leetcode/基本-数组/15.三数之和";
import { twoSum2 } from "../../src/leetcode/基本-数组/167.两数之和2";
import { fourSum } from "../../src/leetcode/基本-数组/18.四数之和";
import { minSubArrayLen, minSubArrayLen2 } from "../../src/leetcode/基本-数组/209.长度最小的子数组";
import { removeDuplicates } from "../../src/leetcode/基本-数组/26.删除排序数组中的重复项";
import { removeElement } from "../../src/leetcode/基本-数组/27.移除元素";
import { moveZeroes } from "../../src/leetcode/基本-数组/283.移动零";
import { reverseString } from "../../src/leetcode/基本-数组/344.反转字符串";
import { sortedSquares } from "../../src/leetcode/基本-数组/977.有序数组的平方";

describe("数组", function () {
  describe("1.两数之和", function () {
    const arg1 = [2, 7, 11, 15];
    const arg2 = 9;
    const ret1 = [0, 1];
    it("暴力法", function () {
      const ret = twoSum(arg1, arg2);
      assert.deepStrictEqual(ret, ret1);
    });
    it("借助map", function () {
      const ret = twoSumWithMap(arg1, arg2);
      assert.deepStrictEqual(ret, ret1);
    });
  });
  describe("15.三数之和", function () {
    const examples = [
      {
        arg: [-1, 0, 1, 2, -1, -4],
        ret: [
          [-1, -1, 2],
          [-1, 0, 1],
        ],
      },
      { arg: [], ret: [] },
      { arg: [0], ret: [] },
    ];
    it("排序+双指针", function () {
      examples.forEach((example) => {
        const ret = threeSum(example.arg);
        assert.deepStrictEqual(ret, example.ret);
      });
    });
  });
  describe("26.删除排序数组中的重复项", function () {
    const arg1 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    const ret1 = 5;
    const ret2 = [0, 1, 2, 3, 4];
    it("快慢指针", function () {
      const ret = removeDuplicates(arg1);
      assert.strictEqual(ret, ret1);
      assert.deepStrictEqual(arg1.slice(0, ret1), ret2);
    });
  });
  describe("26.移除元素", function () {
    const arg1 = [0, 1, 2, 2, 3, 0, 4, 2];
    const arg2 = 2;
    const ret1 = 5;
    const ret2 = [0, 1, 3, 0, 4];
    it("快慢指针", function () {
      const ret = removeElement(arg1, arg2);
      assert.strictEqual(ret, ret1);
      assert.deepStrictEqual(arg1.slice(0, ret), ret2);
    });
  });
  describe("283.移动零", function () {
    const cases = [
      {
        arg: [0, 1, 0, 3, 12],
        ret: [1, 3, 12, 0, 0],
      },
      {
        arg: [0],
        ret: [0],
      },
    ];
    it("快慢指针", function () {
      cases.forEach((item) => {
        moveZeroes(item.arg);
        assert.deepStrictEqual(item.arg, item.ret);
      });
    });
  });
  describe("167.两数之和2", function () {
    const cases = [
      {
        arg1: [2, 7, 11, 15],
        arg2: 9,
        ret: [1, 2],
      },
      {
        arg1: [2, 3, 4],
        arg2: 6,
        ret: [1, 3],
      },
    ];
    it("头尾指针", function () {
      cases.forEach((item) => {
        const ret = twoSum2(item.arg1, item.arg2);
        assert.deepStrictEqual(ret, item.ret);
      });
    });
  });
  describe("977.有序数组的平方", function () {
    const cases = [
      {
        arg: [-4, -1, 0, 3, 10],
        ret: [0, 1, 9, 16, 100],
      },
      {
        arg: [-7, -3, 2, 3, 11],
        ret: [4, 9, 9, 49, 121],
      },
    ];
    it("头尾指针", function () {
      cases.forEach((item) => {
        const ret = sortedSquares(item.arg);
        assert.deepStrictEqual(ret, item.ret);
      });
    });
  });
  describe("209.长度最小的子数组", function () {
    const cases = [
      {
        arg1: 7,
        arg2: [2, 3, 1, 2, 4, 3],
        ret: 2,
      },
      {
        arg1: 4,
        arg2: [1, 4, 4],
        ret: 1,
      },
      {
        arg1: 11,
        arg2: [1, 1, 1, 1, 1, 1, 1, 1],
        ret: 0,
      },
    ];
    it("暴力解法", function () {
      cases.forEach((item) => {
        const ret = minSubArrayLen(item.arg1, item.arg2);
        assert.deepStrictEqual(ret, item.ret);
      });
    });
    it("快慢指针", function () {
      cases.forEach((item) => {
        const ret = minSubArrayLen2(item.arg1, item.arg2);
        assert.deepStrictEqual(ret, item.ret);
      });
    });
  });
  describe("344.反转字符串", function () {
    const cases = [
      {
        arg: ["h", "e", "l", "l", "o"],
        ret: ["o", "l", "l", "e", "h"],
      },
    ];
    it("头尾指针", function () {
      cases.forEach((item) => {
        reverseString(item.arg);
        assert.deepStrictEqual(item.ret, item.arg);
      });
    });
  });
  describe("125.验证回文串", function () {
    const examples = [
      { arg1: "A man, a plan, a canal: Panama", ret: true },
      { arg1: "race a car", ret: false },
    ];
    it("双指针", function () {
      examples.forEach((item) => {
        const ret = isPalindrome(item.arg1);
        assert.strictEqual(ret, item.ret);
      });
    });
  });
  describe("18.四数之和", function () {
    const examples = [
      {
        arg1: [1, 0, -1, 0, -2, 2],
        arg2: 0,
        ret: [
          [-2, -1, 1, 2],
          [-2, 0, 0, 2],
          [-1, 0, 0, 1],
        ],
      },
      { arg1: [2, 2, 2, 2, 2], arg2: 8, ret: [[2, 2, 2, 2]] },
    ];
    it("回溯", function () {
      examples.forEach((item) => {
        const ret = fourSum(item.arg1, item.arg2);
        assert.deepStrictEqual(ret, item.ret);
      });
    });
  });
});
