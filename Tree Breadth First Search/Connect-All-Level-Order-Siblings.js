/**
 *  想法：
 *      1. 在Connect level order siblings 那時候寫成現在這個
 *      2. 這邊練習用currentNode當作判斷
 * 
 */

class TreeNode {

    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
    }
    
    // tree traversal using 'next' pointer
    print_tree() {
      let result = "Traversal using 'next' pointer: ";
      let current = this;
      while (current != null) {
        result += current.value + " ";
        current = current.next;
      }
      console.log(result);
    }
  };
  
  const connect_all_siblings = function(root) {
    if (root == null) return []

    const queue = [], result = [];
    queue.push(root);
    let currentNode = null, previousNode = null
    while(queue.length > 0){
        const levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            currentNode = queue.shift();
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
            if (previousNode !== null) previousNode.next = currentNode;
            previousNode = currentNode;
        }
        
    }
    return root;
  };
  
  
  var root = new TreeNode(12)
  root.left = new TreeNode(7)
  root.right = new TreeNode(1)
  root.left.left = new TreeNode(9)
  root.right.left = new TreeNode(10)
  root.right.right = new TreeNode(5)
  connect_all_siblings(root)
  root.print_tree()