function swap(arr: number[], a: number, b: number) {
  const tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
}

/** 冒泡排序 */
export function bubble(arr: number[]) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        swap(arr, i, j);
      }
    }
  }
  return arr;
}

/** 快速排序 */
export function fast(arr: number[]): number[] {
  if (arr.length <= 1) return arr;
  const index = Math.floor(arr.length / 2);
  const curr = arr[index];
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === index) {
      continue;
    } else if (arr[i] < curr) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...fast(left), curr, ...fast(right)];
}

const arr = [6, 3, 1, 8];
console.log(bubble(arr));
console.log(fast(arr));
