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

// function isPalindrome(head: ListNode | null): boolean {
//   let forward = "";
//   let backward = "";

//   while (head) {
//     forward += head.val;
//     backward = head.val + backward;
//     head = head.next;
//   }

//   return forward === backward;
// }

// function isPalindrome(head: ListNode | null): boolean {
//   let slow = head;
//   let fast = head;
//   let prev = null;

//   while (fast && fast.next) {
//     fast = fast.next.next;

//     // three ways swapping a linked list
//     const next = slow?.next;

//     slow.next = prev;
//     prev = slow;
//     slow = next;
//   }

//   if (fast) slow = slow?.next;

//   while (prev && prev.val === slow.val) {
//     slow = slow?.next;
//     prev = prev.next;
//   }

//   return prev === null;
// }

function isPalindrome(head: ListNode | null): boolean {
  let curr = head;
  let result = true;

  function reverse(item) {
    if (item) {
      reverse(item.next);

      if (item.val !== curr.val) {
        result = false;
        return;
      }

      curr = curr.next;
    }
  }

  reverse(head);
  return result;
}

// const linkedList = createLinkedList([1, 2, 3, 4, 4, 3, 2, 1]);
const linkedList = createLinkedList([1, 2, 3, 4, 5]);

console.log(isPalindrome(linkedList));
