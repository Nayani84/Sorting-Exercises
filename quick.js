/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, start = 0, end = arr.length - 1){
    // Use the first element as the pivot
    let pivot = arr[start];
    let pivotIdx = start;

    for (let i = start + 1; i <= end; i++) {
        if (arr[i] < pivot) {
            pivotIdx++;
            [arr[i], arr[pivotIdx]] = [arr[pivotIdx], arr[i]];
        }
    }

    [arr[start], arr[pivotIdx]] = [arr[pivotIdx], arr[start]];

    return pivotIdx;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        //  Find the pivot index
        let pivotIdx = pivot(arr, left, right);

        // Recursively sort elements to the left of the pivot
        quickSort(arr, left, pivotIdx - 1);

        // Recursively sort elements to the right of the pivot
        quickSort(arr, pivotIdx + 1, right);

    }
    return arr;
}

module.exports = { pivot, quickSort };