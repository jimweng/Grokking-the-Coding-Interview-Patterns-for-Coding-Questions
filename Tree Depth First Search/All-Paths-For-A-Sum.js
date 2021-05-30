/**
 *      想法：
 *          1. Binary Tree Path Sum first，然後回傳list
 *          2. 一樣寫兩個版本，recursive 跟 stack版本
 * 
 */

class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
    }
  };
  
  
  const find_paths = function(root, sum) {
    const allPaths = [], queue = [];
    find_paths_recursive(root, sum, queue, allPaths);
    return allPaths;
  };

  const find_paths_recursive = function(currentNode, sum, currentPath, allPaths) {
    if (currentNode === null) {
        return;
      }
    
      // add the current node to the path
      currentPath.push(currentNode.value);
    
      // if the current node is a leaf and its value is equal to sum, save the current path
      if (currentNode.value === sum && currentNode.left === null && currentNode.right === null) {
        allPaths.push(currentPath.slice());
      } else {
        // traverse the left sub-tree
        find_paths_recursive(currentNode.left, sum - currentNode.value, currentPath, allPaths);
        // traverse the right sub-tree
        find_paths_recursive(currentNode.right, sum - currentNode.value, currentPath, allPaths);
      }
      // remove the current node from the path to backtrack,
      // we need to remove the current node while we are going up the recursive call stack.
      currentPath.pop();
  }
  
  
  
  var root = new TreeNode(12)
  root.left = new TreeNode(7)
  root.right = new TreeNode(1)
  root.left.left = new TreeNode(4)
  root.right.left = new TreeNode(10)
  root.right.right = new TreeNode(5)
  sum = 23
  console.log(`Tree paths with sum: ${sum}: ${find_paths(root, sum)}`)