/**
 * https://leetcode.cn/problems/valid-anagram/
 */

export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const map: Record<string, number> = {};
  for (let i = 0; i < s.length; i++) {
    const sw = s[i],
      tw = t[i];
    // 一个+1
    if (map[sw] === undefined) {
      map[sw] = 1;
    } else {
      map[sw]++;
    }
    // 一个-1
    if (map[tw] === undefined) {
      map[tw] = -1;
    } else {
      map[tw]--;
    }
  }

  // 只要最后值不为0
  for (let key in map) {
    if (map[key] !== 0) return false;
  }
  return true;
}
