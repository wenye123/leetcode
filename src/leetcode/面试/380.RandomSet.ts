/**
 * https://leetcode.cn/problems/insert-delete-getrandom-o1/
 */

export class RandomizedSet {
  private arr: number[] = [];
  private map = new Map<number, number>();

  insert(val: number): boolean {
    if (this.map.has(val)) return false;
    this.arr.push(val);
    this.map.set(val, this.arr.length - 1); // 存储值的索引方便删除
    return true;
  }

  remove(val: number): boolean {
    if (this.map.has(val) === false) return false;
    // 删除arr的值(采用小技巧删除数组的值: 将最后元素的值赋值给要删除的元素 然后pop掉最后元素)
    const index = this.map.get(val)!;
    const lastVal = this.arr[this.arr.length - 1];
    this.arr[index] = lastVal;
    this.arr.pop();
    this.map.set(lastVal, index); // 更新最后元素值的索引
    // 删除map中的值
    this.map.delete(val);
    return true;
  }

  getRandom(): number {
    const randomIndex = Math.floor(Math.random() * this.arr.length);
    return this.arr[randomIndex];
  }
}
