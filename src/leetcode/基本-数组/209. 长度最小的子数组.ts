/**
 * https://leetcode.cn/problems/minimum-size-subarray-sum/
 */

/** 暴力破解 */
export function minSubArrayLen(target: number, nums: number[]): number {
  let subLen = Infinity;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum >= target) {
        subLen = Math.min(subLen, j - i + 1);
        break;
      }
    }
  }
  return subLen === Infinity ? 0 : subLen;
}

/**
 * 因为答案需要连续子数组 所以可以使用快慢指针 如果叠加的值超过target 则num-=nums[slow]并且slow++
 */
export function minSubArrayLen2(target: number, nums: number[]): number {
  let subLen = Infinity;
  let slow = 0,
    fast = 0;
  let sum = 0;

  while (fast < nums.length) {
    sum += nums[fast];
    while (sum >= target) {
      subLen = Math.min(subLen, fast - slow + 1);
      sum -= nums[slow];
      slow++;
    }
    fast++;
  }

  return subLen === Infinity ? 0 : subLen;
}
