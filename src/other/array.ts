/** 正向合并两个有序数组 */
export function mergeSortArrForward(arr1: number[], arr2: number[]) {
  const mergeArr: number[] = [];
  let i = 0,
    j = 0;
  for (; i < arr1.length && j < arr2.length; ) {
    if (arr1[i] < arr2[j]) {
      mergeArr.push(arr1[i]);
      i++;
    } else {
      mergeArr.push(arr2[j]);
      j++;
    }
  }
  // 合并剩下元素
  for (; i < arr1.length; i++) {
    mergeArr.push(arr1[i]);
  }
  for (; j < arr2.length; j++) {
    mergeArr.push(arr2[j]);
  }
  return mergeArr;
}

/** 反向合并两个有序数组 */
export function mergeSortArrReverse(arr1: number[], arr2: number[]) {
  const mergeArr: number[] = [];
  let i = arr1.length - 1,
    j = arr2.length - 1,
    k = arr1.length + arr2.length - 1;
  for (; i >= 0 && j >= 0; k--) {
    if (arr1[i] > arr2[j]) {
      mergeArr[k] = arr1[i];
      i--;
    } else {
      mergeArr[k] = arr2[j];
      j--;
    }
  }
  // 合并剩下元素
  for (; i >= 0; i--, k--) {
    mergeArr[k] = arr1[i];
  }
  for (; j >= 0; j--, k--) {
    mergeArr[k] = arr2[j];
  }
  return mergeArr;
}

console.log(mergeSortArrForward([1, 2, 4, 5], [2, 5, 6]));
console.log(mergeSortArrReverse([1, 2, 4, 5], [2, 5, 6]));
