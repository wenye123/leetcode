/**
 * https://leetcode-cn.com/problems/intersection-of-two-arrays/
 */

function intersection(nums1: number[], nums2: number[]) {
  const map = new Map();
  const arr: number[] = [];
  for (let item of nums1) {
    map.set(item, 1);
  }
  for (let item of nums2) {
    if (map.get(item) !== undefined) {
      arr.push(item);
      map.set(item, 0);
    }
  }
  return arr;
}

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
