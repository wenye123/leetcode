/**
 * https://leetcode.cn/problems/ransom-note/
 */

export function canConstruct(ransomNote: string, magazine: string): boolean {
  const map: Record<string, number> = {};

  for (let w of magazine) {
    if (map[w] === undefined) {
      map[w] = 1;
    } else {
      map[w]++;
    }
  }

  for (let w of ransomNote) {
    if (map[w] && map[w] > 0) {
      map[w]--;
    } else {
      return false;
    }
  }

  return true;
}
