import { assert } from "chai";
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
  dfsPrevTree,
} from "../../src/base/Tree";

describe("基础", function () {
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
    const prev = ["a", "b", "d", "e", "c", "f"];
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
      const arr = dfsTreeByRecursive(tree, "prev");
      assert.deepStrictEqual(arr, prev);
    });
    it("深度优先遍历-递归-中序遍历", function () {
      const arr = dfsTreeByRecursive(tree, "middle");
      assert.deepStrictEqual(arr, middle);
    });
    it("深度优先遍历-递归-后序遍历", function () {
      const arr = dfsTreeByRecursive(tree, "after");
      assert.deepStrictEqual(arr, after);
    });
    it("深度优先遍历-非递归前序遍历简单版", function () {
      const arr = dfsPrevTree(tree);
      assert.deepStrictEqual(arr, prev);
    });
    it("深度优先遍历-非递归栈实现-前序遍历", function () {
      const arr = dfsTree(tree, "prev");
      assert.deepStrictEqual(arr, prev);
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
