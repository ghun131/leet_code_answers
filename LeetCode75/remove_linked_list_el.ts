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

// function removeElements(head: ListNode | null, val: number): ListNode | null {
//   if (head === null) return null;

//   head.next = removeElements(head.next, val);

//   return head.val === val ? head.next : head;
// }

function removeElements(head: ListNode | null, val: number): ListNode | null {
  const result = new ListNode(-1, null);

  while (head?.next) {
    if (head.val === val) {
        head.next = head.next;
    } else {
        result.next = head;
    }
  }

  return result;
}

const list = createLinkedList([1, 2, 6, 3, 4, 5, 6]);
const val = 6;
const result = removeElements(list, val);
console.log("result", JSON.stringify(result));
