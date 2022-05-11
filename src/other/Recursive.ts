/**
 * 递归 先递后归
 *
 * 尾调用优化:
 *  可以不保留外层函数的调用记录 因此可以节约内存
 *  只能在严格模式下生效 因为正常模式函数内会有两个变量arguments和func.caller
 * 尾递归(高端for循环):
 *  将内部变量改写成参数的形式
 *  由于只存在一个调用记录 因此永远不会发生栈溢出
 *  纯粹的函数式编程语言没有循环 都是用递归来实现的
 */

/**
 * 阶乘
 * 1*2*3*...*n
 */

/** 递归 */
export function factorial(n: number): number {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

/** 尾递归 */
export function factorialWithTail(n: number, total = 1): number {
  if (n === 1) return total;
  return factorialWithTail(n - 1, n * total);
}

/** for循环 */
export function factorialByFor(n: number) {
  let total = 1;
  for (let i = 1; i <= n; i++) {
    total *= i;
  }
  return total;
}

/**
 * 斐波那契/兔子繁殖 F(1)=1，F(2)=1, F(n)=F(n - 1)+F(n - 2)（n ≥ 3，n ∈ N*）
 *   例子: 1、1、2、3、5、8、13、21、34
 *
 * 计算第n天后有多少只兔子
 */

/** 重复计算的递归版本 */
export function fibo(n: number): number {
  if (n <= 2) return 1;
  return fibo(n - 1) + fibo(n - 2);
}

/** 记忆版本递归优化 */
const memorize = [1, 1];
export function fiboWithMemory(n: number): number {
  if (memorize[n - 1] === undefined) {
    memorize[n - 1] = fiboWithMemory(n - 1) + fiboWithMemory(n - 2);
  }
  return memorize[n - 1];
}

/** 尾递归优化 */
export function fiboWithTail(n: number, prev = 1, next = 1): number {
  if (n <= 2) return next;
  return fiboWithTail(n - 1, next, prev + next);
}

/** for循环版本 */
export function fiboByFor(n: number) {
  if (n <= 2) return 1;
  let prev = 1,
    next = 1,
    sum = 0;
  for (let i = 3; i <= n; i++) {
    sum = prev + next;
    prev = next;
    next = sum;
  }
  return sum;
}
