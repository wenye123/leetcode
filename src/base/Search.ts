/** 查找
 *    静态查找: 查询某个特定的元素是否在查询表中
 *      线性查找
 *      有序查找
 *    动态查找: 查找中插入或删除数据
 *      略
 */

/** 静态查找 - 线性查找 */

// 无哨兵查找
export function sentrySearch(nums: number[], key: number) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === key) {
      return i;
    }
  }
  return -1;
}

// 哨兵查找: 省略了for循环中的一次判断
export function sentrySearch2(nums: number[], key: number) {
  let i = 0,
    j = nums.length;
  nums[j] = key;
  while (nums[i] !== key) {
    i++;
  }
  return i === j ? -1 : i;
}

/** 静态查找 - 有序查找 */

// 折半查找
export function binarySearch(nums: number[], key: number) {
  let low = 0,
    high = nums.length - 1;
  // lowIndex和hignIndex如果有相等逻辑 循环里面需要return相等情况 并且low和hight都要+1-1
  // 否则不专门处理相等逻辑 low和high其中一个要等于mid 最终return left
  while (low <= high) {
    // mid = Math.floor((low + high) / 2); // 可能会溢出
    const mid = low + ((high - low) >> 1);
    if (nums[mid] === key) {
      return mid;
    } else if (nums[mid] < key) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}
