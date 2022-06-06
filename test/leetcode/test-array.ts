import { assert } from "chai";
import { twoSum, twoSumWithMap } from "../../src/leetcode/1.数组/1.两数之和";

describe("数组", function () {
  describe("两数之和", function () {
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
});
