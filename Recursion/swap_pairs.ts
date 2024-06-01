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

function swapPairs(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return head;
  }

  const first = head;
  const second = head.next;

  first.next = swapPairs(second.next);
  second.next = first;

  return second;
}

const linkedList = generateLinkedList([1, 2, 3, 4]);

const result = swapPairs(linkedList);

console.log(JSON.stringify(result));
