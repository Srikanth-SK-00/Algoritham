function heapSort(arr) {
    const n = arr.length;
  console.log(Math.floor(n/2))
    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(arr, n, i);
    }
  
    // Extract elements from the heap
    for (let i = n - 1; i > 0; i--) {
      // Swap the root (maximum element) with the last element
      swap(arr, 0, i);
  
      // Heapify the reduced heap
      heapify(arr, i, 0);
    }
  
    return arr;
  }
  
  function heapify(arr, n, i) {
    let largest = i; // Initialize the largest as root
    const left = 2 * i + 1;
    const right = 2 * i + 2;
  
    // If left child is larger than root
    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }
  
    // If right child is larger than the largest so far
    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }
  
    // If the largest is not the root
    if (largest !== i) {
      swap(arr, i, largest);
  
      // Recursively heapify the affected sub-tree
      heapify(arr, n, largest);
    }
  }
  
  function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  
  // Example usage:
  const array = [5, 3, 8, 4, 2];
  const sortedArray = heapSort(array);
  console.log(sortedArray); // Output: [2, 3, 4, 5, 8]
  