/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let pointer = head
    if (pointer == null || pointer.next == null){return pointer}
    while (pointer !== null && pointer.next !== null){
    // if pointer val = next val
        if(pointer.val == pointer.next.val){
    // change pointer.next to next.next
            pointer.next = pointer.next.next
        } else {
    // change pointer to next 
            pointer = pointer.next
        }
    }  
   return head 
};