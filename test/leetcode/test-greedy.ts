import assert from "assert";
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
});
