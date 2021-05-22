/**
 *  想法：
 *      1. 原本是把每個level的元素都印出來，現在計算出平均值後，產生一個array
 *      
 */

class TreeNode {

    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
    }
  };
  
  const find_level_averages = function(root) {
    const result = [], queue = [];
    if (root == null) return [];

    queue.push(root);
    while(queue.length > 0) {
        const levelSize = queue.length;
        let tempSum = 0;
        for (let i = 0; i < levelSize; i++) {
            let currentNode = queue.shift();
            tempSum += currentNode.value;
            if (currentNode.left !== null) queue.push(currentNode.left);
            if (currentNode.right !== null) queue.push(currentNode.right);
        }
        result.push(tempSum/levelSize);
    }

    return result;
  };
  
  
  var root = new TreeNode(12)
  root.left = new TreeNode(7)
  root.right = new TreeNode(1)
  root.left.left = new TreeNode(9)
  root.left.right = new TreeNode(2)
  root.right.left = new TreeNode(10)
  root.right.right = new TreeNode(5)
  
  console.log(`Level averages are: ${find_level_averages(root)}`)