// Selection Sort is a simple comparison-based sorting algorithm. It works by dividing the input array into two parts: 
// the sorted part and the unsorted part. The algorithm repeatedly finds the minimum element from the unsorted part and swaps it with the first element of the unsorted part. This process continues until the entire array is sorted.

// Here's how Selection Sort works step by step:

// 1. Start with an unsorted array of elements.
// 2. Find the smallest element in the unsorted part of the array.
// 3. Swap the smallest element with the first element of the unsorted part.
// 4. Move the boundary of the sorted part one element to the right.
// 5. Repeat steps 2-4 until the entire array is sorted.

// The selection sort algorithm always selects the smallest (or largest, depending on the sorting order) element from the unsorted part and places it at the correct position in the sorted part. This process is repeated until the array is fully sorted.

// Selection Sort has a time complexity of O(n^2), making it inefficient for large arrays. However, it has the advantage of performing a limited number of swaps, which can be beneficial in scenarios where the cost of swapping elements is high compared to the cost of comparisons.

// While Selection Sort is not the most efficient sorting algorithm, it is simple to understand and implement, making it suitable for educational purposes or small input sizes. For larger arrays, more efficient sorting algorithms like QuickSort, MergeSort, or HeapSort are generally preferred.



const array=[1,14,2,10,3,11,9,4,12,5,12,6,15,7,3,8,];
var len=array.length;


// Basic Selection Sort

function basicselectionSort(arr) {
    var len = arr.length;
  
    for (var i = 0; i < len - 1; i++) {
      var minIndex = i;
  
      // Find the index of the minimum element in the unsorted part of the array
      for (var j = i + 1; j < len; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
  
      // Swap the minimum element with the first unsorted element
      if (minIndex !== i) {
        var temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
      }
    }
  
    return arr;
  }

//   Recursive Selection Sort:
  
  function recursiveselectionSort(arr, start = 0) {
    var len = arr.length;
  
    if (start >= len - 1) {
      return arr;
    }
  
    var minIndex = start;
  
    // Find the index of the minimum element in the unsorted part of the array
    for (var i = start + 1; i < len; i++) {
      if (arr[i] < arr[minIndex]) {
        minIndex = i;
      }
    }
  
    // Swap the minimum element with the first unsorted element
    if (minIndex !== start) {
      var temp = arr[start];
      arr[start] = arr[minIndex];
      arr[minIndex] = temp;
    }
  
    // Recursively sort the remaining part of the array
    return recursiveselectionSort(arr, start + 1);
  }
  

  console.log(basicselectionSort(array));
  console.log(recursiveselectionSort(array));