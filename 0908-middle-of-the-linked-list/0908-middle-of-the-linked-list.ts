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

function middleNode(head: ListNode | null): ListNode | null {
    // 노드의 전체 사이즈를 알기 위해서 Map 자료구조에 개별 노드 저장하기 
    let current = head;
    let map = new Map();
    let index = 0;

    while (current.next !== null) {
        // 현재 노드와 인덱스 저장 
        map.set(index, current)
        // 다음 노드로 이동 
        current = current.next;
        index++;
    }

    // 노드가 1개 일 때는, head 노드 리턴하도록 처리
    if (map.size === 0) return head;
    if (map.size === 1) return head.next;

    // 노드 사이즈를 알아낸 뒤, 2로 나눠서 중앙 index가 됨 
    const middleNodeIndex = map.size % 2 === 0 ? Math.floor(map.size / 2) : Math.floor(map.size / 2) + 1

    // 해당 index에 해당하는 노드 리턴하기 
    return map.get(middleNodeIndex)
};