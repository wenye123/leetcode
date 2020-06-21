/**
 * https://leetcode-cn.com/problems/valid-parentheses/
 */

const map = new Map([
  ["(", ")"],
  ["[", "]"],
  ["{", "}"],
]);

function isValid(s: string) {
  if (s === "") return true;

  const stack: string[] = [];
  stack.push(s[0]);

  for (let i = 1; i < s.length; i++) {
    const top = stack[stack.length - 1];
    if (map.get(top) === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.length === 0;
}

console.log(isValid("{[]}"));
console.log(isValid("{[]"));
