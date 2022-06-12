import assert from "assert";
import { isValid } from "../../src/leetcode/数据结构-栈/20.有效的括号";

describe("栈", function () {
  describe("20.有效的括号", function () {
    const examples = [
      { arg: "", ret: true },
      { arg: "()", ret: true },
      { arg: "{()}", ret: true },
      { arg: "{(])", ret: false },
    ];
    it("通过栈", function () {
      examples.forEach((example) => {
        const ret = isValid(example.arg);
        assert.strictEqual(ret, example.ret);
      });
    });
  });
});
