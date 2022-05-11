import {
  factorial,
  factorialByFor,
  factorialWithTail,
  fibo,
  fiboByFor,
  fiboWithMemory,
  fiboWithTail,
} from "../../src/other/Recursive";
import { assert } from "chai";

describe("其他", function () {
  describe("阶乘", function () {
    it("递归", function () {
      const ret = factorial(5);
      assert.strictEqual(ret, 120);
    });
    it("尾递归", function () {
      const ret = factorialWithTail(5);
      assert.strictEqual(ret, 120);
    });
    it("for循环", function () {
      const ret = factorialByFor(5);
      assert.strictEqual(ret, 120);
    });
  });
  describe("斐波那契", function () {
    it("重复计算的递归版本", function () {
      const ret = fibo(10);
      assert.strictEqual(ret, 55);
    });
    it("带缓存的递归版本", function () {
      const ret = fiboWithMemory(10);
      assert.strictEqual(ret, 55);
    });
    it("尾递归优化", function () {
      const ret = fiboWithTail(10);
      assert.strictEqual(ret, 55);
    });
    it("for循环版本", function () {
      const ret = fiboByFor(10);
      assert.strictEqual(ret, 55);
    });
  });
});
