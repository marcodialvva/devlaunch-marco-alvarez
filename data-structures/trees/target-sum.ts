/* 
Given the root of a binary tree and an interger targetSum, return true if the tree has a root-to-leaf 
path such that adding up all the values along the path equals targetSum. A leaf is a node with no children.
For example, given the following binary tree:
        5
       / \
      4   8
     /   / \
    11  13  4
   / \      \
  7   2      1
Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
Output: true
*/

class TreeNode1 {
    value: number | null;
    left: TreeNode1 | null;
    right: TreeNode1 | null;

    constructor(value?: number, left?: TreeNode1 | null, right?: TreeNode1 | null) {
        this.value = value ?? 0;
        this.left = left ?? null;
        this.right = right ?? null;
    }
}

class BinaryTree1 {
    root: TreeNode1 | null

    constructor() {
        this.root = null;
    }

}

const root = new TreeNode1(5,
    new TreeNode1(4,
        new TreeNode1(11,
            new TreeNode1(7),
            new TreeNode1(2)
        )
    ),
    new TreeNode1(8,
        new TreeNode1(13),
        new TreeNode1(4,
            null,
            new TreeNode1(1)
        )
    )
)

function hasPathSum (root: TreeNode1 | null, targetSum: number ): boolean {

    
    
    if(!root) 
    return false;

    if (!root.left && !root.right && root.value === targetSum ) return true;
            
      const newTarget = targetSum - root.value!
    
      return hasPathSum (root.left, newTarget) || hasPathSum (root.right, newTarget) 



   
}


