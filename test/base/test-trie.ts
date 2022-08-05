import { assert } from "chai";
import { Trie } from "../../src/base/Trie";

describe("字典树", function () {
  it("map实现", function () {
    const trie = new Trie();
    trie.insert("apple");
    assert.strictEqual(trie.search("apple"), true);
    assert.strictEqual(trie.search("app"), false);
    assert.strictEqual(trie.startsWith("app"), true);
    trie.insert("app");
    assert.strictEqual(trie.search("app"), true);
  });
});
