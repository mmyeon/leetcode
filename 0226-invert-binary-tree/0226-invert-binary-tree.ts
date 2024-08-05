/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function invertTree(root: TreeNode | null): TreeNode | null {
    // root가 비어있는 경우 처리
    if(!root) return root; 
    // root만 있는 경우 처리
    if(!root.left && !root.right) return root; 

    // 자식 노드가 둘 다 있는 경우 교체 
    let temp = root.left
    root.left = root.right
    root.right = temp

    // 하위 트리도 교체 작업 반복하기
    if(root.left) invertTree(root.left)
    if(root.right) invertTree(root.right)

    return root
};