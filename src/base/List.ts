export class List<T> {
  val: T;
  next: ListNode<T>;
  constructor(val: T, next?: ListNode<T>) {
    this.val = val;
    this.next = next || null;
  }
}
export type ListNode<T> = List<T> | null;

/** 创建链表 头插法 [1,2,3,4] => 1432 */
export function createListHead<T>(arr: T[]) {
  const head = new List(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    const node = new List(arr[i]);
    node.next = head.next;
    head.next = node;
  }
  return head;
}

/** 创建链表 尾插法 [1,2,3,4] => 1234 */
export function createListTail<T>(arr: T[]) {
  const head = new List(arr[0]);
  let curr = head;
  for (let i = 1; i < arr.length; i++) {
    const node = new List(arr[i]);
    curr.next = node;
    curr = node;
  }
  return head;
}

/** 遍历链表 */
export function traversalList<T>(list: ListNode<T>): T[] {
  const arr: T[] = [];
  let curr = list;
  while (curr !== null) {
    arr.push(curr!.val);
    curr = curr.next;
  }
  return arr;
}
