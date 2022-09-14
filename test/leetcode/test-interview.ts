import { assert } from "chai";
import { AuthenticationManager } from "../../src/leetcode/面试/1797.设计一个验证系统";

describe("面试", function () {
  describe("1797.设计一个验证系统", function () {
    it("实现", function () {
      const manager = new AuthenticationManager(5);
      manager.renew("aaa", 1);
      manager.generate("aaa", 2);
      assert.strictEqual(manager.countUnexpiredTokens(6), 1);
      manager.generate("bbb", 7);
      manager.renew("aaa", 8);
      manager.renew("bbb", 10);
      assert.strictEqual(manager.countUnexpiredTokens(15), 0);
    });
  });
});
