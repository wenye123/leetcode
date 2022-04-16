/**
 * https://leetcode-cn.com/problems/merge-sorted-array/
 */

/**
 * 从后向前
 * 时间复杂度O(n+m)
 * 空间复杂度O(1)
 */
function merge1(nums1: number[], m: number, nums2: number[], n: number) {
  let i = m - 1,
    j = n - 1,
    p = m + n - 1;
  // 反向将值写入num1
  for (; i >= 0 && j >= 0; p--) {
    if (nums1[i] > nums2[j]) {
      nums1[p] = nums1[i];
      i--;
    } else {
      nums1[p] = nums2[j];
      j--;
    }
  }
  // 将num1和num2剩下的值写入num1
  for (; i >= 0; i--, p--) {
    nums1[p] = nums1[i];
  }
  for (; j >= 0; j--, p--) {
    nums1[p] = nums2[j];
  }
  return nums1;
}

console.log(merge1([1, 3, 5, 0, 0, 0], 3, [2, 4, 6], 3));
