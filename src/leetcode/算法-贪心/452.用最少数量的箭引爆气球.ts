/**
 * https://leetcode.cn/problems/minimum-number-of-arrows-to-burst-balloons/
 */

export function findMinArrowShots(points: number[][]): number {
  // 先排序
  points = points.sort((a, b) => a[0] - b[0]);

  let count = 1; // 开始就是一只箭
  for (let i = 1; i < points.length; i++) {
    if (points[i][0] > points[i - 1][1]) {
      // 没有交集则箭+1
      count++;
    } else {
      // 有交集则越找重叠数多的
      points[i][1] = Math.min(points[i][1], points[i - 1][1]);
    }
  }
  return count;
}
