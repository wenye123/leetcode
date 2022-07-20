import assert from "assert";
import { canJump, canJump2 } from "../../src/leetcode/算法-贪心/44.跳跃游戏";
import { jump } from "../../src/leetcode/算法-贪心/45.跳跃游戏 II";
import { findContentChildren } from "../../src/leetcode/算法-贪心/455.分发饼干";
import { lemonadeChange } from "../../src/leetcode/算法-贪心/860.柠檬水找零";

describe("贪心算法", function () {
  describe("860.柠檬水找零", function () {
    const cases = [
      {
        arg: [5, 5, 5, 10, 20],
        ret: true,
      },
      {
        arg: [5, 5, 10, 10, 20],
        ret: false,
      },
    ];
    it("贪心解法", function () {
      cases.forEach((item) => {
        const ret = lemonadeChange(item.arg);
        assert.strictEqual(ret, item.ret);
      });
    });
  });
  describe("44.跳跃游戏", function () {
    const cases = [
      {
        arg: [2, 3, 1, 1, 4],
        ret: true,
      },
      {
        arg: [3, 2, 1, 0, 4],
        ret: false,
      },
    ];
    it("贪心解法", function () {
      cases.forEach((item) => {
        const ret = canJump(item.arg);
        assert.strictEqual(ret, item.ret);
      });
    });
    it("从后向前判断", function () {
      cases.forEach((item) => {
        const ret = canJump2(item.arg);
        assert.strictEqual(ret, item.ret);
      });
    });
  });
  describe("455.分发饼干", function () {
    const cases = [
      {
        arg1: [1, 2, 3],
        arg2: [1, 1],
        ret: 1,
      },
      {
        arg1: [1, 2],
        arg2: [1, 2, 3],
        ret: 2,
      },
    ];
    it("贪心+双指针", function () {
      cases.forEach((item) => {
        const ret = findContentChildren(item.arg1, item.arg2);
        assert.strictEqual(ret, item.ret);
      });
    });
  });
  describe("45.跳跃游戏 II", function () {
    const cases = [
      {
        arg1: [2, 3, 1, 1, 4],
        ret: 2,
      },
      {
        arg1: [2, 3, 0, 1, 4],
        ret: 2,
      },
    ];
    it("贪心", function () {
      cases.forEach((item) => {
        const ret = jump(item.arg1);
        assert.strictEqual(ret, item.ret);
      });
    });
  });
});
