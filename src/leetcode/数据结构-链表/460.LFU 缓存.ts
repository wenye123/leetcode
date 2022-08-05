/**
 * https://leetcode.cn/problems/lfu-cache/
 */

/**
 * LFU缓存最不常用的删除
 *
 * 例子:
 *   最大3个数 值: [1,2,3]
 *   访问顺序: 1 1 1 2 2 3
 *   新增值时需要删除的值为3 因为3最访问了一次是最少的
 */

export class LFUCache<T, U> {
  private size: number; // 缓存大小
  private cache: Map<T, U>; // 缓存 key:value
  private cacheCount: Map<T, number>; // 存储计数器 key:count
  private countCache: Map<number, Set<T>>; // 存储相同计数器的key count:Set<key>
  private min: number; // 存储当前最小的计数器 方便O(1)找到最不常用的key

  constructor(capacity: number) {
    this.size = capacity;
    this.cache = new Map();
    this.cacheCount = new Map();
    this.countCache = new Map();
    this.min = 0;
  }

  // 增加次数
  private incrKeyCount(key: T) {
    // 更新cacheCount
    const count = this.cacheCount.get(key)!;
    this.cacheCount.set(key, count + 1);

    // 更新countCache
    // 删除老次数中的key
    const oldKeySet = this.countCache.get(count)!;
    oldKeySet.delete(key);
    this.countCache.set(count, oldKeySet); // 这句可不写 因为set就是引用类型
    // 在新次数中添加key
    const newKeySet = this.countCache.get(count + 1) || new Set();
    newKeySet.add(key);
    this.countCache.set(count + 1, newKeySet);

    // 更新min: 如果最小次数的key用完了 则更新min的值
    if (this.min === count && oldKeySet.size === 0) {
      this.min = count + 1;
    }
  }

  get(key: T): U | -1 {
    if (this.cache.has(key)) {
      // 缓存存在则返回
      const value = this.cache.get(key)!;
      // 更新缓存次数
      this.incrKeyCount(key);
      return value;
    }
    // 否则返回-1
    return -1;
  }

  put(key: T, value: U): void {
    if (this.size === 0) return;
    if (this.cache.has(key)) {
      // 缓存存在 则更新值和次数
      this.cache.set(key, value);
      this.incrKeyCount(key);
    } else {
      // 缓存不存在 判断是否达到缓存大小 是则先删除最不常用的key再新增缓存 否则直接新增缓存
      if (this.cache.size >= this.size) {
        // 获取需要删除的key
        const keySet = this.countCache.get(this.min)!;
        const key = keySet.keys().next().value; // 获取第一个key 因为最先添加 所以满足题目最久未使用
        // 删除key
        this.cache.delete(key);
        this.cacheCount.delete(key);
        keySet.delete(key);
        this.countCache.set(this.min, keySet);
      }
      // 新增缓存
      this.cache.set(key, value);
      // 更新cacheCount
      this.cacheCount.set(key, 1);
      // 更新countCache 在新次数中添加key
      const keySet = this.countCache.get(1) || new Set();
      keySet.add(key);
      this.countCache.set(1, keySet);
      // 更新min
      this.min = 1;
    }
  }
}
