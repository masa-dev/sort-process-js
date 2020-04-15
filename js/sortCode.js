let selectionSortCode =
    `function selectionSort(array) {
    let max, maxIndex;
    for (let i = array.length - 1; i >= 0; i--) {
        max = array[0];
        maxIndex = 0;
        for (let j = 1; j <= i; j++) {
            if (array[j] >= max) {
                max = array[j];
                maxIndex = j;
            }
        }
        [array[maxIndex], array[i]] = [array[i], array[maxIndex]];
    }
}`;

let insertSortCode =
    `function insertSort(array) {
    let x;
    for (let i = 1; i < array.length; i++) {
        x = array[i];
        j = i;
        while ((array[j - 1] > x) && (j > 0)) {
            array[j] = array[j - 1];
            j--;
        }
        array[j] = x;
    }
}`;

let quickSortCode =
    `function quickSort(array, start, end) {
    let pivot = array[Math.floor((start + end) / 2)];
    let left = start;
    let right = end;

    while (true) {
        while (array[left] < pivot) {
            left++;
        }
        while (pivot < array[right]) {
            right--;
        }
        if (right <= left) {
            break;
        }
        [array[left], array[right]] = [array[right], array[left]];
        right--;
    }

    if (start < left - 1) {
        quickSort(array, start, left - 1);
    }
    if (right + 1 < end) {
        quickSort(array, right + 1, end);
    }
}`;
