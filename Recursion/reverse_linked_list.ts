class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
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

function reverseList(head: ListNode | null): ListNode | null {
  let pointer = head;
  let prev: ListNode | null = null;

  while (pointer) {
    const cache = pointer.next;

    pointer.next = prev;
    prev = pointer;

    pointer = cache;
  }

  return prev;
}

// function reverseList(head: ListNode | null): ListNode | null {
//   //  base case
//   if (head === null || head.next === null) {
//     return head;
//   }

//   let prev = reverseList(head.next);

//   head.next.next = head;
//   head.next = null;

//   return prev;
// }

const linkedList = generateLinkedList([1, 2, 3, 4]);

const result = reverseList(linkedList);

console.log(result, JSON.stringify(result));
