import { assert } from "chai";
import { MaxHeap, MinHeap } from "../../src/base/Heap";

describe("堆", function () {
  it("小顶堆", function () {
    const heap = new MinHeap();
    heap.push(5);
    heap.push(1);
    heap.push(7);
    assert.strictEqual(heap.size, 3);
    assert.strictEqual(heap.peek(), 1);
    assert.strictEqual(heap.pop(), 1);
    assert.strictEqual(heap.pop(), 5);
    assert.strictEqual(heap.pop(), 7);
  });
  it("大顶堆", function () {
    const heap = new MaxHeap();
    heap.push(5);
    heap.push(1);
    heap.push(7);
    assert.strictEqual(heap.size, 3);
    assert.strictEqual(heap.peek(), 7);
    assert.strictEqual(heap.pop(), 7);
    assert.strictEqual(heap.pop(), 5);
    assert.strictEqual(heap.pop(), 1);
  });
});
