/**
 *  想法：
 *      1. Reverse 那就改用stack吧，並且用一個table存放每個levelSize
 *      2. 後來看解答，就直接用queue, shift -> unshift
 *      3. 二個queue，一個看當下level，一個放待處理level（下一個level）
 */

class TreeNode {

    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
    }
  };
  
  const traverse = function(root) {
    if (root == null) return [];

    let result = [], queue = [], levelSize = 0;
    queue.push(root);
    while(queue.length > 0) {
        let currentLevel = [];
        levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            let currentNode = queue.shift();
            currentLevel.push(currentNode.value);

            if (currentNode.left !== null) {
                queue.push(currentNode.left);
            }

            if (currentNode.right !== null) {
                queue.push(currentNode.right);
            }
        }
        result.unshift(currentLevel);
    }

    return result;
  }
  
  var root = new TreeNode(12)
  root.left = new TreeNode(7)
  root.right = new TreeNode(1)
  root.left.left = new TreeNode(9)
  root.right.left = new TreeNode(10)
  root.right.right = new TreeNode(5)
  console.log(`Reverse level order traversal: ${traverse(root)}`)