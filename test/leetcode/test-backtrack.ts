import assert from "assert";
import { permute } from "../../src/leetcode/算法-回溯/46.全排列";

describe("回溯", function () {
  describe("46.全排列", function () {
    const cases = [
      {
        arg: [],
        ret: [[]],
      },
      {
        arg: [1, 2, 3],
        ret: [
          [1, 2, 3],
          [1, 3, 2],
          [2, 1, 3],
          [2, 3, 1],
          [3, 1, 2],
          [3, 2, 1],
        ],
      },
    ];
    it("递归", function () {
      cases.forEach((item) => {
        const ret = permute(item.arg);
        assert.deepStrictEqual(ret, item.ret);
      });
    });
  });
});
