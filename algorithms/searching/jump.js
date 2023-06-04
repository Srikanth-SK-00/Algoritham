function jumpSearch(arr, target) {
    const n = arr.length;
    const blockSize = Math.floor(Math.sqrt(n));
    let start = 0;
    let end = blockSize;
  
    // Find the block containing the target
    while (end < n && arr[end] <= target) {
      start = end;
      end += blockSize;
      if (end > n - 1) {
        end = n;
      }
    }
  
    // Perform linear search within the identified block
    for (let i = start; i < end; i++) {
      if (arr[i] === target) {
        return i; // Found the target, return the index
      }
    }
  
    return -1; // Target not found
  }
  
  // Example usage:
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const target = 6;
  const index = jumpSearch(array, target);
  console.log(index); // Output: 5
  