import { assert } from "chai";
import { createListTail, traversalList } from "../../src/base/List";
import { sortList } from "../../src/leetcode/面试/148.排序链表";
import { AuthenticationManager } from "../../src/leetcode/面试/1797.设计一个验证系统";
import { addTwoNumbers } from "../../src/leetcode/面试/2.两数相加";
import { flatByRecursive, flatByStack } from "../../src/leetcode/面试/扁平化数组";
import { RandomizedSet } from "../../src/leetcode/面试/380.RandomSet";
import { Solution } from "../../src/leetcode/面试/384.打乱数组";
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
  describe("148.排序链表", function () {
    const CASES = [
      {
        arg: createListTail([-1, 5, 3, 4, 0]),
        ret: [-1, 0, 3, 4, 5],
      },
      {
        arg: createListTail([]),
        ret: [],
      },
    ];
    it("转换数组", function () {
      CASES.forEach((item) => {
        const ret = sortList(item.arg);
        assert.deepStrictEqual(traversalList(ret), item.ret);
      });
    });
  });
  describe("384.打乱数组", function () {
    it("实现", function () {
      const nums = [1, 2, 3, 4, 5, 6];
      const solution = new Solution(nums);
      assert.notDeepEqual(solution.shuffle(), nums); // 这里的判断逻辑是有问题的 有一定概率会相等
      assert.deepStrictEqual(solution.reset(), nums);
    });
  });
  describe("380.RandomSet", function () {
    it("实现", function () {
      const randomSet = new RandomizedSet();
      assert.strictEqual(randomSet.insert(1), true);
      assert.strictEqual(randomSet.insert(1), false);
      assert.strictEqual(randomSet.remove(2), false);
      assert.strictEqual(randomSet.remove(1), true);
      assert.strictEqual(randomSet.insert(2), true);
      assert.strictEqual(randomSet.getRandom(), 2);
    });
  });
  describe("扁平化数组", function () {
    const CASES = [
      {
        arg: [1, [2, [3, [4, 5]]], 6] as any,
        ret: [1, 2, 3, 4, 5, 6],
      },
      {
        arg: [],
        ret: [],
      },
    ];
    it("递归", function () {
      CASES.forEach((item) => {
        const ret = flatByRecursive(item.arg);
        assert.deepStrictEqual(ret, item.ret);
      });
    });
    it("通过栈", function () {
      CASES.forEach((item) => {
        const ret = flatByStack(item.arg);
        assert.deepStrictEqual(ret, item.ret);
      });
    });
  });
  describe("2.两数相加", function () {
    const CASES = [
      {
        arg1: createListTail([2, 4, 3]),
        arg2: createListTail([5, 6, 4]),
        ret: [7, 0, 8],
      },
      {
        arg1: createListTail([9, 9, 9, 9, 9, 9, 9]),
        arg2: createListTail([9, 9, 9, 9]),
        ret: [8, 9, 9, 9, 0, 0, 0, 1],
      },
    ];
    it("直接相加", function () {
      CASES.forEach((item) => {
        const ret = addTwoNumbers(item.arg1, item.arg2);
        assert.deepStrictEqual(traversalList(ret), item.ret);
      });
    });
  });
});
