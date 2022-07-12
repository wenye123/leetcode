import { assert } from "chai";
import { search } from "../../src/leetcode/算法-二分/704.二分查找";

describe("二分", function () {
  describe("704.二分查找", function () {
    const examples = [
      { arg1: [-1, 0, 3, 5, 9, 12], arg2: 9, ret: 4 },
      { arg1: [-1, 0, 3, 5, 9, 12], arg2: 2, ret: -1 },
    ];
    it("二分", function () {
      examples.forEach((example) => {
        const ret = search(example.arg1, example.arg2);
        assert.strictEqual(ret, example.ret);
      });
    });
  });
});
