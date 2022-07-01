import { binarySearch, sentrySearch, sentrySearch2 } from "../../src/base/Search";
import { assert } from "chai";
import {
  bubbleSort,
  bubbleSort2,
  fastSort1,
  fastSort2,
  fastSort3,
  insertSort,
  mergeSort1,
  mergeSort2,
  shellSort,
  swapSort,
  swapSort2,
} from "../../src/base/Sort";
import {
  Tree,
  dfsTreeByRecursive,
  dfsTree,
  createTree,
  bfsTreeByRecursive,
  bfsTree,
  dfSearchTreeRecursive,
  dfSearchTree,
  bsSearchTreeByRecursive,
  bfSearchTree,
} from "../../src/base/Tree";
import { createListHead, createListTail, traversalList } from "../../src/base/List";
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
  describe.only("递归", function () {
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
  describe("查找", function () {
    it("线性查找-无哨兵查找", function () {
      let ret = sentrySearch([3, 5, 7], 7);
      assert.strictEqual(ret, 2);
      ret = sentrySearch([3, 5, 7], 1);
      assert.strictEqual(ret, -1);
    });

    it("线性查找-有哨兵查找", function () {
      let ret = sentrySearch2([3, 5, 7], 7);
      assert.strictEqual(ret, 2);
      ret = sentrySearch2([3, 5, 7], 1);
      assert.strictEqual(ret, -1);
    });

    it("有序查找-折半查找", function () {
      const ret = binarySearch([1, 2, 3, 4], 3);
      assert.strictEqual(ret, 2);
    });
  });
  describe("排序", function () {
    let nums: number[] = [];
    let sortNums = [1, 2, 3, 4, 6, 8, 9];
    beforeEach(() => {
      nums = [6, 3, 1, 8, 4, 2, 9];
    });

    it("简单算法-交换排序", function () {
      swapSort(nums);
      assert.deepStrictEqual(nums, sortNums);
    });
    it("简单算法-简单选择排序(交换排序改进版)", function () {
      swapSort2(nums);
      assert.deepStrictEqual(nums, sortNums);
    });
    it("简单算法-冒泡排序", function () {
      bubbleSort(nums);
      assert.deepStrictEqual(nums, sortNums);
    });
    it("简单算法-冒泡排序改进版", function () {
      bubbleSort2(nums);
      assert.deepStrictEqual(nums, sortNums);
    });
    it("简单算法-插入排序", function () {
      insertSort(nums);
      assert.deepStrictEqual(nums, sortNums);
    });

    it("改进算法-希尔排序", function () {
      shellSort(nums);
      assert.deepStrictEqual(nums, sortNums);
    });
    it("改进算法-归并排序-递归版", function () {
      const arr = mergeSort1(nums);
      assert.deepStrictEqual(arr, sortNums);
    });
    it("改进算法-归并排序-循环递归版", function () {
      mergeSort2(nums);
      assert.deepStrictEqual(nums, sortNums);
    });
    it("改进算法-快速排序-递归内存版", function () {
      const arr = fastSort1(nums);
      assert.deepStrictEqual(arr, sortNums);
    });
    it("改进算法-快速排序-递归分区版", function () {
      fastSort2(nums);
      assert.deepStrictEqual(nums, sortNums);
    });
    it("改进算法-快速排序-栈循环分区版", function () {
      fastSort3(nums);
      assert.deepStrictEqual(nums, sortNums);
    });
  });
  describe("链表", function () {
    const arr = [1, 2, 3, 4];
    it("头插法", function () {
      const list = createListHead(arr);
      assert.deepStrictEqual(traversalList(list), [1, 4, 3, 2]);
    });
    it("尾插法", function () {
      const list = createListTail(arr);
      assert.deepStrictEqual(traversalList(list), [1, 2, 3, 4]);
    });
  });
  describe("树", function () {
    const cases = [
      {
        arg: [],
        ret: null,
      },
      {
        arg: [1, null, 2, 3, 4, null, null, 5],
        ret: {
          val: 1,
          left: null,
          right: {
            val: 2,
            left: {
              val: 3,
              left: null,
              right: null,
            },
            right: {
              val: 4,
              left: {
                val: 5,
                left: null,
                right: null,
              },
              right: null,
            },
          },
        },
      },
    ];
    /**
     *      a
     *     / \
     *    b   c
     *   / \   \
     *  d  e   f
     *
     * 前序遍历: abdecf
     * 中序遍历: dbeacf
     * 后序遍历: debfca
     */
    const tree: Tree<string> = {
      val: "a",
      left: {
        val: "b",
        left: {
          val: "d",
          left: null,
          right: null,
        },
        right: {
          val: "e",
          left: null,
          right: null,
        },
      },
      right: {
        val: "c",
        left: null,
        right: {
          val: "f",
          left: null,
          right: null,
        },
      },
    };
    const before = ["a", "b", "d", "e", "c", "f"];
    const middle = ["d", "b", "e", "a", "c", "f"];
    const after = ["d", "e", "b", "f", "c", "a"];
    const bfs = ["a", "b", "c", "d", "e", "f"];

    const searchCase = [
      { arg1: tree, arg2: "e", ret: true },
      { arg1: tree, arg2: "g", ret: false },
    ];

    it("生成树", function () {
      cases.forEach((item) => {
        const ret = createTree(item.arg);
        assert.deepStrictEqual(ret, item.ret);
      });
    });
    it("深度优先遍历-递归-前序遍历", function () {
      const arr = dfsTreeByRecursive(tree, "before");
      assert.deepStrictEqual(arr, before);
    });
    it("深度优先遍历-递归-中序遍历", function () {
      const arr = dfsTreeByRecursive(tree, "middle");
      assert.deepStrictEqual(arr, middle);
    });
    it("深度优先遍历-递归-后序遍历", function () {
      const arr = dfsTreeByRecursive(tree, "after");
      assert.deepStrictEqual(arr, after);
    });
    it("深度优先遍历-非递归栈实现-前序遍历", function () {
      const arr = dfsTree(tree, "before");
      assert.deepStrictEqual(arr, before);
    });
    it("深度优先遍历-非递归栈实现-中序遍历", function () {
      const arr = dfsTree(tree, "middle");
      assert.deepStrictEqual(arr, middle);
    });
    it("深度优先遍历-非递归栈实现-后序遍历", function () {
      const arr = dfsTree(tree, "after");
      assert.deepStrictEqual(arr, after);
    });
    it("广度优先遍历-递归", function () {
      const arr = bfsTreeByRecursive(tree);
      assert.deepStrictEqual(arr, bfs);
    });
    it("广度优先遍历-非递归", function () {
      const arr = bfsTree(tree);
      assert.deepStrictEqual(arr, bfs);
    });
    it("深度优先搜索-递归", function () {
      searchCase.forEach((item) => {
        const ret = dfSearchTreeRecursive(item.arg1, item.arg2);
        assert.deepStrictEqual(ret, item.ret);
      });
    });
    it("深度优先搜索-非递归", function () {
      searchCase.forEach((item) => {
        const ret = dfSearchTree(item.arg1, item.arg2);
        assert.deepStrictEqual(ret, item.ret);
      });
    });
    it("广度优先搜索-递归", function () {
      searchCase.forEach((item) => {
        const ret = bsSearchTreeByRecursive(item.arg1, item.arg2);
        assert.deepStrictEqual(ret, item.ret);
      });
    });
    it("广度优先搜索-非递归", function () {
      searchCase.forEach((item) => {
        const ret = bfSearchTree(item.arg1, item.arg2);
        assert.deepStrictEqual(ret, item.ret);
      });
    });
  });
});
