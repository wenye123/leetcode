/**
 * https://leetcode.cn/problems/task-scheduler/
 */

/**
 * 暴力解法
 */
interface TaskInfo {
  waitCount: number; // 该任务需要等待的次数
  count: number; // 任务剩余次数
}
export function leastInterval(tasks: string[], n: number): number {
  let taskInfos: Record<string, TaskInfo> = {};

  // 遍历得到任务信息
  for (let task of tasks) {
    if (!taskInfos[task]) {
      taskInfos[task] = {
        waitCount: 0,
        count: 1,
      };
    } else {
      taskInfos[task].count++;
    }
  }

  let taskLen = tasks.length;
  let count = 0;
  // 执行任务
  while (taskLen > 0) {
    // 获取一个任务 需等待次数为0 且数量 > 0 如果获取不到则等待
    const canTasks = Object.keys(taskInfos).filter(
      (task) => taskInfos[task].waitCount === 0 && taskInfos[task].count > 0,
    );
    if (canTasks.length === 0) {
      count++;
      // 所有等待任务减一
      Object.keys(taskInfos).forEach((item) => {
        if (taskInfos[item].waitCount > 0 && taskInfos[item].count > 0) taskInfos[item].waitCount--;
      });
    } else {
      // 获取剩余数量最多的作为任务
      const task = canTasks.sort((a, b) => taskInfos[b!].count - taskInfos[a!].count)[0]!;

      // 找到任务则标记为等待状态 数量-1
      taskInfos[task].waitCount = n;
      taskInfos[task].count--;
      // 其他任务等待数量需要减一
      Object.keys(taskInfos).forEach((item) => {
        if (item !== task && taskInfos[item].waitCount > 0 && taskInfos[item].count > 0) {
          taskInfos[item].waitCount--;
        }
      });

      // 处理任务
      taskLen--;
      count++;
    }
  }

  return count;
}
