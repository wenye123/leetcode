/**
 * https://leetcode-cn.com/problems/first-bad-version/
 */

function solution(versions: number[]) {
  let left = 0,
    right = versions.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (isBadVersion(versions[mid])) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

function isBadVersion(version: number) {
  const map: any = {
    3: false,
    4: true,
    5: true,
  };
  return map[version];
}

console.log(solution([3, 4, 5]));
