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

const traverseTree = (node: TreeNode | null): number => {
    if(node === null) return 0; 

    let sum = 0;

    if(node.left && node.left.left === null && node.left.right === null) {
    sum += node.left.val}

    // 왼쪽 자식 재귀적으로 탐색 
    sum += traverseTree(node.left)
    sum += traverseTree(node.right)

    return sum; 
}


function sumOfLeftLeaves(root: TreeNode | null): number {
    if(root === null) return 0; 


    return traverseTree(root)
};