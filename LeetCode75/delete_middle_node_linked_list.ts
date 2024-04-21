class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// My first approach to calculate the length and reattach the node when the pointer see the middle point
function deleteMiddle1(head: ListNode | null): ListNode | null {
  let curr = head;
  let length = head ? 1 : 0;

  while (curr?.next) {
    curr = curr?.next;
    length++;
  }
  if (length === 1) return null;

  curr = head;

  for (let i = 0; i < length; i++) {
    if (!curr) return head;

    if (i + 1 === Math.floor(length / 2)) {
      if (curr.next) {
        curr.next = curr.next.next;
      }
    } else {
      curr = curr.next;
    }
  }

  return head;
}

// This one is using 2 pointers, it should be faster since it only loop once
function deleteMiddle(head: ListNode | null): ListNode | null {
  if (!head?.next) return null;

  let slow = head;
  let fast = head?.next.next;

  while (fast && fast.next) {
    slow = slow.next as ListNode;
    fast = fast.next.next;
  }

  slow.next = slow?.next?.next as ListNode | null;
  return head;
}

function generateLinkedList(input: number[]): ListNode {
  const head: ListNode = { val: input[0], next: null };
  let curr: ListNode = head;

  for (let i = 0; i < input.length; i++) {
    if (i > 0) {
      curr.next = { val: input[i], next: null };
      curr = curr.next;
    }
  }

  return head;
}

const linkedList1 = generateLinkedList([1, 3, 4, 7, 1, 2, 6]);
const linkedList2 = generateLinkedList([1, 2, 3, 4]);
const linkedList3 = generateLinkedList([2, 1]);
const linkedList4 = generateLinkedList([5]);

const test1 = deleteMiddle(linkedList1);
const test2 = deleteMiddle(linkedList2);
const test3 = deleteMiddle(linkedList3);
const test4 = deleteMiddle(linkedList4);

console.log(JSON.stringify(test1));
console.log(JSON.stringify(test2));
console.log(JSON.stringify(test3));
console.log(JSON.stringify(test4));
