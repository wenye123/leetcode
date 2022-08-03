import assert from "assert";
import { removeDuplicates } from "../../src/leetcode/数据结构-栈/1047.删除字符串中的所有相邻重复项";
import { evalRPN } from "../../src/leetcode/数据结构-栈/150.逆波兰表达式求值";
import { MinStack } from "../../src/leetcode/数据结构-栈/155.最小栈";
import { isValid } from "../../src/leetcode/数据结构-栈/20.有效的括号";
import { MyStack } from "../../src/leetcode/数据结构-栈/225.用队列实现栈";
import { MyQueue } from "../../src/leetcode/数据结构-栈/232.用栈实现队列";
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
      assert.strictEqual(stack.pop(), undefined);
      assert.strictEqual(stack.empty(), true);
    });
  });
  describe("232.用栈实现队列", function () {
    it("双栈", function () {
      const queue = new MyQueue();
      assert.strictEqual(queue.empty(), true);
      queue.push(1);
      assert.strictEqual(queue.empty(), false);
      queue.push(2);
      assert.strictEqual(queue.peek(), 1);
      assert.strictEqual(queue.pop(), 1);
      assert.strictEqual(queue.pop(), 2);
      assert.strictEqual(queue.pop(), undefined);
      assert.strictEqual(queue.empty(), true);
    });
  });
  describe("150.逆波兰表达式求值", function () {
    const examples = [
      { arg: ["2", "1", "+", "3", "*"], ret: 9 },
      { arg: ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"], ret: 22 },
    ];
    it("栈", function () {
      examples.forEach((example) => {
        const ret = evalRPN(example.arg);
        assert.strictEqual(ret, example.ret);
      });
    });
  });
  describe("1047.删除字符串中的所有相邻重复项", function () {
    const examples = [{ arg: "abbaca", ret: "ca" }];
    it("栈", function () {
      examples.forEach((example) => {
        const ret = removeDuplicates(example.arg);
        assert.strictEqual(ret, example.ret);
      });
    });
  });
  describe("155.最小栈", function () {
    it("栈", function () {
      const minStack = new MinStack();
      minStack.push(-2);
      minStack.push(0);
      minStack.push(-3);
      assert.strictEqual(minStack.getMin(), -3);
      minStack.pop();
      assert.strictEqual(minStack.top(), 0);
      assert.strictEqual(minStack.getMin(), -2);
    });
  });
});
