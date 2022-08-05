/**
 * https://leetcode.cn/problems/lru-cache/
 *
 * LRU缓存指的就是按照顺序 最近未使用删除
 *   新数据插入链表头部
 *   如果缓存命中 则将数据移到链表头部
 *   链表满时候 将链表尾部的去掉
 *
 * 因为get和put都需要O(1) 所以只能采用哈希表来做
 *
 * 例子:
 *   最大3个数 值: [1,2,3]
 *   访问顺序: 1 1 1 2 3
 *   新增值时需要删除的值为1 因为最近访问了3和2 1是最早访问的
 */

/**
 * 使用map实现:
 *  相比较链表的实现是反过来的 数据尾插 删除头部
 */
export class LRUCache {
  private capacity: number; // 容量
  private map: Map<number, number>; // 哈希

  constructor(capacity: number) {
    this.capacity = capacity;
    this.map = new Map();
  }

  get(key: number): number {
    // 命中缓存则删除后重新添加到尾部
    if (this.map.has(key)) {
      const value = this.map.get(key);
      this.map.delete(key);
      this.map.set(key, value!);
      return value!;
    }
    // 没有命中则返回-1
    return -1;
  }

  put(key: number, value: number): void {
    if (this.capacity === 0) return;
    if (this.map.has(key)) {
      // 如果缓存存在则变更内容 也是先删除后添加新值
      this.map.delete(key);
      this.map.set(key, value);
    } else {
      // 如果缓存不存在则添加 先判断超过容量要先移除头部
      if (this.map.size >= this.capacity) {
        const key = this.map.keys().next().value;
        this.map.delete(key);
      }
      this.map.set(key, value);
    }
  }
  // 为了测试而写的方法
  _getMap() {
    return this.map;
  }
}
