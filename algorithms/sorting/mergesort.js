// Merge Sort is a popular and efficient comparison-based sorting algorithm. It follows the divide-and-conquer approach to sort an array by dividing it into smaller subarrays, sorting them recursively, and then merging them back together to produce a sorted result. The algorithm repeatedly divides the input array in half until each subarray contains only one element. Then, it merges the subarrays by comparing and combining their elements in a sorted manner. This process continues until the entire array is sorted.

// Here's a step-by-step explanation of the Merge Sort algorithm:

// 1. Divide the unsorted array into two halves.
// 2. Recursively sort each half by applying the Merge Sort algorithm.
// 3. Merge the sorted subarrays back together:
//    - Compare the elements from the two subarrays, taking the smaller element and placing it in a new merged array.
//    - Move to the next element in the subarray from which the smaller element was taken.
//    - Repeat the comparison and placement until all elements from both subarrays are merged into the new array.
//    - If one subarray still has remaining elements, append them to the merged array.
// 4. Repeat the above steps until the entire array is sorted.

// Here's an example implementation of Merge Sort in JavaScript:


function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  // Divide the array into two halves
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
console.log(right,left);
  // Recursively sort the two halves
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // Merge the sorted halves
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  let merged = [];
  let leftIdx = 0;
  let rightIdx = 0;

  // Compare and merge the elements from the two subarrays
  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] < right[rightIdx]) {
      merged.push(left[leftIdx]);
      leftIdx++;
    } else {
      merged.push(right[rightIdx]);
      rightIdx++;
    }
  } 

  // Append any remaining elements from the left subarray
  while (leftIdx < left.length) {
    merged.push(left[leftIdx]);
    leftIdx++;
  }

  // Append any remaining elements from the right subarray
  while (rightIdx < right.length) {
    merged.push(right[rightIdx]);
    rightIdx++;
  }

  return merged;
}

// Example usage:
var array = [5, 3, 8,4,2];
console.log(mergeSort(array)); // Output: [2, 3, 4, 5, 8]

