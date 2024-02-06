/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    // Handle the case where left and right are the same or head is null.
    if (left === right || !head) {
        return head;
    }

    let dummy = new ListNode(-1); // Create a dummy node to simplify edge cases.
    dummy.next = head;
    let prev = dummy;
    let leftPointer = head;

    // Find the node just before the 'left' position.
    for (let i = 1; i < left; i++) {
        prev = leftPointer;
        leftPointer = leftPointer.next;
    }

    // Find the node at the 'right' position.
    let rightPointer = head;
    for (let j = 1; j < right; j++) {
        rightPointer = rightPointer.next;
    }

    // Reverse the sub-list from 'left' to 'right'.
    let current = leftPointer;
    let next = null;
    let tail = leftPointer;

    for (let i = left; i <= right; i++) {
        next = current.next;
        current.next = prev.next;
        prev.next = current;
        current = next;
    }

    tail.next = current; // Connect the reversed part with the rest of the list.

    return dummy.next; // Return the updated list.
};
