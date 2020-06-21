/**
 * https://leetcode-cn.com/problems/longest-common-prefix/
 */

function longestCommonPrefix(strs: string[]) {
  if (strs.length === 0) return "";

  let prefix = "";
  for (let i = 0; i < strs[0].length; i++) {
    const s = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] === undefined || strs[j][i] !== s) return prefix;
    }
    prefix += s;
  }
  return prefix;
}

const cs = longestCommonPrefix(["flower", "flow", "flight"]);
console.log(cs);
