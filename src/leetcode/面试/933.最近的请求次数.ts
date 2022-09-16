/**
 * https://leetcode.cn/problems/number-of-recent-calls/
 */

export class RecentCounter {
  private pings: number[] = [];

  // ping(t: number): number {
  //   this.pings.push(t);
  //   let count = 0;
  //   let bt = t - 3000;
  //   for (let ping of this.pings) {
  //     if (ping >= bt) count++;
  //   }
  //   return count;
  // }

  ping(t: number): number {
    this.pings.push(t);
    while (this.pings[0] < t - 3000) {
      this.pings.shift();
    }
    return this.pings.length;
  }
}
