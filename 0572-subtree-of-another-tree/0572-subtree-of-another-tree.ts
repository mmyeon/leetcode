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


function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    // bfs로 트리 순회하기
    // bfs 순회하기 전에 두 개의 트리 중 하나가 null일 때 처리 
    if (!root) return false;
    if (!subRoot) return true;

    const isSameTree = (t1: TreeNode | null, t2: TreeNode | null): boolean => {
        if (!t1 && !t2) return true;
        if (!t1 || !t2) return false;
        if (t1.val !== t2.val) return false;

        return isSameTree(t1.left, t2.left) && isSameTree(t1.right, t2.right)
    }

    // bfs 함수 구현
    const bfs = (root: TreeNode): boolean => {
        let queue = [root];

        while (queue.length > 0) {
            const currentNode = queue.shift();

            // root 노드의 값이 subRoot 루트의 값과 같은 경우 하위 트리가 같은지 isSameTree 함수 호출 
            // isSameTree 인 경우, true 리턴 
            if (currentNode.val === subRoot.val && isSameTree(currentNode, subRoot))
                return true;
            if (currentNode.left) queue.push(currentNode.left)
            if (currentNode.right) queue.push(currentNode.right)

        }

        return false;
    }

    return bfs(root);
};