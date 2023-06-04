function bucketSort(arr, bucketSize = 5) {
    const n = arr.length;
  
    if (n === 0) {
      return arr;
    }
  
    // Find the minimum and maximum values in the array
    let minValue = arr[0];
    let maxValue = arr[0];
    for (let i = 1; i < n; i++) {
      if (arr[i] < minValue) {
        minValue = arr[i];
      } else if (arr[i] > maxValue) {
        maxValue = arr[i];
      }
    }
  
    // Calculate the number of buckets needed
    const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    const buckets = new Array(bucketCount);
  
    // Initialize empty buckets
    for (let i = 0; i < bucketCount; i++) {
      buckets[i] = [];
    }
  
    // Assign elements to their respective buckets
    for (let i = 0; i < n; i++) {
      const bucketIndex = Math.floor((arr[i] - minValue) / bucketSize);
      buckets[bucketIndex].push(arr[i]);
    }
  
    // Sort each bucket and concatenate the sorted buckets
    const sortedArray = [];
    for (let i = 0; i < bucketCount; i++) {
      insertionSort(buckets[i]); // Or use any other sorting algorithm
      sortedArray.push(...buckets[i]);
    }
  
    return sortedArray;
  }
  
  // Insertion Sort (or any other sorting algorithm) to sort the individual buckets
  function insertionSort(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
      const key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = key;
    }
  }
  
  // Example usage:
  const array = [4, 3, 8, 2, 5, 1, 7, 6];
  const sortedArray = bucketSort(array);
  console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
  