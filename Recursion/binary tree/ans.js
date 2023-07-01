class TreeNode {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function constructBinaryTree(s) {
  if (!s.length) {
    return null;
  }

  // Find the value of the root node
  let i = 0;
  while (i < s.length && s[i] !== '(') {
    i++;
  }
  const rootVal = parseInt(s.slice(0, i));
  const root = new TreeNode(rootVal);

  // Find the index of the start and end of the left subtree
  let count = 0;
  let start = i;
  while (i < s.length) {
    if (s[i] === '(') {
      count++;
    } else if (s[i] === ')') {
      count--;
      if (count === 0) {
        break;
      }
    }
    i++;
  }

  // Recursive calls to construct left and right subtrees
  root.left = constructBinaryTree(s.slice(start + 1, i));
  root.right = constructBinaryTree(s.slice(i + 2, -1));

  return root;
}
