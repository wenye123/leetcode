```js

- 头尾指针: 用于有序数组
  let left = 0, right = nums.length - 1;
  while(left < right) {
    if (nums[left] < nums[right]) {
      right--;
    } else {
      left++;
    }
  }

- 快慢指针
  let slow = 0,
    fast = 0;
  while (fast < nums.length) {
    if (nums[fast] !== val) {
      nums[slow] = nums[fast];
      slow++;
    }
    fast++;
  }


### 题型
- 反转字符串: 头尾指针
- 回文字符串: 头尾指针
```
