class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function oddEvenList1(head: ListNode | null): ListNode | null {
  if (!head) return head;

  const odd: number[] = [];
  const even: number[] = [];
  let curr: ListNode | null = head;
  let count = 1;

  while (curr?.next || curr) {
    if (count % 2 === 1) {
      odd.push(curr.val);
    } else {
      even.push(curr.val);
    }
    curr = curr?.next;
    count++;
  }

  for (const val of even) {
    odd.push(val);
  }

  const newList = generateLinkedList(odd);

  return newList;
}

function oddEvenList(head: ListNode | null): ListNode | null {
  if (!head) return head;

  let odd: ListNode | null = head;
  let even: ListNode | null = head?.next;
  let evenHead = even;

  while (odd && odd.next) {
    if (odd?.next) {
      odd.next = odd.next.next;
      odd = odd.next;
    }
    if (even?.next) {
      even.next = even.next.next;
      even = even.next;
    }
  }

  if (odd) odd.next = evenHead;

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

const linkedList1 = generateLinkedList([1, 2, 3, 4, 5, 6, 7, 8]);
// const linkedList1 = generateLinkedList([1, 2, 3, 4, 5, 6, 7]);

const test1 = oddEvenList(linkedList1);
console.log(JSON.stringify(test1));
