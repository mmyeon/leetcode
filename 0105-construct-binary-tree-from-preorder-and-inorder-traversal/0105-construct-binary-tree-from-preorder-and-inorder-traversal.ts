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



function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    if (!preorder.length || !inorder.length) return null;

    const rootValue = preorder[0];
    const rootValueIndexInInorder = inorder.indexOf(rootValue);

    const root = new TreeNode(rootValue);

    const leftInorder = inorder.slice(0, rootValueIndexInInorder);
    const rightInorder = inorder.slice(rootValueIndexInInorder + 1);

    const leftPreorder = preorder.slice(1, leftInorder.length + 1)
    const rightPreorder = preorder.slice(leftInorder.length + 1)

    root.left = buildTree(leftPreorder,leftInorder)
    root.right = buildTree(rightPreorder,rightInorder)

    return root;
};


