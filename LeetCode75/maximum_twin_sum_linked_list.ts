class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
function pairSum1(head: ListNode | null): number {
  if (!head) return 0;

  let curr: ListNode | null = head;
  const vals: number[] = [];

  while (curr.next) {
    if (curr.val) {
      vals.push(curr.val);
    }

    curr = curr.next;
  }
  vals.push(curr.val);

  let max: number = 0;
  const length = vals.length;
  for (let i = 0; i <= length / 2; i++) {
    max = Math.max(max, vals[i] + vals[length - i - 1]);
  }

  return max;
}

function pairSum(head: ListNode | null): number {
  if (!head) return 0;

  let slow: ListNode | null = head;
  let fast: ListNode | null = head.next;
  const stack: number[] = [];

  while (fast) {
    slow?.val && stack.push(slow.val);
    slow = slow?.next || null;
    fast = fast.next?.next || null
  }

  let max = 0;

  while (slow) {
    const num = stack.pop() || 0;
    max = Math.max(max, slow.val + num);
    slow = slow.next;
  }

  return max;
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

const linkedList1 = generateLinkedList([5, 4, 2, 1]);
// const linkedList1 = generateLinkedList([4, 2, 2, 3]);
// const linkedList1 = generateLinkedList([1, 100000]);

const test1 = pairSum(linkedList1);
console.log(JSON.stringify(test1));
