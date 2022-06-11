import assert from "assert";
import { createTree } from "../../src/base/Tree";
import { maxDepth, maxDepthByRecursive } from "../../src/leetcode/数据结构-树/104. 二叉树的最大深度";
import { invertTree, invertTreeByRecursive } from "../../src/leetcode/数据结构-树/226. 翻转二叉树";

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
  describe("226. 翻转二叉树", function () {
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
});
