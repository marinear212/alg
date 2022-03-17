export class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class Tree {
  constructor(root) {
    this.root = root;
  }

  bfs() {
    const queue = [ this.root ];
    const tree = [];

    while(queue.length > 0) {
      const dqd = queue.shift();
      
      if(dqd.left) {
        queue.push(dqd.left);
      }

      if(dqd.right) {
        queue.push(dqd.right);
      }

      tree.push(dqd.value);
    }

    return tree;
  }

  dfs() {
    const tree = [];

    const dfsRecursive = (node) => {
      if(!node) {
        return;
      }

      tree.push(node.value);

      dfsRecursive(node.left);
      dfsRecursive(node.right);

      return tree;
    }

    return dfsRecursive(this.root);
  }

  dfsIterative() {
    const stack = [ this.root ];    
    const tree = [];

    while(stack.length > 0) {
      const dqd = stack.pop();
      
      if(dqd.right) {
        stack.push(dqd.right);
      }

      if(dqd.left) {
        stack.push(dqd.left);
      }

      tree.push(dqd.value);
    }

    return tree;
  }
}