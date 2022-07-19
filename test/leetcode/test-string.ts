import { assert } from "chai";
import { isPalindrome } from "../../src/leetcode/基本-字符串/125.验证回文串";

describe("字符串", function () {
  describe("125.验证回文串", function () {
    const examples = [
      { arg1: "A man, a plan, a canal: Panama", ret: true },
      { arg1: "race a car", ret: false },
    ];
    it("双指针", function () {
      examples.forEach((item) => {
        const ret = isPalindrome(item.arg1);
        assert.strictEqual(ret, item.ret);
      });
    });
  });
});
