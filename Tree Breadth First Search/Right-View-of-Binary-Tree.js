/**
 *    想法
 *      1. BFS找出同level最後的元素，然後pop到result array中
 */

class TreeNode {

    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
    }
  };
  
  const tree_right_view = function(root) {
    const result = [], queue = [];
    if (root == null) return result;
    
    queue.push(root);

    while(queue.length > 0) {
        const levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift();
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
            if (i === (levelSize - 1)) result.push(currentNode.value);
        }
    }
    

    return result;
  };
  
  
  var root = new TreeNode(12);
  root.left = new TreeNode(7);
  root.right = new TreeNode(1);
  root.left.left = new TreeNode(9);
  root.right.left = new TreeNode(10);
  root.right.right = new TreeNode(5);
  root.left.left.left = new TreeNode(3);
  console.log("Tree right view: " + tree_right_view(root))