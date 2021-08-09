/**
 *    補充：
 *      middle is the pivot we used to decide where the interval should go to.
 *      ONce middle could be changed after node creation, new coming interval may go to left after new middle
 *      Ex. 
 *          [8,20], middle is "14"                                                                  [8, 20, 14]
 *          node.left is [4, 13], node.right is [15,30]                                             /          \
 *                                                                                          [4, 13, 8.5]    [15, 30, 22.5]
 * 
 *          new interval [4, 16] comes, node is updated to [4, 20], with the new middle "12"        [4, 20, 12]
 *                                                                                                /             \
 *                                                                                          [4, 13, 8.5]    [15, 30, 22.5]
 *          
 *          [13, 16] comes, if we use the updated middle, interval [13, 16] go to node.right
 *          ,and update node.right tp [13,30], meanwhile, node.left is [4, 13]
 *          , there is overlap between node.left and node.right
 *          
 */

 class Interval {
    constructor(start, end, middle) {
        this.start = start;
        this.end = end;

        // new elements
        this.middle = middle;
        this.left = this.right = null;
    }

    get_interval() {
        return "[" + this.start + ", " + this.end + "]";
    }
}

const add = function(node, start, end) {
    // 用node.middle判斷要去 leftTree or rightTree
    if (end < node.middle) { 
        if (node.left) {
            add(node.left, start, end);
        } else {
            node.left = new Interval(start, end, (start + end) / 2);
        }
    } else if (start > node.middle) {
        if (node.right) {
            add(node.right, start, end);
        } else {
            node.right = new Interval(start, end, (start + end) / 2);
        }
    } else {
        node.start = Math.min(node.start, start);
        node.end = Math.max(node.end, end);
    }
}

const query = function(node) {
    if (!node) return [];

    // merge-sort
    const left_intervals = query(node.left);
    const right_intervals = query(node.right);
    const res = [];

    let inserted = false;

    for (let i = 0; i < left_intervals.length; i++) {
        if ( left_intervals[i][1] < node.start) {
            // 左節點.end < node.start 沒有重疊
            res.push(left_intervals[i])
        } else {
            res.push([Math.min(left_intervals[i][0], node.start), node.end]);
            inserted = true;
            break;
        }
    }

    if (!inserted) {
        res.push([node.start, node.end]);
    }

    for(let j = 0; j < right_intervals.length; j++) {
        if (right_intervals[j][0] <= node.end) {
            res[res.length-1][1] = Math.max(node.end, right_intervals[j][1])
        } else {
            res.push(right_intervals[j]);
        }
    }

    return res;
}

// main
const merge = function (intervals) {
    // 需要創造一個 root node
    let root = null;

    for (let i = 0; i < intervals.length; i ++) {
        const start = intervals[i].start;
        const end = intervals[i].end;
        if (!root) {
            // 多增加一個middle來決定要去leftTree or rightTree
            root = new Interval(start, end, (start + end) / 2);
        } else {
            // add TreeNode
            add(root, start, end);
        }

    }

    return query(root);
};

merged_intervals = merge([new Interval(1, 4), new Interval(2, 5), new Interval(7, 9)]);
result = "";
console.log('merged_intervals: ', merged_intervals)

merged_intervals = merge([new Interval(6, 7), new Interval(2, 4), new Interval(5, 9)]);
result = "";

console.log('merged_intervals: ', merged_intervals);


merged_intervals = merge([new Interval(1, 4), new Interval(2, 6), new Interval(3, 5)]);
result = "";
console.log('merged_intervals: ', merged_intervals);

merged_intervals = merge([new Interval(8, 20), new Interval(4, 13), new Interval(15, 30)]);
result = "";
console.log('merged_intervals: ', merged_intervals)
