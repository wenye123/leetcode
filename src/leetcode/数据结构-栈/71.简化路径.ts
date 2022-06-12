/**
 * https://leetcode.cn/problems/simplify-path/
 */

/** 通过栈 */
export function simplifyPath(path: string): string {
  const stack: string[] = [];
  const arr = path.split("/");

  for (let item of arr) {
    if (item !== "" && item !== "." && item !== "..") {
      stack.push(item);
    }
    if (item === "..") {
      stack.pop();
    }
  }

  return "/" + stack.join("/");
}
