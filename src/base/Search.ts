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
  let lowIndex = 0,
    highIndex = nums.length - 1,
    midIndex;
  while (lowIndex <= highIndex) {
    midIndex = Math.floor((lowIndex + highIndex) / 2);
    if (nums[midIndex] === key) {
      return midIndex;
    } else if (nums[midIndex] < key) {
      lowIndex = midIndex + 1;
    } else {
      highIndex = midIndex - 1;
    }
  }
  return -1;
}

// 斐波那契查找
