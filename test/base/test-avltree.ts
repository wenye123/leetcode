import { assert } from "chai";
import {
  createAVLTree,
  findAVLTressNode,
  getNextAVLTressNode,
  getPrevAVLTreeNode,
  insertAVLTreeNode,
  removeAVLTreeNode,
  traverseAVLTree,
} from "../../src/base/AVLTree";
import { createBSTree } from "../../src/base/BinarySortTree";
console.log(createBSTree.name);

describe("平衡二叉树", function () {
  const DATA = () => ({
    rrArr: [66, 60, 77, 75, 88, 99],
    rrTree: JSON.parse(
      `{"depth":3,"val":77,"left":{"depth":2,"val":66,"left":{"depth":1,"val":60,"left":null,"right":null},"right":{"depth":1,"val":75,"left":null,"right":null}},"right":{"depth":2,"val":88,"left":null,"right":{"depth":1,"val":99,"left":null,"right":null}}}`,
    ),
    llArr: [66, 60, 77, 55, 61, 43],
    llTree: JSON.parse(
      `{"val":60,"left":{"val":55,"left":{"val":43,"left":null,"right":null,"depth":1},"right":null,"depth":2},"right":{"val":66,"left":{"val":61,"left":null,"right":null,"depth":1},"right":{"val":77,"left":null,"right":null,"depth":1},"depth":2},"depth":3}`,
    ),
    rlArr: [66, 60, 77, 75, 88, 76],
    rlTree: JSON.parse(
      `{"val":75,"left":{"val":66,"left":{"val":60,"left":null,"right":null,"depth":1},"right":null,"depth":2},"right":{"val":77,"left":{"val":76,"left":null,"right":null,"depth":1},"right":{"val":88,"left":null,"right":null,"depth":1},"depth":2},"depth":3}`,
    ),
    lrArr: [66, 55, 70, 50, 61, 57],
    lrTree: JSON.parse(
      `{"val":61,"left":{"val":55,"left":{"val":50,"left":null,"right":null,"depth":1},"right":{"val":57,"left":null,"right":null,"depth":1},"depth":2},"right":{"val":66,"left":null,"right":{"val":70,"left":null,"right":null,"depth":1},"depth":2},"depth":3}`,
    ),
    rrTreeRet: [60, 66, 75, 77, 88, 99],
    removeRRTree: JSON.parse(
      `{"depth":3,"val":66,"left":{"depth":1,"val":60,"left":null,"right":null},"right":{"depth":2,"val":77,"left":{"depth":1,"val":75,"left":null,"right":null},"right":null}}`,
    ),
    removeLLTree: JSON.parse(
      `{"val":66,"left":{"val":60,"left":null,"right":{"val":61,"left":null,"right":null,"depth":1},"depth":2},"right":{"val":77,"left":null,"right":null,"depth":1},"depth":3}`,
    ),
    removeLRTree: JSON.parse(
      `{"val":57,"left":{"val":55,"left":{"val":50,"left":null,"right":null,"depth":1},"right":{"val":56,"left":null,"right":null,"depth":1},"depth":2},"right":{"val":61,"left":null,"right":{"val":66,"left":null,"right":null,"depth":1},"depth":2},"depth":3}`,
    ),
    remoeRLTree: JSON.parse(
      `{"val":76,"left":{"val":75,"left":{"val":66,"left":null,"right":null,"depth":1},"right":null,"depth":2},"right":{"val":77,"left":{"val":76.5,"left":null,"right":null,"depth":1},"right":{"val":88,"left":null,"right":null,"depth":1},"depth":2},"depth":3}`,
    ),
  });

  let data = DATA();
  beforeEach(() => (data = DATA()));

  it("新增左旋", function () {
    const ret = createAVLTree(data.rrArr);
    assert.deepStrictEqual(ret, data.rrTree);
  });
  it("新增右旋", function () {
    const ret = createAVLTree(data.llArr);
    assert.deepStrictEqual(ret, data.llTree);
  });
  it("新增左旋再右旋", function () {
    const ret = createAVLTree(data.rlArr);
    assert.deepStrictEqual(ret, data.rlTree);
  });
  it("新增右旋再左旋", function () {
    const ret = createAVLTree(data.lrArr);
    assert.deepStrictEqual(ret, data.lrTree);
  });
  it("遍历平衡二叉树", function () {
    const ret = traverseAVLTree(data.rrTree);
    assert.deepStrictEqual(ret, data.rrTreeRet);
  });
  it("查找树节点", function () {
    const ret = findAVLTressNode(data.rrTree, 75);
    assert.deepStrictEqual(ret, data.rrTree.left.right);
  });
  it("获取前驱节点", function () {
    const ret = getPrevAVLTreeNode(data.rrTree);
    assert.deepStrictEqual(ret, data.rrTree.left.right);
  });
  it("获取后继节点", function () {
    const ret = getNextAVLTressNode(data.rrTree);
    assert.deepStrictEqual(ret, data.rrTree.right);
  });
  it("删除右旋", function () {
    removeAVLTreeNode(data.rrTree, 88);
    const ret = removeAVLTreeNode(data.rrTree, 99);
    assert.deepStrictEqual(ret, data.removeRRTree);
  });
  it("删除左旋", function () {
    removeAVLTreeNode(data.llTree, 43);
    const ret = removeAVLTreeNode(data.llTree, 55);
    assert.deepStrictEqual(ret, data.removeLLTree);
  });
  it("删除左旋再右旋", function () {
    insertAVLTreeNode(data.lrTree, 56);
    const ret = removeAVLTreeNode(data.lrTree, 70);
    assert.deepStrictEqual(ret, data.removeLRTree);
  });
  it("删除右旋再左旋", function () {
    insertAVLTreeNode(data.rlTree, 76.5);
    const ret = removeAVLTreeNode(data.rlTree, 60);
    assert.deepStrictEqual(ret, data.remoeRLTree);
  });
});
