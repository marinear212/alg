import _ from 'lodash';
import Graph from './graph.js';
import { Tree, TreeNode } from './binarytree.js';
import { LinkedList, ListNode } from './linkedlist.js';
import { mergeSort, quickSort, bubbleSort } from './sort.js';

const graphTest = () => {
  const graph = new Graph(5);
  graph.addAdj(1, 2);
  graph.addAdj(1, 3);
  graph.addAdj(3, 4);
  graph.addAdj(3, 5);
  graph.addAdj(2, 5);
  
  console.log(graph.bfs(1));
  console.log(graph.bfs(2));
  console.log(graph.bfs(3));
  console.log(graph.bfs(4));
  console.log(graph.bfs(5));
  
  console.log(graph.dfs(2));
}

const treeTest = () => {
  const root = new TreeNode(1);
  root.right = new TreeNode(3);
  
  
  
  const node = new TreeNode(2);
  node.left = new TreeNode(6);
  node.right = new TreeNode(7);
  
  root.left = node;
  
  
  
  const tree = new Tree(root);
  
  console.log(tree.bfs());
  console.log(tree.dfs());
  console.log(tree.dfsIterative());
}

const linkedListTest = () => {
  const list = new LinkedList(new ListNode(1));

  list.add(3);

  console.log(list);
}

const sortTest = () => {
  const array = [4, 3, 8, 9, 6, 2, 7, 1, 5];

  //console.log(bubbleSort(array));

  console.log(quickSort(array));
}

sortTest();