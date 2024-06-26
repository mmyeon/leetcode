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

const getNodeLength = (head: ListNode) => {
    let length = 0;

    while (head) {
        head = head.next;
        length++;
    }

    return length;
}

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let aNodeLength = getNodeLength(headA);
    let bNodeLength = getNodeLength(headB);

    if (bNodeLength > aNodeLength) {
        for (let i = 0; i < bNodeLength - aNodeLength; i++) {
            headB = headB.next;
        }
    } else {
        for (let i = 0; i < aNodeLength - bNodeLength; i++) {
            headA = headA.next;
        }
    }


    while (headA && headB) {
        if (headA === headB) { return headA; }
        else {
            headA = headA.next
            headB = headB.next
        }
    }

    return null;
};