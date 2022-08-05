import { assert } from "chai";
import { createListHead, createListTail, traversalList } from "../../src/base/List";
import { hasCycle } from "../../src/leetcode/数据结构-链表/141.环形链表";
import { detectCycle, detectCycle2 } from "../../src/leetcode/数据结构-链表/142.环形链表 II";
import { LRUCache } from "../../src/leetcode/数据结构-链表/146.LRU缓存";
import { getIntersectionNode, getIntersectionNode2 } from "../../src/leetcode/数据结构-链表/160.相交链表";
import { removeNthFromEnd, removeNthFromEnd2 } from "../../src/leetcode/数据结构-链表/19.删除链表的倒数第 N 个结点";
import {
  removeElements,
  removeElementsByRecursive,
  removeElementsBySentry,
} from "../../src/leetcode/数据结构-链表/203.移除链表元素";
import { reverseList } from "../../src/leetcode/数据结构-链表/206.反转链表";
import { mergeTwoLists, mergeTwoLists2 } from "../../src/leetcode/数据结构-链表/22.合并有序链表";
import { isPalindrome } from "../../src/leetcode/数据结构-链表/234.回文链表";
import { LFUCache } from "../../src/leetcode/数据结构-链表/460.LFU 缓存";
import { MyLinkedList } from "../../src/leetcode/数据结构-链表/707.设计链表";
import { middleNode } from "../../src/leetcode/数据结构-链表/876.链表的中间结点";
import { reverseBetween } from "../../src/leetcode/数据结构-链表/92.反转链表 II";

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
  describe("206.反转链表", function () {
    const CASES = () => [
      {
        arg: createListTail([1, 2, 3, 4, 5]),
        ret: [5, 4, 3, 2, 1],
      },
      {
        arg: createListHead([]),
        ret: [],
      },
    ];
    let cases = CASES();
    beforeEach(() => (cases = CASES()));
    it("头插法", function () {
      cases.forEach((item) => {
        const ret = reverseList(item.arg);
        assert.deepStrictEqual(traversalList(ret), item.ret);
      });
    });
  });
  describe("19.删除链表的倒数第 N 个结点", function () {
    const CASES = () => [
      {
        arg1: createListTail([1, 2, 3, 4, 5]),
        arg2: 2,
        ret: [1, 2, 3, 5],
      },
      {
        arg1: createListTail([1]),
        arg2: 1,
        ret: [],
      },
    ];
    let cases = CASES();
    beforeEach(() => {
      cases = CASES();
    });
    it("哨兵+额外数组", function () {
      cases.forEach((item) => {
        const ret = removeNthFromEnd(item.arg1, item.arg2);
        assert.deepStrictEqual(traversalList(ret), item.ret);
      });
    });
    it("哨兵+快慢指针", function () {
      cases.forEach((item) => {
        const ret = removeNthFromEnd2(item.arg1, item.arg2);
        assert.deepStrictEqual(traversalList(ret), item.ret);
      });
    });
  });
  describe("22.合并有序链表", function () {
    const CASES = () => [
      {
        arg1: createListTail([-9, 3]),
        arg2: createListTail([5, 7]),
        ret: [-9, 3, 5, 7],
      },
    ];
    let cases = CASES();
    this.beforeEach(() => {
      cases = CASES();
    });
    it("双指针+尾插法", function () {
      cases.forEach((item) => {
        const ret = mergeTwoLists(item.arg1, item.arg2);
        assert.deepStrictEqual(traversalList(ret), item.ret);
      });
    });
    it("递归", function () {
      cases.forEach((item) => {
        const ret = mergeTwoLists2(item.arg1, item.arg2);
        assert.deepStrictEqual(traversalList(ret), item.ret);
      });
    });
  });
  describe("876.链表的中间结点", function () {
    const CASES = () => [
      {
        arg: createListTail([1, 2, 3, 4, 5]),
        ret: [3, 4, 5],
      },
      {
        arg: createListTail([1, 2, 3, 4, 5, 6]),
        ret: [4, 5, 6],
      },
    ];
    let cases = CASES();
    beforeEach(() => (cases = CASES()));
    it("快慢指针", function () {
      cases.forEach((item) => {
        const ret = middleNode(item.arg);
        assert.deepStrictEqual(traversalList(ret), item.ret);
      });
    });
  });
  describe("234.回文链表", function () {
    const CASES = () => [
      {
        arg: createListTail([1, 2, 2, 1]),
        ret: true,
      },
      {
        arg: createListTail([1, 2]),
        ret: false,
      },
    ];
    let cases = CASES();
    beforeEach(() => (cases = CASES()));
    it("快慢指针+头插前半部分", function () {
      cases.forEach((item) => {
        const ret = isPalindrome(item.arg);
        assert.deepStrictEqual(ret, item.ret);
      });
    });
  });
  describe("92.反转链表 II", function () {
    const CASES = () => [
      {
        arg1: createListTail([1, 2, 3, 4, 5]),
        arg2: 2,
        arg3: 4,
        ret: [1, 4, 3, 2, 5],
      },
      {
        arg1: createListTail([5]),
        arg2: 2,
        arg3: 4,
        ret: [5],
      },
    ];
    let cases = CASES();
    beforeEach(() => (cases = CASES()));
    it("头插法", function () {
      cases.forEach((item) => {
        const ret = reverseBetween(item.arg1, item.arg2, item.arg3);
        assert.deepStrictEqual(traversalList(ret), item.ret);
      });
    });
  });
  describe("142.环形链表 II", function () {
    const EXAMPLE = () => [
      {
        arg1: (() => {
          const list = createListTail([3, 2, 0, 4]) as any;
          list.next.next.next = list?.next;
          return list;
        })(),
        ret: 2,
      },
      {
        arg1: (() => {
          const list = createListTail([1, 2]) as any;
          list.next.next = list;
          return list;
        })(),
        ret: 1,
      },
      {
        arg1: createListTail([1]),
        ret: null,
      },
    ];
    let examples = EXAMPLE();
    beforeEach(() => {
      examples = EXAMPLE();
    });

    it("使用哈希", function () {
      examples.forEach((example) => {
        const ret = detectCycle(example.arg1);
        assert.deepStrictEqual(ret && ret.val, example.ret);
      });
    });
    it("快慢指针", function () {
      examples.forEach((example) => {
        const ret = detectCycle2(example.arg1);
        assert.deepStrictEqual(ret && ret.val, example.ret);
      });
    });
  });
  describe("160.相交链表", function () {
    const EXAMPLE = () => {
      const list1 = createListTail([1, 2, 4]);
      const list2 = createListTail([3]);
      list2!.next = list1!.next;

      const list3 = createListTail([1, 2, 3]);
      const list4 = createListTail([4, 5]);

      return [
        {
          arg1: list1,
          arg2: list2,
          ret: 2,
        },
        {
          arg1: list3,
          arg2: list4,
          ret: null,
        },
      ];
    };
    let examples = EXAMPLE();
    beforeEach(() => {
      examples = EXAMPLE();
    });

    it("使用哈希", function () {
      examples.forEach((example) => {
        const ret = getIntersectionNode(example.arg1, example.arg2);
        assert.deepStrictEqual(ret && ret.val, example.ret);
      });
    });
    it("双指针", function () {
      examples.forEach((example) => {
        const ret = getIntersectionNode2(example.arg1, example.arg2);
        assert.deepStrictEqual(ret && ret.val, example.ret);
      });
    });
  });
  describe("460.LFU 缓存", function () {
    it("链表", function () {
      const lfu = new LFUCache(2);
      lfu.put(1, 1);
      lfu.put(2, 2);
      assert.strictEqual(lfu.get(1), 1);
      lfu.put(3, 3);
      assert.strictEqual(lfu.get(2), -1);
      assert.strictEqual(lfu.get(3), 3);
      lfu.put(4, 4);
      assert.strictEqual(lfu.get(1), -1);
      assert.strictEqual(lfu.get(3), 3);
      assert.strictEqual(lfu.get(4), 4);
    });
  });
  describe("707.设计链表", function () {
    it("链表", function () {
      const linkedList = new MyLinkedList();
      linkedList.addAtHead(1);
      linkedList.addAtTail(3);
      linkedList.addAtIndex(1, 2);
      assert.strictEqual(linkedList.get(1), 2); //返回2
      linkedList.deleteAtIndex(1);
      assert.strictEqual(linkedList.get(1), 3); //返回2
    });
  });
});
