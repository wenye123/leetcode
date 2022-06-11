import assert from "assert";
import { singleNumber } from "../../src/leetcode/技巧-位运算/136. 只出现一次的数字";
import { isPowerOfTwo, isPowerOfTwoByBit } from "../../src/leetcode/技巧-位运算/231.2的幂";

describe("位运算", function () {
  describe("136.只出现一次的数字", function () {
    const examples = [{ arg: [2, 3, 4, 4, 2], ret: 3 }];
    it("位运算写法", function () {
      examples.forEach((example) => {
        const ret = singleNumber(example.arg);
        assert.strictEqual(ret, example.ret);
      });
    });
  });
  describe("231.2的幂.ts", function () {
    const examples = [
      { arg: 0, ret: false },
      { arg: 1, ret: true },
      { arg: 2, ret: true },
      { arg: 3, ret: false },
      { arg: 4, ret: true },
    ];

    it("循环写法", function () {
      examples.forEach((example) => {
        const ret = isPowerOfTwo(example.arg);
        assert.strictEqual(ret, example.ret);
      });
    });
    it("位运算写法", function () {
      examples.forEach((example) => {
        const ret = isPowerOfTwoByBit(example.arg);
        assert.strictEqual(ret, example.ret);
      });
    });
  });
});
