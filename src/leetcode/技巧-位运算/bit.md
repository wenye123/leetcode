```js
二进制: 满二进一
  000 ==> 0
  001 ==> 1
  010 ==> 2
  011 ==> 3
  100 ==> 4
  101 ==> 5
  110 ==> 6
  111 ==> 7
  计算方法: 5 = 1 * 2^2 + 0 * 2^1 + 1* 2^0 = 4 + 0 + 1
位运算
  & 与 两个位都为1结果才为1
  | 或 两个位都为0结果才为0
  ^ 异或 两个位相同为0,相异为1
  ~ 取反 0变1,1变0
  << 左移 左移n位相当于乘以2^n
  >> 右移 左移n位相当于除以2^n再取整
复合赋值运算符
  &= a&=b 相当于 a = a&b
  ...

位运算应用: |授权 &校验 ^删除授权
  初始化: 保证所有选项只有一个1
    text = 1 = 001
    html = 1 << 2 = 010
    component = 1 << 2 = 100
  |授权: 能收集所有1
    textHtml = 001 | 010 = 011
  &校验
    text: 011 & 001 = 001
    html: 011 & 010 = 010
    component: 011 & 100 = 000 无权限
  ^删除授权
    textHtml ^ html = 011 ^ 010 = 001
    text: 001 & 001 = 001
    html 001 & 010 = 000 无权限

^应用
  1. 交换律: a ^ b ^ c = a ^ c ^ b
  2. 任何数^0等于自身
  3. 任何数和自身^等于0

```
