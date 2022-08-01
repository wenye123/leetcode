/**
 * https://leetcode-cn.com/problems/intersection-of-two-arrays/
 */

export function intersection(nums1: number[], nums2: number[]) {
  const map: Record<string, boolean> = {};
  const arr: number[] = [];

  for (let i = 0; i < nums1.length; i++) {
    map[nums1[i]] = true;
  }

  for (let i = 0; i < nums2.length; i++) {
    if (map[nums2[i]] === true) {
      arr.push(nums2[i]);
      map[nums2[i]] = false; // 防止重复推送
    }
  }

  return arr;
}
