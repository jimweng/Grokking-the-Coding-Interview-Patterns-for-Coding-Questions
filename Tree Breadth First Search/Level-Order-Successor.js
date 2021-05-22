/**
 *      想法：
 *          1. BFS，若是該level最後一個element，就要看下個level第一個元素
 *          2. Second thought，不就全部排出來，直接搜尋就好了嗎..
 *          3. 看了解答，如果先if left, if right，最後確認currentNode是key，直接return queue最前端的value就是解答了
 */

class TreeNode {

    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
    }
  };
  
  
  const find_successor = function(root, key) {
    let target = 0;
    // 先寫BFS
    const queue = [], result = [];
    queue.push(root);
    while (queue.length > 0) {
        const levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift();
            result.push(currentNode.value);
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
            // find the key
            if (currentNode.value == key) {
                return { value: queue.shift().value };
            }
        }
    }

  };
  
  
  var root = new TreeNode(12)
  root.left = new TreeNode(7)
  root.right = new TreeNode(1)
  root.left.left = new TreeNode(9)
  root.right.left = new TreeNode(10)
  root.right.right = new TreeNode(5)
  result = find_successor(root, 12)
  if (result != null)
    console.log(result.value)
  result = find_successor(root, 9)
  if (result != null)
    console.log(result.value)