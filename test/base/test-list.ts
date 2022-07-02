import { assert } from "chai";
import { createListHead, createListTail, traversalList } from "../../src/base/List";

describe("基础", function () {
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
});
