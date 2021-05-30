/**
 *  想法：
 *      1. DFS push 到list之後，再Sum up
 */

class TreeNode {

    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
    }
  };
  
  
  const find_sum_of_path_numbers = function(root) {
    return recursive_DFS(root, 0);
  };

  const recursive_DFS = function(root, sum) {
    if (root === null) return 0;
    sum = 10 * sum + root.value;

    if (root.left == null && root.right == null) {
        return sum;
    }

    return recursive_DFS(root.left, sum) + recursive_DFS(root.right, sum);
    
  }
  
  
  
  var root = new TreeNode(1)
  root.left = new TreeNode(0)
  root.right = new TreeNode(1)
  root.left.left = new TreeNode(1)
  root.right.left = new TreeNode(6)
  root.right.right = new TreeNode(5)
  console.log(`Total Sum of Path Numbers: ${find_sum_of_path_numbers(root)}`)