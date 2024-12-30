function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentaVal = arr[i];
        let j = i - 1;

        while(j >= 0 && arr[j] > currentaVal) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = currentaVal;
    }
    return arr;
}

module.exports = insertionSort;