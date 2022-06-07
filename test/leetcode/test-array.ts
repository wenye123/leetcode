import { assert } from "chai";
import { twoSum, twoSumWithMap } from "../../src/leetcode/1.数组/1.两数之和";
import { removeDuplicates } from "../../src/leetcode/1.数组/26.删除排序数组中的重复项";
import { removeElement } from "../../src/leetcode/1.数组/27.移除元素";

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
  describe("26.删除排序数组中的重复项", function () {
    const arg1 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    const ret1 = 5;
    const ret2 = [0, 1, 2, 3, 4];
    it("双指针", function () {
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
    it("双指针", function () {
      const ret = removeElement(arg1, arg2);
      assert.strictEqual(ret, ret1);
      assert.deepStrictEqual(arg1.slice(0, ret), ret2);
    });
  });
});
