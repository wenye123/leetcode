import { assert } from "chai";
import { createListTail, traversalList } from "../../src/base/List";
import { hasCycle } from "../../src/leetcode/数据结构-链表/141.环形链表";
import {
  removeElements,
  removeElementsByRecursive,
  removeElementsBySentry,
} from "../../src/leetcode/数据结构-链表/203.移除链表元素";

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
});
