/**
 *   想法：
 *      1. BFS後，用一個while將array中的node.next設定，
 *      2. 記得用1的話left跟right都要清掉
 *      3. 解答是直接把currentNode記錄成previousNode，少用到一個Array O(N)的記憶體
 * 
 */

class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
      this.next = null;
    }
  
    // level order traversal using 'next' pointer
    print_level_order() {
      console.log("Level order traversal using 'next' pointer: ");
      let nextLevelRoot = this;
      while (nextLevelRoot !== null) {
        let current = nextLevelRoot;
        nextLevelRoot = null;
        while (current != null) {
          process.stdout.write(`${current.val} `);
          if (nextLevelRoot === null) {
            if (current.left !== null) {
              nextLevelRoot = current.left;
            } else if (current.right !== null) {
              nextLevelRoot = current.right;
            }
          }
          current = current.next;
        }
        console.log();
      }
    }
  };
  
  const connect_level_order_siblings = function(root) {
    let nodes = []
    if (root == null) return [];
    let queue = [];
    queue.push(root);
    while(queue.length > 0) {
        const levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift();
            if (currentNode.left !== null) queue.push(currentNode.left);
            if (currentNode.right !== null) queue.push(currentNode.right);
            nodes.push(currentNode);
        }
    }

    let i = 0;
    while(i<nodes.length-1) {
        nodes[i].next = nodes[i+1];
        nodes[i].left = null;
        nodes[i].right = null;
        i++;
    }
    return;
  };
  
  
  var root = new TreeNode(12);
  root.left = new TreeNode(7);
  root.right = new TreeNode(1);
  root.left.left = new TreeNode(9);
  root.right.left = new TreeNode(10);
  root.right.right = new TreeNode(5);
  connect_level_order_siblings(root);
  
  root.print_level_order()