```js
- 遍历链表
  let curr = head;
  while (curr !== null) {
    doSomething(curr.val); // 对节点进行一些操作
    curr = curr.next;
  }

- 哨兵: 删除节点&构建新的链表(让代码更加容易理解)
  const sentry = new ListNode(0, head);
  let curr = sentry;
  while (curr.next !== null) {
    doSomething(curr.next.val); // 对节点进行一些操作
    curr = curr.next;
  }
  return sentry.next;

- 根据已有链表构建新的链表: 头插法/尾插法
    let sentry = newListNode(0);
    let currSentry = sentry; // 尾插法时候使用
    let curr = head;
    while (curr !== null) {
      /** 头插法: 会破坏原链表 **/
      // 保存原先链表的后续
      const next = curr.next;
      // 头插curr节点 注意以下操作会破坏原先链表 如果不想破坏就新建一个节点: const node = new ListNode(curr.val)
      curr.next = sentry.next;
      sentry.next = curr;
      // 将后续链表赋值给curr 循环继续
      curr = next;

      /** 尾插法: 不会影响原链表 **/
      currSentry.next = curr;
      currSentry = currSentry.next;
      curr = curr.next;
    }
    return sentry.next;

- 快慢指针
  let slow = head, fast =head;
  while (fast ! == null && fast.next !== null) {
    doSomeThing(slow.val, fast.val); // 对节点进行一些操作
    slow = head.next; // 慢的跑一次
    fast = fast.next.next; // 快的跑两次
  }

### 题型
反转链表: 头插法
回文链表: 快慢指针+头插前半部分
```
