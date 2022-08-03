/**
 * https://leetcode.cn/problems/ipo/
 */

import { MaxHeap } from "../../../base/Heap";

/**
 * 贪心 每次都找能做的最大项目做
 * leetcode上会超时
 */
// export function findMaximizedCapital(k: number, w: number, profits: number[], capital: number[]): number {
//   let sum = w;
//   // 能做的项目数目
//   for (let i = 0; i < k; i++) {
//     // 获取当前资本下能做的最赚钱的项目
//     const canDoProjects: Array<{ index: number; profit: number }> = [];
//     for (let i = 0; i < capital.length; i++) {
//       if (w >= capital[i]) {
//         canDoProjects.push({ index: i, profit: profits[i] });
//       }
//     }
//     if (canDoProjects.length === 0) return sum; // 没有项目可做直接返回
//     const maxProfitProject = canDoProjects.sort((a, b) => b.profit - a.profit)[0];
//     // 做完项目 本金增加 总资本增加
//     sum += maxProfitProject.profit;
//     w += maxProfitProject.profit;
//     // 移除掉已经做完的项目
//     profits.splice(maxProfitProject.index, 1);
//     capital.splice(maxProfitProject.index, 1);
//     // profits[maxProfitProject.index] = -Infinity;
//     // capital[maxProfitProject.index] = Infinity;
//   }
//   return sum;
// }

/**
 * 用大顶堆保存可做的最大利润的项目
 * 用排序解决重复的问题
 */
export function findMaximizedCapital(k: number, w: number, profits: number[], capital: number[]): number {
  // 将项目整合成一个数组
  let projects = capital.map((v, i) => [v, profits[i]]);
  projects = projects.sort((a, b) => a[0] - b[0]); // 按照启动资金排序为了不重复添加已做项目 不然每次都要重新获取一次还会重复
  // 大顶堆存储项目利润
  const maxHeap = new MaxHeap();
  // 添加过的项目索引
  let currProjectIndex = 0;

  // 项目次数
  for (let i = 0; i < k; i++) {
    // 获取满足启动资金的项目
    for (let j = currProjectIndex; j < profits.length; j++) {
      if (projects[j][0] <= w) {
        // 如果满足启动资金则添加到大顶堆 添加索引+1
        maxHeap.push(projects[j][1]);
        currProjectIndex++;
      } else {
        // 否则说明当前资金不足以启动资金 直接跳出循环
        break;
      }
    }

    // 如果有项目做完增加启动资金
    if (maxHeap.size > 0) {
      w += maxHeap.pop()!;
    } else {
      // 没有项目做说明启动资金不够了 直接退出
      return w;
    }
  }

  return w;
}
