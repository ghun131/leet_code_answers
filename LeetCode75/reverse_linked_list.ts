class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function createLinkedList(array: number[]) {
  const result = new ListNode(array[0]);
  let curNode = result;

  for (let i = 1; i < array.length; i++) {
    const newNode = new ListNode(array[i]);
    curNode.next = newNode;
    curNode = curNode.next;
  }

  return result;
}

// function reverseList(head: ListNode | null): ListNode | null {
//   if (!head || !head?.next) return head;
//
//   const newHead = reverseList(head.next);
//   head.next.next = head;
//   head.next = null;
//
//   return newHead;
// }

function reverseList(head: ListNode | null): ListNode | null {
    let prev = null;
    let curr = head;

    while (curr) {
        const cached = curr.next;

        curr.next = prev;
        prev = curr;

        curr = cached
    }

    return prev
}
const first = createLinkedList([1, 2, 3, 4]);
// const second = createLinkedList([1, 4, 5]);

const result = reverseList(first);
 console.log("result", JSON.stringify(result));

// NOTE: I don't understand the solution above
