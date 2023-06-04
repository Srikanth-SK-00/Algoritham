// Bubble Sort is a simple comparison-based sorting algorithm. It works by repeatedly swapping adjacent elements if they are in the wrong order, 
// gradually "bubbling" larger elements towards the end of the array. 
// It continues this process until the array is fully sorted.

// Here's how Bubble Sort works step by step:

// Start with an unsorted array of elements.
// Compare the first element with the second element. If the first element is greater than the second element, swap their positions.
// Move to the next pair of elements (second and third) and compare them. Again, swap their positions if they are in the wrong order.
// Repeat this process for each pair of adjacent elements in the array, continuously moving through the array from left to right.
// As a single pass through the array completes, the largest element will "bubble" up to the last position of the unsorted part of the array.
// Repeat steps 2-5 for the remaining unsorted part of the array until the entire array is sorted.
// The sorted array will have the smallest elements at the beginning and the largest elements at the end.
// Bubble Sort gets its name from the way larger elements "bubble" towards the end of the array through the swapping process. 
// However, it is not the most efficient sorting algorithm, especially for large arrays, as it has an average and worst-case time complexity of O(n^2). 
// Other sorting algorithms, such as QuickSort or MergeSort, are generally preferred for better performance.



const array=[1,14,2,10,3,11,9,4,12,5,12,6,15,7,3,8,];
var len=array.length;




// Basic Bubble Sort:
function basicBubbleSort(array) {
for(var i=0;i<len;i++)
{
    for(var j=0;j<len;j++)
    {
        if(array[i]<=array[j])
        {
            var t=array[i];
            array[i]=array[j];
            array[j]=t;
        }
    }
}
return array;
}


// Optimized Bubble Sort

function OptimizedbubbleSort(arr) {
    var len = arr.length;
    var swapped;
  
    do {
      swapped = false;
      for (var i = 0; i < len-1; i++) {
        if (arr[i] > arr[i + 1]) {
          // Swap elements
          var temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
  
    return arr;
  }
  
  const arr=[1,14,2,10,3,11,9,4,12,5,12,6,15,7,3,8,];


//   Recursive Bubble Sort

function RecursivebubbleSort(arr, n = arr.length) {
    if (n === 1) {
      return arr;
    }
  
    for (var i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap elements
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  
    return RecursivebubbleSort(arr, n - 1);
  }
  
console.log(basicBubbleSort(array));
console.log(OptimizedbubbleSort(array));
console.log(RecursivebubbleSort(array));