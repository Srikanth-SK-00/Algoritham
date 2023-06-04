function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i; // Found the target, return the index
      }
    }
    return -1; // Target not found
  }
  
  // Example usage:
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const target = 6;
  const index = linearSearch(array, target);
  console.log(index); // Output: 5
  