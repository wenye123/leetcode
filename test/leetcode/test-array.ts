import { assert } from "chai";
import { twoSum, twoSumWithMap } from "../../src/leetcode/1.数组/1.两数之和";
import { removeDuplicates } from "../../src/leetcode/1.数组/26.删除排序数组中的重复项";

describe("数组", function () {
  describe("1.两数之和", function () {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const answer = [0, 1];

    it("暴力法", function () {
      const ret = twoSum(nums, target);
      assert.deepStrictEqual(ret, answer);
    });
    it("借助map", function () {
      const ret = twoSumWithMap(nums, target);
      assert.deepStrictEqual(ret, answer);
    });
  });
  describe("26.删除排序数组中的重复项", function () {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    const answer = 5;
    const retNums = [0, 1, 2, 3, 4];

    it("双指针", function () {
      const ret = removeDuplicates(nums);
      assert.strictEqual(ret, answer);
      assert.deepStrictEqual(nums.slice(0, answer), retNums);
    });
  });
});
