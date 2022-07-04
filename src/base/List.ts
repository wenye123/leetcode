export class ListNode<T> {
  val: T;
  next: List<T>;
  constructor(val: T, next?: List<T>) {
    this.val = val;
    this.next = next || null;
  }
}
export type List<T> = ListNode<T> | null;

/** 创建链表 头插法 [1,2,3,4] => 1432 */
export function createListHead<T>(arr: T[]) {
  if (arr.length === 0) return null;
  const head = new ListNode(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    const node = new ListNode(arr[i]);
    node.next = head.next;
    head.next = node;
  }
  return head;
}

/** 创建链表 尾插法 [1,2,3,4] => 1234 */
export function createListTail<T>(arr: T[]) {
  if (arr.length === 0) return null;
  const head = new ListNode(arr[0]);
  let curr = head;
  for (let i = 1; i < arr.length; i++) {
    const node = new ListNode(arr[i]);
    curr.next = node;
    curr = curr.next;
  }
  return head;
}

/** 遍历链表 */
export function traversalList<T>(list: List<T>): T[] {
  const arr: T[] = [];
  let curr = list;
  while (curr !== null) {
    arr.push(curr!.val);
    curr = curr.next;
  }
  return arr;
}

/** 使用哨兵遍历链表 */
export function traversalListBySentry<T>(list: List<T>): T[] {
  const arr: T[] = [];
  const sentry = new ListNode<T>(0 as any, list);
  let curr = sentry;
  while (curr.next !== null) {
    arr.push(curr.next.val);
    curr = curr.next;
  }
  return arr;
}
