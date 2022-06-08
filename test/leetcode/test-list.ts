import { assert } from "chai";
import { createListTail, traversalList } from "../../src/base/List";
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
});
