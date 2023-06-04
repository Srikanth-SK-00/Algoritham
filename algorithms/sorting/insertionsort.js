// Insertion Sort is a simple comparison-based sorting algorithm that builds the final sorted array one element at a time. It works by dividing the input array into a sorted part and an unsorted part. Initially, the sorted part contains only the first element, and the rest of the elements are considered part of the unsorted part. The algorithm iterates through the unsorted part, comparing each element with the elements in the sorted part and shifting the elements in the sorted part to the right until it finds the correct position for the current element. This process continues until the entire array is sorted.

// Here's a step-by-step explanation of the Insertion Sort algorithm:

// 1. Start with an unsorted array.
// 2. Consider the first element as the sorted part.
// 3. Iterate through the remaining elements of the array, starting from the second element.
// 4. Compare each element with the elements in the sorted part.
// 5. Shift the elements in the sorted part to the right until the correct position for the current element is found.
// 6. Insert the current element into its correct position in the sorted part.
// 7. Repeat steps 3-6 until all elements are considered and the entire array is sorted.

// Insertion Sort is an in-place sorting algorithm, meaning it does not require additional memory to perform the sorting. It has a time complexity of O(n^2) in the worst case, making it less efficient than more advanced algorithms like Merge Sort or Quick Sort. However, Insertion Sort performs well on small input sizes or partially sorted arrays. It also has the advantage of being stable, meaning it maintains the relative order of elements with equal values.

// Insertion Sort is often used in practice when the array is already partially sorted or when the input size is small. It is also used as a sub-routine in other algorithms, such as Shell Sort and Timsort.




function insertionSort(arr) {
    var len = arr.length;
  
    for (var i = 1; i < len; i++) {
      var key = arr[i];
      var j = i - 1;
  
      // Move elements greater than the key to the right
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      // Place the key in its correct position
      arr[j + 1] = key;
    }
  
    return arr;
  }
  
  // Example usage:
  var array = [5, 3, 8, 4, 2];
  console.log(insertionSort(array)); // Output: [2, 3, 4, 5, 8]
  