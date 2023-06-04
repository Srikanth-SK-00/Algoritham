function findHamiltonianCycle(graph) {
    const n = graph.length;
    const visited = new Array(n).fill(false);
    const path = [];
  
    function backtrack(vertex, count) {
      if (count === n && graph[vertex][0]) {
        // Hamiltonian cycle found
        path.push(vertex);
        return true;
      }
  
      visited[vertex] = true;
      path.push(vertex);
  
      for (let next = 0; next < n; next++) {
        if (!visited[next] && graph[vertex][next]) {
          if (backtrack(next, count + 1)) {
            return true;
          }
        }
      }
  
      visited[vertex] = false;
      path.pop();
  
      return false;
    }
  
    if (backtrack(0, 1)) {
      return path;
    } else {
      return "No Hamiltonian cycle found";
    }
  }
  
  // Example usage:
  const adjacencyMatrix = [
    [0, 1, 0, 1, 0],
    [1, 0, 1, 1, 1],
    [0, 1, 0, 0, 1],
    [1, 1, 0, 0, 1],
    [0, 1, 1, 1, 0]
  ];
  
  const hamiltonianCycle = findHamiltonianCycle(adjacencyMatrix);
  console.log(hamiltonianCycle);
  