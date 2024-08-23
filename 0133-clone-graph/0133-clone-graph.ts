/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     neighbors: _Node[]
 * 
 *     constructor(val?: number, neighbors?: _Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 * 
 */


function cloneGraph(node: _Node | null): _Node | null {
    let map = new Map();

    const dfs = (node: _Node | null): _Node | null => {
        if (!node) return null;

        if (map.has(node.val)) return map.get(node.val)

        let clonedNode = new Node();
        clonedNode.val = node.val;
        map.set(node.val, clonedNode)

        for (const neighbor of node.neighbors) {
            clonedNode.neighbors.push(dfs(neighbor))
        }
        return clonedNode;
    }

    return dfs(node)
};