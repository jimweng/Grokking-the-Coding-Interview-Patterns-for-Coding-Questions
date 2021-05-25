/**
 *  想法：
 *      1. 印象中DFS，有兩種方法，一種是stack，一種是recursive
 */

class TreeNode {

    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
    }
  };
  
  const recursive_has_path = function(root, sum) {
    if (!root) return false;
    if (!root.left && !root.right) return sum === root.value;
    return (root.left && recursive_has_path(root.left, sum - root.value)) ||
        (root.right && recursive_has_path(root.right, sum - root.value));

  }
  
  const has_path = function(root, sum) {
    if (root == null) return false;

    const stack = [[root, sum]];

    while(stack.length) {
        const currentNode = stack.pop();
        if (!currentNode[0].left && !currentNode[0].right && currentNode[1] === currentNode[0].value) return true;
        if (currentNode[0].left) stack.push([currentNode[0].left, currentNode[1] - currentNode[0].value]);
        if (currentNode[0].right) stack.push([currentNode[0].right, currentNode[1] - currentNode[0].value]);
    }

    return false;
  };
  
  
  var root = new TreeNode(12)
  root.left = new TreeNode(7)
  root.right = new TreeNode(1)
  root.left.left = new TreeNode(9)
  root.right.left = new TreeNode(10)
  root.right.right = new TreeNode(5)
  console.log(`[Stack Version] Tree has path: ${has_path(root, 23)}`)
  console.log(`[Stack Version] Tree has path: ${has_path(root, 16)}`)
  console.log(`[Recursive Version] Tree has path: ${recursive_has_path(root, 23)}`)
  console.log(`[Recursive Version] Tree has path: ${recursive_has_path(root, 16)}`)