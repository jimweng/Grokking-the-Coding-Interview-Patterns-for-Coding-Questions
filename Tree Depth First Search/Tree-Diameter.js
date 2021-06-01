/**
 *  想法：
 *      1. DFS算出所有路徑，把最大的兩個相加。(x) 因為有可能共同parent是子樹
 *      2. 看了解答之後，要每個節點都算左右子樹高度
 * 
 */

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};

let maxDiameter = 0;

const find_diameter = (root) => {
    count_path(root);
    return maxDiameter;
}

const count_path = (root) => {
    if (root === null) return 0;

    const left_tree_height = count_path(root.left);
    const right_tree_height = count_path(root.right);

    if (left_tree_height !== 0 && right_tree_height !== 0) {
        const diameter = left_tree_height + right_tree_height + 1;
        maxDiameter = Math.max(maxDiameter, diameter);
    }

    return Math.max(left_tree_height, right_tree_height) + 1;
}

var root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.right.left = new TreeNode(5)
root.right.right = new TreeNode(6)
console.log(`Tree Diameter: ${find_diameter(root)}`)
root.left.left = null
root.right.left.left = new TreeNode(7)
root.right.left.right = new TreeNode(8)
root.right.right.left = new TreeNode(9)
root.right.left.right.left = new TreeNode(10)
root.right.right.left.left = new TreeNode(11)
console.log(`Tree Diameter: ${find_diameter(root)}`)