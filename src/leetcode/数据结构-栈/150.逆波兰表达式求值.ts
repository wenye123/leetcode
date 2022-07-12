/**
 * https://leetcode.cn/problems/evaluate-reverse-polish-notation/
 */

const map: Record<string, true> = {
  "+": true,
  "-": true,
  "/": true,
  "*": true,
};
export function evalRPN(tokens: string[]): number {
  const stack: string[] = [];
  for (let token of tokens) {
    if (map[token] !== true) {
      stack.push(token);
    } else {
      const num1 = Number(stack.pop());
      const num2 = Number(stack.pop());
      let ret = 0;
      if (token === "+") {
        ret = num2 + num1;
      } else if (token === "-") {
        ret = num2 - num1;
      } else if (token === "*") {
        ret = num2 * num1;
      } else if (token === "/") {
        ret = parseInt(String(num2 / num1));
      }
      stack.push(String(ret));
    }
  }
  return Number(stack.pop());
}
