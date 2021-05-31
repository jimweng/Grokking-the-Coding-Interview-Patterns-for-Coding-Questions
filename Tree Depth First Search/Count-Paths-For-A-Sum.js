class TreeNode {

    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
    }
  };
  
  
  const count_paths = function(root, S) {
    const currentPath = [];
    return find_path_recursive(root, currentPath, S);
  };

  const find_path_recursive = function(root, currentPath, sum) {
    if (root === null) return 0;
    
    currentPath.push(root.value);
    let pathCount = 0, pathSum = 0;

    for (let i = currentPath.length-1; i >= 0; i--) {
        pathSum += currentPath[i];
        if (pathSum == sum) {
            pathCount += 1;
        }
    }

    pathCount += find_path_recursive(root.left, currentPath, sum);
    pathCount += find_path_recursive(root.right, currentPath, sum);


    return pathCount;
  }
  
  
  var root = new TreeNode(12)
  root.left = new TreeNode(7)
  root.right = new TreeNode(1)
  root.left.left = new TreeNode(4)
  root.right.left = new TreeNode(10)
  root.right.right = new TreeNode(5)
  console.log(`Tree has paths: ${count_paths(root, 11)}`)