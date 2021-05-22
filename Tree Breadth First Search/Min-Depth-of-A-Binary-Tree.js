/**
 *  想法：
 *      1. minimum-Depth: 所以用BFS一一檢查
 *      2. maximum-Depth: 就全部走完就好
 * 
 */

class TreeNode {

    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
    }
  };
  
  
  const find_minimum_depth = function(root) {
    if (root == null) return 0;

    // BFS
    const queue = [];
    let depth = 0;

    queue.push(root);
    while(queue.length > 0) {
        const levelSize = queue.length;
        depth += 1;
        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift();
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
            if (!currentNode.left && !currentNode.right) return depth;
        }
    }

    return depth;
  };
  
  
  
  var root = new TreeNode(12)
  root.left = new TreeNode(7)
  root.right = new TreeNode(1)
  root.right.left = new TreeNode(10)
  root.right.right = new TreeNode(5)
  console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`)
  root.left.left = new TreeNode(9)
  root.right.left.left = new TreeNode(11)
  console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`)