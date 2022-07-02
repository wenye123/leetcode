import { assert } from "chai";
import {
  factorial,
  factorialByFor,
  factorialWithTail,
  fibo,
  fiboByDp,
  fiboByFor,
  fiboWithMemory,
  fiboWithTail,
} from "../../src/base/Recursive";

describe("基础", function () {
  describe("递归", function () {
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
      const cases = [
        { arg: 0, ret: 0 },
        { arg: 10, ret: 55 },
      ];
      it("重复计算的递归版本", function () {
        cases.forEach((item) => {
          const ret = fibo(item.arg);
          assert.strictEqual(ret, item.ret);
        });
      });
      it("带缓存的递归版本", function () {
        cases.forEach((item) => {
          const ret = fiboWithMemory(item.arg);
          assert.strictEqual(ret, item.ret);
        });
      });
      it("尾递归优化", function () {
        cases.forEach((item) => {
          const ret = fiboWithTail(item.arg);
          assert.strictEqual(ret, item.ret);
        });
      });
      it("for循环版本", function () {
        cases.forEach((item) => {
          const ret = fiboByFor(item.arg);
          assert.strictEqual(ret, item.ret);
        });
      });
      it("动态规划版本", function () {
        cases.forEach((item) => {
          const ret = fiboByDp(item.arg);
          assert.strictEqual(ret, item.ret);
        });
      });
    });
  });
});
