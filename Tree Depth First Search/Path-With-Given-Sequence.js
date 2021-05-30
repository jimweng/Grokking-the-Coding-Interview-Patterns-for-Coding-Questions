/**
 * 
 * 
 */

class TreeNode {

    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
    }
  };
  
  
  
  const find_path = function(root, sequence) {
    let counter = -1;
    return find_path_recursive(root, sequence, counter);
  };
  

  const find_path_recursive = function(root, sequence, counter) {
    counter += 1;
    if (root === null) return false;

    if (root.value === sequence[counter] && root.left == null && root.right == null) {
        return true;
    }

    return find_path_recursive(root.left, sequence, counter) || find_path_recursive(root.right, sequence, counter);
  }


  
  var root = new TreeNode(1)
  root.left = new TreeNode(0)
  root.right = new TreeNode(1)
  root.left.left = new TreeNode(1)
  root.right.left = new TreeNode(6)
  root.right.right = new TreeNode(5)
  
  console.log(`Tree has path sequence: ${find_path(root, [1, 0, 7])}`)
  console.log(`Tree has path sequence: ${find_path(root, [1, 1, 6])}`)