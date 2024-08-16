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

function kthSmallest(root: TreeNode | null, k: number): number {
    let nodeCount = 0;
    let result = null; 

    const inorderTraversal = (node: TreeNode | null) => {
        if(!node || result) return;

        inorderTraversal(node.left);

        nodeCount++;
        if(nodeCount  === k) {
            result = node.val;
            return;
        }
        
        inorderTraversal(node.right)
    }

    inorderTraversal(root)

    return result;  
};