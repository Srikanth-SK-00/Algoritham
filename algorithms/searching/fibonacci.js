function fibonacciSearch(arr, x) {
  const n = arr.length;

  // Initialize Fibonacci numbers
  let fib2 = 0; // (k-2)th Fibonacci number
  let fib1 = 1; // (k-1)th Fibonacci number
  let fib = fib2 + fib1; // kth Fibonacci number

  // Find the smallest Fibonacci number greater than or equal to the array length
  while (fib < n) {
    fib2 = fib1;
    fib1 = fib;
    fib = fib2 + fib1;
  }

  // Initialize the offset and comparison indices
  let offset = -1;
  let cmpIdx;

  // Perform the search
  while (fib > 1) {
    // Check if fib2 is a valid index
    cmpIdx = Math.min(offset + fib2, n - 1);

    // If x is greater than the value at cmpIdx, move the offset to the right
    if (arr[cmpIdx] < x) {
      fib = fib1;
      fib1 = fib2;
      fib2 = fib - fib1;
      offset = cmpIdx;
    }
    // If x is smaller than the value at cmpIdx, move the offset to the left
    else if (arr[cmpIdx] > x) {
      fib = fib2;
      fib1 = fib1 - fib2;
      fib2 = fib - fib1;
    }
    // If x is found, return the index
    else {
      return cmpIdx;
    }
  }

  // Check the last element in the array
  if (fib1 === 1 && arr[offset + 1] === x) {
    return offset + 1;
  }

  // Element not found
  return -1;
}

// Example usage:
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const element = 6;
const index = fibonacciSearch(array, element);
console.log(index); // Output: 5
