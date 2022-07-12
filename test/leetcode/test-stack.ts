import assert from "assert";
import { isValid } from "../../src/leetcode/数据结构-栈/20.有效的括号";
import { MyStack } from "../../src/leetcode/数据结构-栈/225.用队列实现栈";
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
  describe("225.用队列实现栈", function () {
    it("双队列", function () {
      const stack = new MyStack();
      assert.strictEqual(stack.empty(), true);
      stack.push(1);
      assert.strictEqual(stack.empty(), false);
      stack.push(2);
      assert.strictEqual(stack.top(), 2);
      assert.strictEqual(stack.pop(), 2);
      assert.strictEqual(stack.pop(), 1);
      assert.strictEqual(stack.empty(), true);
    });
  });
});
