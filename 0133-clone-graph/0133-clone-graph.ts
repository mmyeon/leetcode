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
    if (!node) return null

    const bfs = (node: _Node | null): _Node => {
        const clone = new Node(node.val);
        const clones = new Map();
        clones.set(node, clone)
        let queue = [node];

        while (queue.length > 0) {
            const targetNode = queue.shift();

            for (const neighbor of targetNode.neighbors) {
                if (!clones.has(neighbor)) {
                    clones.set(neighbor, new Node(neighbor.val))
                    queue.push(neighbor)
                }

                clones.get(targetNode).neighbors.push(clones.get(neighbor))
            }

        }

        return clone;
    }

    return bfs(node);
};