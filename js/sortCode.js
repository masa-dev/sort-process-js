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

let bubbleSortCode =
    `function bubbleSort(array) {
    let arrayLength = array.length;
    for (let i = 0; i < arrayLength - 1; i++) {
        for (let j = arrayLength; j >= i + 1; j--) {
            if (array[j] < array[j - 1]) {
                [array[j], array[j - 1]] = [array[j - 1], array[j]];
            }
        }
    }
}`;

let shakerSortCode =
    `function shakerSort(array) {
    let start = 0;
    let end = array.length - 1;

    while (true) {
        for (let i = start; i < end; i++) {
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
            }
        }
        end--;
        if (start === end) break;
        for (let i = end; i > start; i--) {
            if (array[i - 1] > array[i]) {
                [array[i - 1], array[i]] = [array[i], array[i - 1]];
            }
        }
        start++;
        if (start === end) break;
    }
}`

let bogoSortCode =
    `function bogoSort(array) {
    while (true) {
        for (let i = array.length - 1; i >= 0; i--) {
            let rand = Math.floor(Math.random() * (i + 1));
            [array[i], array[rand]] = [array[rand], array[i]];
        }
        if (sortCheck(array)) {
            break;
        }
    }
}

function sortCheck(array) {
    for (let i = 1; i < array.length - 1; i++) {
        if (array[i - 1] > array[i]) {
            return false;
        }
    }
    return true;
}`