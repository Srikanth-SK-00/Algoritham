// Radix Sort implementation
function radixSort(arr) {
    // Find the maximum number to determine the number of digits
    const max = Math.max(...arr);
  
    // Perform counting sort for every digit
    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
      countingSort(arr, exp);
    }
  
    return arr;
  }
  
  // Counting Sort for a specific digit
  function countingSort(arr, exp) {
    const n = arr.length;
    const output = new Array(n).fill(0);
    const count = new Array(10).fill(0);
  
    // Store the count of occurrences in count[]
    for (let i = 0; i < n; i++) {
      const digit = Math.floor(arr[i] / exp) % 10;
      count[digit]++;
    }
  
    // Change count[i] so that count[i] contains the actual
    // position of this digit in output[]
    for (let i = 1; i < 10; i++) {
      count[i] += count[i - 1];
    }
  
    // Build the output array
    for (let i = n - 1; i >= 0; i--) {
      const digit = Math.floor(arr[i] / exp) % 10;
      output[count[digit] - 1] = arr[i];
      count[digit]--;
    }
  
    // Copy the output array to arr[] to update the original array
    for (let i = 0; i < n; i++) {
      arr[i] = output[i];
    }
  }
  
  // Example usage:
  const array = [170, 45, 75, 90, 802, 24, 2, 66];
  const sortedArray = radixSort(array);
  console.log(sortedArray); // Output: [2, 24, 45, 66, 75, 90, 170, 802]
  