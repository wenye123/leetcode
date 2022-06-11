import assert from "assert";
import { createTree } from "../../src/base/Tree";
import { maxDepth, maxDepthByRecursive } from "../../src/leetcode/数据结构-树/104. 二叉树的最大深度";

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
});
