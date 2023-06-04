function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        return mid; // Found the target, return the index
      } else if (arr[mid] < target) {
        left = mid + 1; // Target is in the right half
      } else {
        right = mid - 1; // Target is in the left half
      }
    }
  
    return -1; // Target not found
  }
  
  // Example usage:
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const target = 6;
  const index = binarySearch(array, target);
  console.log(index); // Output: 5
  