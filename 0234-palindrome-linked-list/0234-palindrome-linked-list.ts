/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function isPalindrome(head: ListNode | null): boolean {
    let leftToRightArr = [];
    let current = head; 

    while (current) {
        leftToRightArr.push(current.val)
        current = current.next;
    }

    return leftToRightArr.join() === leftToRightArr.slice().reverse().join()
};