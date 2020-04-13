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
}`
