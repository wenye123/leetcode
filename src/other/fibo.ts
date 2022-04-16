/** 斐波那契数列 */

/** 重复计算的递归版本 */
function fibo1(n: number): number {
  if (n === 1) return 1;
  if (n === 2) return 2;
  return fibo1(n - 1) + fibo1(n - 2);
}

/** for循环版本 */
function fibo2(n: number) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  let prev1 = 1;
  let prev2 = 2;
  let sum = 0;

  for (let i = 3; i <= n; i++) {
    sum = prev1 + prev2;
    prev1 = prev2;
    prev2 = sum;
  }
  return sum;
}

/** 去掉重复循环的递归版本 */
function fibo3(n: number) {
  function _fibo(n: number, prev1: number, prev2: number): number {
    if (n === 1) return prev1;
    if (n === 2) return prev2;
    return _fibo(n - 1, prev2, prev1 + prev2);
  }
  return _fibo(n, 1, 2);
}

/** 记忆版本优化递归 */
function memozi(fn: Function) {
  const obj: any = {};
  return function (n: number) {
    if (obj[n] === undefined) {
      obj[n] = fn(n);
      return obj[n];
    } else {
      return obj[n];
    }
  };
}
const fibo4 = memozi(function (n: number) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  return fibo4(n - 1) + fibo4(n - 2);
});

console.time("fibo1");
console.debug(fibo1(10));
console.timeEnd("fibo1");

console.time("fibo2");
console.debug(fibo2(1000));
console.timeEnd("fibo2");

console.time("fibo3");
console.debug(fibo3(1000));
console.timeEnd("fibo3");

console.time("fibo4");
console.debug(fibo4(1000));
console.timeEnd("fibo4");
