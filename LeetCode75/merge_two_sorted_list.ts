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

// function mergeTwoLists(
//   list1: ListNode | null,
//   list2: ListNode | null
// ): ListNode | null {
//   const head = new ListNode(-1, null);
//   let mover = head;

//   while (list1 && list2) {
//     if (list1?.val <= list2?.val) {
//       mover.next = list1;
//       list1 = list1?.next;
//     } else {
//       mover.next = list2;
//       list2 = list2?.next;
//     }
//     mover = mover.next;
//   }
//   mover.next = list1 || list2;

//   return head.next;
// }

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (!list1) return list2;
  if (!list2) return list1;

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
}

const first = createLinkedList([1, 2, 3]);
const second = createLinkedList([1, 4, 5]);

const result = mergeTwoLists(first, second);

// console.log("RESULT", JSON.stringify(result));
console.log(JSON.stringify(result));
