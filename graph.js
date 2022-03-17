export default class Graph {
  constructor(n) {
    this.numberOfVertices = n;
    this.adj = new Map();
  }

  addAdj(v, w) {
    if(v > this.numberOfVertices || w > this.numberOfVertices) {
      return false;
    }

    if(!this.adj.has(v)) {
      this.adj.set(v, new Set([ w ]));
    } else {
      this.adj.get(v).add(w);
    }

    if(!this.adj.has(w)) {
      this.adj.set(w, new Set([ v ]));
    } else {
      this.adj.get(w).add(v);
    }

    return true;
  }

  addVertices(number) {
    this.numberOfVertices += number;
  }

  bfs(v) {
    const queue = [ v ];
    const graph = [];

    const visited = new Map();
    visited.set(v, 0);

    while(queue.length > 0) {
      const dqd = queue.shift();

      this.adj.get(dqd).forEach((e) => {
        if(!visited.has(e)) {
          queue.push(e);
          visited.set(e, visited.get(dqd) + 1);
        }
      })

      
      graph.push(dqd);
    }

    return graph;
  }

  dfs(v) {
    const visited = [];
    let level = 0;
    const tree = [];

    const dfsRecursive = (v, visited, level) => {
      if(visited.some((e) => e === v)) {
        return;
      }
  
      visited.push(v);
      tree.push(v);
  
      this.adj.get(v).forEach((e) => {
        dfsRecursive(e, visited, level + 1);
      });

      return tree;
    } 

    return dfsRecursive(v, visited, level);
  }
}