/**
 * https://leetcode.cn/problems/non-overlapping-intervals/
 */

export function eraseOverlapIntervals(intervals: number[][]): number {
  // εζεΊ
  intervals = intervals.sort((a, b) => a[0] - b[0]);

  let count = 0;
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < intervals[i - 1][1]) {
      count++;
      intervals[i][1] = Math.min(intervals[i][1], intervals[i - 1][1]);
    }
  }
  return count;
}
