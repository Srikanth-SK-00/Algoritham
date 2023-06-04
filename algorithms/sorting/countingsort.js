function countingSort(arr) {
    const n = arr.length;
  
    // Find the maximum element in the array
    const max = Math.max(...arr);
  
    // Create a count array with size max+1 and initialize with 0
    const count = new Array(max + 1).fill(0);
  
    // Count the occurrences of each element in the input array
    for (let i = 0; i < n; i++) {
      count[arr[i]]++;
    }
  
    // Calculate the cumulative count
    for (let i = 1; i <= max; i++) {
      count[i] += count[i - 1];
    }
  
    // Create the output array
    const output = new Array(n);
  
    // Place the elements in the output array according to the count array
    for (let i = n - 1; i >= 0; i--) {
      output[count[arr[i]] - 1] = arr[i];
      count[arr[i]]--;
    }
  
    // Copy the sorted elements from the output array to the input array
    for (let i = 0; i < n; i++) {
      arr[i] = output[i];
    }
  
    return arr;
  }
  
  // Example usage:
  const array = [4, 2, 2, 8, 3, 3, 1];
  const sortedArray = countingSort(array);
  console.log(sortedArray); // Output: [1, 2, 2, 3, 3, 4, 8]
  