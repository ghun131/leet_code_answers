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

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
}

const first = createLinkedList([1, 2, 3]);
const second = createLinkedList([1, 4, 5]);

const result = mergeTwoLists(first, second);

console.log("RESULT", JSON.stringify(result));
