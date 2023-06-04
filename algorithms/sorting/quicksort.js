function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const pivot = arr[arr.length - 1]; // Choose the last element as the pivot
    const left = [];
    const right = [];
  
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]); // Elements smaller than pivot go to the left
      } else {
        right.push(arr[i]); // Elements greater than or equal to pivot go to the right
      }
    }
  
    return [...quickSort(left), pivot, ...quickSort(right)]; // Recursively sort left and right subarrays
  }
  
  // Example usage:
  const array = [5, 3, 8, 4, 2];
  const sortedArray = quickSort(array);
  console.log(sortedArray); // Output: [2, 3, 4, 5, 8]
  