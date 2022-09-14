import { assert } from "chai";
import { AuthenticationManager } from "../../src/leetcode/面试/1797.设计一个验证系统";
import { RecentCounter } from "../../src/leetcode/面试/933.最近的请求次数";
import { Scheduler } from "../../src/leetcode/面试/带并发限制的异步调度器";

function timeout(ms: number, data: number): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, ms);
  });
}

describe("面试", function () {
  describe("带并发限制的异步调度器", function () {
    it("实现", async function () {
      const scheduler = new Scheduler(2);
      const result: number[] = [];
      await Promise.all([
        scheduler.add(() => timeout(1000, 1)).then((data) => result.push(data)),
        scheduler.add(() => timeout(500, 2)).then((data) => result.push(data)),
        scheduler.add(() => timeout(300, 3)).then((data) => result.push(data)),
        scheduler.add(() => timeout(400, 4)).then((data) => result.push(data)),
      ]);
      assert.deepStrictEqual(result, [2, 3, 1, 4]);
    });
  });
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
  describe("933.最近的请求次数", function () {
    it("实现", function () {
      const counter = new RecentCounter();
      assert.strictEqual(counter.ping(1), 1);
      assert.strictEqual(counter.ping(100), 2);
      assert.strictEqual(counter.ping(3001), 3);
      assert.strictEqual(counter.ping(3002), 3);
    });
  });
});
