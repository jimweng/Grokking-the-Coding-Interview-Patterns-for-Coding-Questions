/**
 *  想法：
 *      1. 融合Binary Tree level order traversal 及 Reverse Tree level order traversal
 *      2. queue, stack 數量會變動，就要提前將變數設好
 */

class TreeNode {

    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
    }
  };
  
  
  const traverse = function(root) {
    const result = [], queue = [];

    if (root == null) return result;
    let levelFlag = true;
    queue.push(root);
    while(queue.length > 0) {
        const levelSize = queue.length, currentLevel = [];
        for(let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift();
            currentLevel.push(currentNode.value);
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
        }

        const currentLevelSize = currentLevel.length
        // check level
        for (let i = 0; i < currentLevelSize; i++) {
            if (levelFlag) {
                result.push(currentLevel.shift());
            } else {
                result.push(currentLevel.pop());
            }
        }
        
        levelFlag ^= true;
    } 


    return result;
  };
  
  
  var root = new TreeNode(12)
  root.left = new TreeNode(7)
  root.right = new TreeNode(1)
  root.left.left = new TreeNode(9)
  root.right.left = new TreeNode(10)
  root.right.right = new TreeNode(5)
  root.right.left.left = new TreeNode(20)
  root.right.left.right = new TreeNode(17)
  console.log(`Zigzag traversal: ${traverse(root)}`)