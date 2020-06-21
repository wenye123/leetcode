/**
 * 分治算法
 *  整体思想: 分而治之，搭配递归
 *  适用情况
 *    1. 该问题的规模缩小到一定规模，可以很容易解决
 *    2. 该问题可以分解为若干个规模较小的相同问题，即该问题具有最优子结构性质
 *    3. 利用该问题分解出的子问题的解，可以合并为该问题的解
 *    4. 该问题分解出的各个子问题是相互独立的，即子问题之间不包含公共的子问题
 *    如果不满足第3条件，可以考虑使用贪心和动态规划，第4点不满足可以考虑动态规划
 *
 * 贪心算法
 *  不从整体最优加以考虑，做出的仅是某种意义上的局部最优解，再递推到全局
 *  贪心算法不是对所有问题都能得到整体最优解，但对范围相当广泛的许多问题都能产生接近整体最优解的近似解
 *
 *
 */

/** 最大子序列和 */

/** 分治算法 */
{
  function maxSubArray1(nums: number[], l: number, r: number): number {
    if (l === r) {
      return nums[l];
    }
    if (l === r - 1) {
      return Math.max(nums[l], Math.max(nums[r], nums[l] + nums[r]));
    }

    let mid = Math.floor((l + r) / 2);
    let lmax = maxSubArray1(nums, l, mid - 1);
    let rmax = maxSubArray1(nums, mid + 1, r);

    let mmax = nums[mid]; // 从中间开始计算
    let sum = mmax; // 用来求和
    for (let i = mid - 1; i >= l; i--) {
      sum += nums[i];
      mmax = Math.max(mmax, sum);
    }

    sum = mmax;
    for (let i = mid + 1; i <= r; i++) {
      sum += nums[i];
      mmax = Math.max(mmax, sum);
    }

    return Math.max(lmax, Math.max(rmax, mmax));
  }

  function maxSubArray2(nums: number[], l: number, r: number): number {
    // 只有一个元素则直接返回
    if (l === r) return nums[l];

    // 获取左右部分最大子序列和
    const mid = Math.floor((l + r) / 2);
    const lmax = maxSubArray2(nums, l, mid);
    const rmax = maxSubArray2(nums, mid + 1, r);

    // 获取左部分包含最后一个子元素的最大子序列和
    let leftSubMax = -Infinity;
    let leftSubSum = 0;
    for (let i = mid; i >= l; i--) {
      leftSubSum += nums[i];
      leftSubMax = Math.max(leftSubMax, leftSubSum);
    }

    // 获取右部分包含第一个元素的最大字序列和
    let rightSubMax = -Infinity;
    let rightSubSum = 0;
    for (let i = mid + 1; i <= r; i++) {
      rightSubSum += nums[i];
      rightSubMax = Math.max(rightSubMax, rightSubSum);
    }

    // 返回三者的最大值
    return Math.max(lmax, Math.max(leftSubMax + rightSubMax, rmax));
  }

  const myarr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  console.log(maxSubArray1(myarr, 0, myarr.length - 1));
  console.log(maxSubArray2(myarr, 0, myarr.length - 1));
}

/** 贪心算法 */
{
  function maxSubArray(nums: number[]) {
    let currSum = nums[0];
    let maxSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
      currSum = Math.max(nums[i], currSum + nums[i]);
      maxSum = Math.max(maxSum, currSum);
    }
    return maxSum;
  }
  const myarr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  console.log(maxSubArray(myarr));
}
