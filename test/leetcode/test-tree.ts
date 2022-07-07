import assert from "assert";
import { createTree, dfsTree } from "../../src/base/Tree";
import { isSameTree } from "../../src/leetcode/数据结构-树/100.相同的树";
import { isSymmetric } from "../../src/leetcode/数据结构-树/101.对称二叉树";
import { maxDepth, maxDepthByRecursive } from "../../src/leetcode/数据结构-树/104.二叉树的最大深度";
import { minDepth } from "../../src/leetcode/数据结构-树/111.二叉树的最小深度";
import { invertTree, invertTreeByRecursive } from "../../src/leetcode/数据结构-树/226. 翻转二叉树";
import { inorderTraversal, inorderTraversal2 } from "../../src/leetcode/数据结构-树/94.二叉树的中序遍历";
import { flatten } from "../../src/leetcode/数据结构-树/114.二叉树展开为链表";
import { mergeTrees } from "../../src/leetcode/数据结构-树/617.合并二叉树";
import { lowestCommonAncestor } from "../../src/leetcode/数据结构-树/236.二叉树的最近公共祖先";
import { diameterOfBinaryTree } from "../../src/leetcode/数据结构-树/543.二叉树的直径";
import { isSubtree } from "../../src/leetcode/数据结构-树/572.另一棵树的子树";
import { isBalanced } from "../../src/leetcode/数据结构-树/110.平衡二叉树";
import { countNodes } from "../../src/leetcode/数据结构-树/222.完全二叉树的节点个数";
import { binaryTreePaths } from "../../src/leetcode/数据结构-树/257.二叉树的所有路径";

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
  describe("111.二叉树的最小深度", function () {
    let examples = [
      {
        arg1: createTree([3, 9, 20, null, null, 15, 7]),
        ret: 2,
      },
      {
        arg1: createTree([2, null, 3, null, 4, null, 5, null, 6]),
        ret: 5,
      },
    ];
    it("深度优先遍历-递归", function () {
      examples.forEach((example) => {
        const ret = minDepth(example.arg1);
        assert.deepStrictEqual(ret, example.ret);
      });
    });
    it("深度优先遍历-循环", function () {
      examples.forEach((example) => {
        const ret = minDepth(example.arg1);
        assert.deepStrictEqual(ret, example.ret);
      });
    });
    it("广度优先遍历-循环", function () {
      examples.forEach((example) => {
        const ret = minDepth(example.arg1);
        assert.deepStrictEqual(ret, example.ret);
      });
    });
    it("广度优先遍历-递归", function () {
      examples.forEach((example) => {
        const ret = minDepth(example.arg1);
        assert.deepStrictEqual(ret, example.ret);
      });
    });
  });
  describe("114.二叉树展开为链表", function () {
    let examples = [
      {
        arg1: createTree([1, 2, 5, 3, 4, null, 6]),
        ret: dfsTree(createTree([1, null, 2, null, 3, null, 4, null, 5, null, 6]), "prev"),
      },
      {
        arg1: createTree([]),
        ret: dfsTree(createTree([]), "prev"),
      },
    ];
    it("深度优先遍历", function () {
      examples.forEach((example) => {
        flatten(example.arg1)!;
        assert.deepStrictEqual(dfsTree(example.arg1, "prev"), example.ret);
      });
    });
  });
  describe("617.合并二叉树", function () {
    const EXAMPLES = () => [
      {
        arg1: createTree([1, 3, 2, 5]),
        arg2: createTree([2, 1, 3, null, 4, null, 7]),
        ret: dfsTree(createTree([3, 4, 5, 5, 4, null, 7]), "prev"),
      },
      {
        arg1: createTree([1]),
        arg2: createTree([1, 2]),
        ret: dfsTree(createTree([2, 2]), "prev"),
      },
    ];
    let examples = EXAMPLES();
    beforeEach(() => (examples = EXAMPLES()));
    it("深度优先遍历-递归", function () {
      examples.forEach((example) => {
        mergeTrees(example.arg1, example.arg2)!;
        assert.deepStrictEqual(dfsTree(example.arg1, "prev"), example.ret);
      });
    });
  });
  describe("236.二叉树的最近公共祖先", function () {
    const EXAMPLES = () => {
      const item1 = () => {
        const arg1 = createTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
        const arg2 = arg1!.left!;
        const arg3 = arg1!.left!.right!.right!;
        const ret = arg2;
        return { arg1, arg2, arg3, ret };
      };
      return [item1()];
    };
    let examples = EXAMPLES();
    beforeEach(() => (examples = EXAMPLES()));

    it("递归", function () {
      examples.forEach((example) => {
        const ret = lowestCommonAncestor(example.arg1, example.arg2, example.arg3)!;
        assert.deepStrictEqual(ret, example.ret);
      });
    });
  });
  describe("543.二叉树的直径", function () {
    const EXAMPLES = () => [
      {
        arg1: createTree([1, 2, 3, null, null, 4, 5]),
        ret: 3,
      },
    ];
    let examples = EXAMPLES();
    beforeEach(() => (examples = EXAMPLES()));

    it("递归", function () {
      examples.forEach((example) => {
        const ret = diameterOfBinaryTree(example.arg1)!;
        assert.deepStrictEqual(ret, example.ret);
      });
    });
  });
  describe("572.另一棵树的子树", function () {
    const EXAMPLES = () => {
      const tree1 = createTree([1, 2, 3, null, null, 4, 5]);
      return [
        {
          arg1: tree1,
          arg2: tree1!.left!,
          ret: true,
        },
        {
          arg1: createTree([3, 4, 5, 1, 2, null, null, null, null, 0]),
          arg2: createTree([4, 1, 2]),
          ret: false,
        },
      ];
    };
    let examples = EXAMPLES();
    it("递归", function () {
      examples.forEach((example) => {
        const ret = isSubtree(example.arg1, example.arg2);
        assert.deepStrictEqual(ret, example.ret);
      });
    });
  });
  describe("110.平衡二叉树", function () {
    let examples = [
      { arg1: createTree([3, 9, 20, null, null, 15, 7]), ret: true },
      { arg1: createTree([1, 2, 2, 3, 3, null, null, 4, 4]), ret: false },
    ];
    it("递归", function () {
      examples.forEach((example) => {
        const ret = isBalanced(example.arg1);
        assert.deepStrictEqual(ret, example.ret);
      });
    });
  });
  describe("222.完全二叉树的节点个数", function () {
    let examples = [
      { arg1: createTree([1, 2, 3, 4, 5, 6]), ret: 6 },
      { arg1: createTree([]), ret: 0 },
    ];
    it("递归", function () {
      examples.forEach((example) => {
        const ret = countNodes(example.arg1);
        assert.deepStrictEqual(ret, example.ret);
      });
    });
  });
  describe("257.二叉树的所有路径", function () {
    let examples = [
      { arg1: createTree([1, 2, 3, null, 5]), ret: ["1->2->5", "1->3"] },
      { arg1: createTree([1]), ret: ["1"] },
    ];
    it("递归", function () {
      examples.forEach((example) => {
        const ret = binaryTreePaths(example.arg1 as any);
        assert.deepStrictEqual(ret, example.ret);
      });
    });
  });
});
