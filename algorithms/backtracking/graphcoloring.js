function graphColoring(graph) {
    const n = graph.length;
    const colors = new Array(n); // Array to store the assigned colors
  
    // Assign the first color to the first vertex
    colors[0] = 0;
  
    // Assign colors to the remaining vertices
    for (let i = 1; i < n; i++) {
      colors[i] = -1; // Initialize the color as not assigned
  
      // Array to keep track of the used colors by adjacent vertices
      const usedColors = new Array(n).fill(false);
  
      // Mark the colors used by adjacent vertices
      for (const j of graph[i]) {
        if (colors[j] !== -1) {
          usedColors[colors[j]] = true;
        }
      }
  
      // Find the first unused color for the current vertex
      for (let color = 0; color < n; color++) {
        if (!usedColors[color]) {
          colors[i] = color;
          break;
        }
      }
    }
  
    return colors;
  }
  
  // Example usage:
  const adjacencyList = [
    [1, 2, 3], // Vertex 0 is adjacent to vertices 1, 2, and 3
    [0, 2],    // Vertex 1 is adjacent to vertices 0 and 2
    [0, 1, 3], // Vertex 2 is adjacent to vertices 0, 1, and 3
    [0, 2] ,
    [0,1,2,3,6]   // Vertex 3 is adjacent to vertices 0 and 2
  ];
  
  const colors = graphColoring(adjacencyList);
  console.log(colors);
  