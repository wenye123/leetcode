import { assert } from "chai";
import { createListHead, createListTail, traversalList } from "../../src/base/List";
import { hasCycle } from "../../src/leetcode/数据结构-链表/141.环形链表";
import { LRUCache } from "../../src/leetcode/数据结构-链表/146.LRU缓存";
import {
  removeElements,
  removeElementsByRecursive,
  removeElementsBySentry,
} from "../../src/leetcode/数据结构-链表/203.移除链表元素";
import { reverseList, reverseList2 } from "../../src/leetcode/数据结构-链表/206. 反转链表";

describe("链表", function () {
  describe("203.移除链表元素", function () {
    const EXAMPLE = () => [
      {
        arg1: createListTail([1, 2, 6, 3, 4, 5, 6]),
        arg2: 6,
        ret2: [1, 2, 3, 4, 5],
      },
      {
        arg1: createListTail([7, 7, 7, 7]),
        arg2: 7,
        ret2: [],
      },
    ];
    let examples = EXAMPLE();
    beforeEach(() => {
      examples = EXAMPLE();
    });

    it("循环写法", function () {
      examples.forEach((example) => {
        const ret = removeElements(example.arg1, example.arg2);
        assert.deepStrictEqual(traversalList(ret), example.ret2);
      });
    });
    it("哨兵写法", function () {
      examples.forEach((example) => {
        const ret = removeElementsBySentry(example.arg1, example.arg2);
        assert.deepStrictEqual(traversalList(ret), example.ret2);
      });
    });
    it("递归写法", function () {
      examples.forEach((example) => {
        const ret = removeElementsByRecursive(example.arg1, example.arg2);
        assert.deepStrictEqual(traversalList(ret), example.ret2);
      });
    });
  });
  describe("141.环形链表", function () {
    const LIST = () => {
      const list = createListTail([3, 2, 0, 4]) as any;
      list.next.next.next = list?.next;
      return list;
    };
    const EXAMPLE = () => [
      {
        arg1: LIST(),
        ret1: true,
      },
      {
        arg1: createListTail([1]),
        ret1: false,
      },
    ];
    let examples = EXAMPLE();
    beforeEach(() => {
      examples = EXAMPLE();
    });

    it("使用哈希", function () {
      examples.forEach((example) => {
        const ret = hasCycle(example.arg1);
        assert.deepStrictEqual(example.ret1, ret);
      });
    });
    it("快慢指针", function () {
      examples.forEach((example) => {
        const ret = hasCycle(example.arg1);
        assert.deepStrictEqual(example.ret1, ret);
      });
    });
  });
  describe("146.LRU缓存", function () {
    it("map实现", function () {
      const cache = new LRUCache(2);
      cache.put(1, 1);
      cache.put(2, 2);
      cache.put(1, 1); // 重新访问 让1移动到尾部
      cache.put(3, 3); // 超过容量会删除掉头部的2
      const map = cache._getMap();
      assert.strictEqual(map.size, 2);
      const arr: number[] = [];
      map.forEach((val, key) => {
        arr.push(key);
      });
      assert.deepStrictEqual(arr, [1, 3]);
    });
  });
  describe("206. 反转链表", function () {
    const cases = [
      {
        arg: createListTail([1, 2, 3, 4, 5]),
        ret: [5, 4, 3, 2, 1],
      },
      {
        arg: createListHead([]),
        ret: [],
      },
    ];

    it("哨兵+头插法+新建节点", function () {
      cases.forEach((item) => {
        const ret = reverseList(item.arg);
        assert.deepStrictEqual(traversalList(ret), item.ret);
      });
    });
    it("哨兵+头插法+利用已有节点", function () {
      cases.forEach((item) => {
        const ret = reverseList2(item.arg);
        assert.deepStrictEqual(traversalList(ret), item.ret);
      });
    });
  });
});
