/**
 * https://leetcode.cn/problems/design-linked-list/
 */

class LinkNode<T = number> {
  val: T;
  next: List<T>;
  constructor(val: T, next?: List<T>) {
    this.val = val;
    this.next = next || null;
  }
}
type List<T = number> = LinkNode<T> | null;

/** 不带尾指针版本 */
export class MyLinkedList<T = number> {
  private head: List<T>; // 头结点
  private size: number; // 链表大小

  constructor() {
    this.head = null;
    this.size = 0;
  }

  // 获取节点
  private getNode(index: number) {
    if (this.head === null) return null;
    let curr = this.head;
    let currIndex = 0;
    while (curr !== null) {
      if (currIndex === index) return curr;
      curr = curr.next!;
      currIndex++;
    }
    return null;
  }

  get(index: number): T | -1 {
    // 无效索引 返回-1
    if (index < 0 || index >= this.size) return -1;
    // 在链表中查找
    let curr = this.head;
    let currIndex = 0;
    while (curr !== null) {
      if (currIndex === index) return curr.val;
      curr = curr.next;
      currIndex++;
    }
    return -1;
  }

  addAtHead(val: T): void {
    const node = new LinkNode(val);
    if (this.size === 0) {
      // 链表为空
      this.head = node;
    } else {
      // 链表有值则头插
      node.next = this.head;
      this.head = node;
    }
    // 链表长度+1
    this.size++;
  }

  addAtTail(val: T): void {
    const node = new LinkNode(val);
    if (this.size === 0) {
      // 链表为空
      this.head = node;
    } else {
      // 链表有值则找到尾结点并插入
      const tail = this.getNode(this.size - 1);
      if (tail) tail.next = node;
    }
    // 链表长度+1
    this.size++;
  }

  addAtIndex(index: number, val: T): void {
    // 超过链表最大值直接返回
    if (index > this.size) return;

    if (index <= 0) {
      // 插入链表头
      this.addAtHead(val);
    } else if (index === this.size) {
      // 插入链表尾巴
      this.addAtTail(val);
    } else {
      // 插入中间情况
      const node = new LinkNode(val);
      let curr = this.head;
      let currIndex = 0;
      while (curr !== null) {
        // 找到index的前一个节点 进行尾插
        if (currIndex === index - 1) {
          const next = curr.next;
          curr.next = node;
          node.next = next;
        }
        curr = curr.next;
        currIndex++;
      }
      // 链表长度+1
      this.size++;
    }
  }

  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.size) return; // 无效索引直接返回
    if (this.size === 0) return; // 空链表直接返回

    if (index === 0) {
      // 删除头结点
      this.head = this.head!.next;
    } else {
      // 否则查找要删除节点的上一个节点 删除
      let curr = this.head;
      let currIndex = 0;
      while (curr !== null) {
        if (currIndex === index - 1) {
          curr.next = curr.next!.next;
        }
        curr = curr.next;
        currIndex++;
      }
    }

    // 长度-1
    this.size--;
  }
}

// 尾指针版本
// export class MyLinkedList<T = number> {
//   private head: List<T>; // 头结点
//   private tail: List<T>; // 尾结点
//   private size: number; // 链表大小

//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.size = 0;
//   }

//   get(index: number): T | -1 {
//     // 无效索引 返回-1
//     if (index < 0 || index >= this.size) return -1;
//     // 在链表中查找
//     let curr = this.head;
//     let currIndex = 0;
//     while (curr !== null) {
//       if (currIndex === index) return curr.val;
//       curr = curr.next;
//       currIndex++;
//     }
//     return -1;
//   }

//   addAtHead(val: T): void {
//     const node = new LinkNode(val);
//     if (this.size === 0) {
//       // 链表为空
//       this.head = node;
//       this.tail = node;
//     } else {
//       // 链表有值则头插
//       node.next = this.head;
//       this.head = node;
//     }
//     // 链表长度+1
//     this.size++;
//   }

//   addAtTail(val: T): void {
//     const node = new LinkNode(val);
//     if (this.size === 0) {
//       // 链表为空
//       this.head = node;
//       this.tail = node;
//     } else {
//       // 链表有值则尾插
//       this.tail!.next = node;
//       this.tail = node;
//     }
//     // 链表长度+1
//     this.size++;
//   }

//   addAtIndex(index: number, val: T): void {
//     // 要插入的索引大于长度则直接返回
//     if (index > this.size) return;

//     const node = new LinkNode(val);
//     // 链表长度为0则直接插入
//     if (this.size === 0) {
//       this.head = node;
//       this.tail = node;
//     } else {
//       // 链表长度>1的情况
//       if (index === this.size) {
//         // 索引等于长度则插入尾部
//         this.tail!.next = node;
//         this.tail = node;
//       } else if (index <= 0) {
//         // 索引小于等于0则插入头部
//         node.next = this.head;
//         this.head = node;
//       } else {
//         // 正常索引(>=1 && <= this.size-1)则头插
//         let currIndex = 0;
//         let curr = this.head;
//         while (curr !== null) {
//           // 找到index的前一个节点 进行尾插
//           if (currIndex === index - 1) {
//             const next = curr.next;
//             curr.next = node;
//             node.next = next;
//           }
//           curr = curr.next;
//           currIndex++;
//         }
//       }
//     }

//     // 链表长度+1
//     this.size++;
//   }

//   deleteAtIndex(index: number): void {
//     if (index < 0 || index >= this.size) return; // 无效索引直接返回
//     if (this.size === 0) return; // 空链表直接返回

//     if (this.size === 1) {
//       // 只有一个节点删除完事
//       this.head = null;
//       this.tail = null;
//     } else {
//       // >1个节点的情况
//       if (index === 0) {
//         // 删除头结点
//         this.head = this.head!.next;
//       } else {
//         // 否则查找要删除节点的上一个删除当前节点
//         let curr = this.head;
//         let currIndex = 0;
//         while (curr !== null) {
//           if (currIndex === index - 1) {
//             curr.next = curr.next!.next;
//             // 删除的是尾结点
//             if (index === this.size - 1) {
//               this.tail = curr;
//             }
//           }
//           curr = curr.next;
//           currIndex++;
//         }
//       }
//     }

//     // 链表长度-1
//     this.size--;
//   }
// }
