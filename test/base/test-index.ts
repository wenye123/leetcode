import { binarySearch, sentrySearch, sentrySearch2 } from "../../src/base/Search";
import { assert } from "chai";

describe("algorithm", function () {
  describe("查找", function () {
    it("线性查找-无哨兵查找", function () {
      let ret = sentrySearch([3, 5, 7], 7);
      assert.strictEqual(ret, 2);
      ret = sentrySearch([3, 5, 7], 1);
      assert.strictEqual(ret, -1);
    });

    it("线性查找-有哨兵查找", function () {
      let ret = sentrySearch2([3, 5, 7], 7);
      assert.strictEqual(ret, 2);
      ret = sentrySearch2([3, 5, 7], 1);
      assert.strictEqual(ret, -1);
    });

    it("有序查找-折半查找", function () {
      const ret = binarySearch([1, 2, 3, 4], 3);
      assert.strictEqual(ret, 2);
    });
  });
});
