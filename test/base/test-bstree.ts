import {
  createBSTree,
  getMaxBSTreeNode,
  getMinBSTreeNode,
  getNextBSTressNode,
  getPrevBSTreeNode,
  findBSTressNode,
  insertBSTreeNode,
  removeBSTreeNode,
  traverseBSTree,
} from "../../src/base/BinarySortTree";
import { assert } from "chai";

describe("二叉排序树", function () {
  const TREE = () => ({
    val: 8,
    left: {
      val: 3,
      left: { val: 1, left: null, right: null },
      right: { val: 6, left: { val: 4, left: null, right: null }, right: { val: 7, left: null, right: null } },
    },
    right: {
      val: 10,
      left: { val: 9, left: null, right: null },
      right: { val: 14, left: { val: 13, left: null, right: null }, right: null },
    },
  });
  let tree = TREE();
  const arr = [8, 3, 10, 1, 6, 14, 4, 7, 13, 9];
  const sortArr = [1, 3, 4, 6, 7, 8, 9, 10, 13, 14];
  const searchCases = [
    { arg1: tree, arg2: 6, ret: tree.left.right },
    { arg1: tree, arg2: 20, ret: null },
  ];
  beforeEach(() => (tree = TREE()));

  it("新增节点", function () {
    let root = insertBSTreeNode(null, 8);
    assert.strictEqual(root?.val, 8);
    root = insertBSTreeNode(root, 3);
    assert.strictEqual(root?.left?.val, 3);
    root = insertBSTreeNode(root, 4);
    assert.strictEqual(root?.left?.right?.val, 4);
  });
  it("创建二叉排序树", function () {
    const ret = createBSTree(arr);
    assert.deepStrictEqual(ret, tree);
  });
  it("遍历二叉排序树", function () {
    const ret = traverseBSTree(tree);
    assert.deepStrictEqual(ret, sortArr);
  });
  it("查找节点", function () {
    searchCases.forEach((item) => {
      const ret = findBSTressNode(item.arg1, item.arg2);
      assert.deepStrictEqual(ret, item.ret);
    });
  });
  it("获取树的最小节点", function () {
    const node = getMinBSTreeNode(tree);
    assert.strictEqual(node?.val, 1);
  });
  it("获取树的最大节点", function () {
    const node = getMaxBSTreeNode(tree);
    assert.strictEqual(node?.val, 14);
  });
  it("获取前驱节点", function () {
    const node = getPrevBSTreeNode(tree);
    assert.strictEqual(node?.val, 7);
  });
  it("获取后驱节点", function () {
    const node = getNextBSTressNode(tree);
    assert.strictEqual(node?.val, 9);
  });
  describe("删除节点", function () {
    let tree = TREE();
    beforeEach(() => (tree = TREE()));
    it("删除叶子节点", function () {
      const root = removeBSTreeNode(tree, 7);
      assert.strictEqual(root?.left?.right?.right, null);
    });
    it("删除节点只有左子树", function () {
      const root = removeBSTreeNode(tree, 14);
      assert.strictEqual(root?.right?.right?.val, 13);
    });
    it("删除节点只有左子树", function () {
      // 先把4删除 那么6节点只剩右子树
      removeBSTreeNode(tree, 4);
      const root = removeBSTreeNode(tree, 6);
      assert.strictEqual(root?.left?.right?.val, 7);
    });
    it("删除节点既有左子树也有右子树", function () {
      const root = removeBSTreeNode(tree, 3);
      assert.strictEqual(root?.left?.val, 4);
      assert.strictEqual(root?.left?.right?.left, null);
    });
  });
});
