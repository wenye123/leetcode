import assert from "assert";
import { fib, fibByDp } from "../../src/leetcode/算法-动态规划/509. 斐波那契数";

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
});
