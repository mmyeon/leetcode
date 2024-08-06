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



function maxDepth(root: TreeNode | null): number {
    if (!root) return 0;

    let maximumDepth = 0;
    // root 노드 depth 1로 설정 
    let stack = [{ node: root, depth: 1 }]

    while (stack.length > 0) {
        const { node, depth } = stack.pop();
        // 리턴할 maximumDepth 갱신 
        maximumDepth = Math.max(maximumDepth, depth)

        if (node.left) stack.push({ node: node.left, depth: depth + 1 })
        if (node.right) stack.push({ node: node.right, depth: depth + 1 })
    }

    return maximumDepth
};