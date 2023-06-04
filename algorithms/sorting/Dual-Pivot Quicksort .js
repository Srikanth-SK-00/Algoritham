function dualPivotQuicksort(arr, left, right) {
  if (left < right) {
    if (arr[left] > arr[right]) {
      swap(arr, left, right); // Swap the elements if the left pivot is greater than the right pivot
    }

    let p = arr[left]; // Left pivot
    let q = arr[right]; // Right pivot

    let i = left + 1;
    let k = right - 1;
    let j = i;

    while (j <= k) {
      if (arr[j] < p) {
        swap(arr, j, i); // Elements smaller than the left pivot go to the left partition
        i++;
      } else if (arr[j] >= q) {
        while (arr[k] > q && j < k) {
          k--; // Elements greater than the right pivot go to the right partition
        }
        swap(arr, j, k);
        k--;

        if (arr[j] < p) {
          swap(arr, j, i); // Elements that are still smaller than the left pivot go to the left partition
          i++;
        }
      }
      j++;
    }

    i--;
    k++;

    swap(arr, left, i); // Place the left pivot in its final position
    swap(arr, right, k); // Place the right pivot in its final position

    dualPivotQuicksort(arr, left, i - 1); // Recursively sort the left partition
    dualPivotQuicksort(arr, i + 1, k - 1); // Recursively sort the middle partition
    dualPivotQuicksort(arr, k + 1, right); // Recursively sort the right partition
  }
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// Example usage:
const array = [5, 3, 8, 4, 2];
dualPivotQuicksort(array, 0, array.length - 1);
console.log(array); // Output: [2, 3, 4, 5, 8]
