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

function inorderTraversal(root: TreeNode | null): number[] {
    let values : number[] = [];
    let stack: TreeNode[] = [];
    let current = root; 


    while (current || stack.length){
        while(current) {
            stack.push(current);
            current = current.left;
        }

        current = stack.pop();
        values.push(current.val);
        current = current.right;
    }

    return values;
}