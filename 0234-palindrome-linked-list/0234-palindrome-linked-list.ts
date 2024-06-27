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

const reverseList = (head: ListNode | null): ListNode | null => {
    let prev = null;
    let current = head;

    while (current) {
        let next = current.next;
        current.next = prev;
        prev = current
        current = next;
    }

    return prev;
}

function isPalindrome(head: ListNode | null): boolean {
    if (!head || !head.next) return true;

    // 중간 노드 찾기 
    let slowP = head;
    let fastP = head;

    while (fastP && fastP.next) {
        slowP = slowP.next;
        fastP = fastP.next.next;
    }

    // 중간 노드 이후 노드를 뒤집기 
    let firstHalfStart = head;
    let secondHalfStart = reverseList(slowP);

    // 동일값인지 비교하기 
    while (secondHalfStart) {
        if (firstHalfStart.val !== secondHalfStart.val) return false;
        firstHalfStart = firstHalfStart.next;
        secondHalfStart = secondHalfStart.next;
    }

    return true;
};