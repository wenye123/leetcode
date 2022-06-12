import assert from "assert";
import { isValid } from "../../src/leetcode/数据结构-栈/20.有效的括号";
import { simplifyPath } from "../../src/leetcode/数据结构-栈/71.简化路径";

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
  describe("71.简化路径", function () {
    const examples = [
      { arg: "/home/", ret: "/home" },
      { arg: "/../", ret: "/" },
      { arg: "/a/./b/../../c/", ret: "/c" },
    ];
    it("通过栈", function () {
      examples.forEach((example) => {
        const ret = simplifyPath(example.arg);
        assert.strictEqual(ret, example.ret);
      });
    });
  });
});
