import assert from "assert";
import { createTree } from "../../src/base/Tree";
import { isSameTree } from "../../src/leetcode/数据结构-树/100.相同的树";
import { isSymmetric } from "../../src/leetcode/数据结构-树/101.对称二叉树";
import { maxDepth, maxDepthByRecursive } from "../../src/leetcode/数据结构-树/104.二叉树的最大深度";
import { invertTree, invertTreeByRecursive } from "../../src/leetcode/数据结构-树/226. 翻转二叉树";
import { inorderTraversal, inorderTraversal2 } from "../../src/leetcode/数据结构-树/94.二叉树的中序遍历";

describe("树", function () {
  describe("104.二叉树的最大深度", function () {
    const examples = [
      {
        arg: createTree([]),
        ret: 0,
      },
      {
        arg: createTree([1, null, 2, 3, 4, null, null, 5]),
        ret: 4,
      },
    ];

    it("通过栈", function () {
      examples.forEach((example) => {
        const ret = maxDepth(example.arg);
        assert.strictEqual(ret, example.ret);
      });
    });
    it("通过递归", function () {
      examples.forEach((example) => {
        const ret = maxDepthByRecursive(example.arg);
        assert.strictEqual(ret, example.ret);
      });
    });
  });
  describe("226.翻转二叉树", function () {
    const EXAMPLES = () => [
      {
        arg: createTree([]),
        ret: createTree([]),
      },
      {
        arg: createTree([4, 2, 7, 1, 3, 6, 9]),
        ret: createTree([4, 7, 2, 9, 6, 3, 1]),
      },
    ];
    let examples = EXAMPLES();
    beforeEach(() => {
      examples = EXAMPLES();
    });

    it("通过栈", function () {
      examples.forEach((example) => {
        const ret = invertTree(example.arg);
        assert.deepStrictEqual(ret, example.ret);
      });
    });
    it("递归", function () {
      examples.forEach((example) => {
        const ret = invertTreeByRecursive(example.arg);
        assert.deepStrictEqual(ret, example.ret);
      });
    });
  });
  describe("94.二叉树的中序遍历", function () {
    const EXAMPLES = () => [
      {
        arg: createTree([1, null, 2, 3]),
        ret: [1, 3, 2],
      },
      {
        arg: createTree([]),
        ret: [],
      },
    ];
    let examples = EXAMPLES();
    beforeEach(() => {
      examples = EXAMPLES();
    });

    it("递归", function () {
      examples.forEach((example) => {
        const ret = inorderTraversal(example.arg);
        assert.deepStrictEqual(ret, example.ret);
      });
    });
    it("循环", function () {
      examples.forEach((example) => {
        const ret = inorderTraversal2(example.arg);
        assert.deepStrictEqual(ret, example.ret);
      });
    });
  });
  describe("100.相同的树", function () {
    const EXAMPLES = () => [
      {
        arg1: createTree([1, 2, 3]),
        arg2: createTree([1, 2, 3]),
        ret: true,
      },
      {
        arg1: createTree([1, 2]),
        arg2: createTree([1, null, 2]),
        ret: false,
      },
      {
        arg1: createTree([1, 2, 1]),
        arg2: createTree([1, 1, 2]),
        ret: false,
      },
    ];
    let examples = EXAMPLES();
    beforeEach(() => {
      examples = EXAMPLES();
    });

    it("深度优先遍历-递归", function () {
      examples.forEach((example) => {
        const ret = isSameTree(example.arg1, example.arg2);
        assert.deepStrictEqual(ret, example.ret);
      });
    });
  });
  describe("101.对称二叉树", function () {
    const EXAMPLES = () => [
      {
        arg1: createTree([1, 2, 2, 3, 4, 4, 3]),
        ret: true,
      },
      {
        arg1: createTree([1, 2, 2, null, 3, null, 3]),
        ret: false,
      },
    ];
    let examples = EXAMPLES();
    beforeEach(() => {
      examples = EXAMPLES();
    });

    it("深度优先遍历-递归", function () {
      examples.forEach((example) => {
        const ret = isSymmetric(example.arg1);
        assert.deepStrictEqual(ret, example.ret);
      });
    });
  });
});
