function shuffle(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        let rand = Math.floor(Math.random() * (i + 1));
        [array[i], array[rand]] = [array[rand], array[i]];
    }
}

function selectionSort(array, log) {
    let max, maxIndex;
    for (let i = array.length - 1; i >= 0; i--) {
        max = array[0];
        maxIndex = 0;
        for (let j = 1; j <= i; j++) {
            //比較  
            log.push({ x: j, y: maxIndex, type: 'compare', line: 7 });
            //              
            if (array[j] >= max) {
                max = array[j];
                maxIndex = j;
            }
        }
        //入れ替え
        log.push({ x: i, y: maxIndex, type: 'exchange', line: 12 });
        //        
        [array[maxIndex], array[i]] = [array[i], array[maxIndex]];
    }
}

function insertSort(array, log) {
    let x;
    for (let i = 1; i < array.length; i++) {
        x = array[i];
        j = i;
        //入れ替え
        log.push({ x: i, y: 10, type: 'exchange', line: 4 });
        //        
        while (true) {
            //比較
            log.push({ x: 10, y: j - 1, type: 'compare', line: 6 });
            //              
            if ((array[j - 1] > x) && (j > 0)) {
                //入れ替え
                log.push({ x: j, y: j - 1, type: 'exchange', line: 7 });
                //        
                array[j] = array[j - 1];
                j--;
            } else {
                break;
            }
        }
        console.log(log);
        //入れ替え
        log.push({ x: j, y: 10, type: 'exchange', line: 10 });
        //        
        array[j] = x;
    }
}

function quickSort(array, start, end, log) {
    let pivot = array[Math.floor((start + end) / 2)];
    let pivot_position = Math.floor((start + end) / 2);
    let left = start;
    let right = end;

    while (true) {
        while (true) {
            //比較
            log.push({ x: left, y: pivot_position, type: 'compare', line: 7 });
            //
            if (array[left] < pivot) {
                left++;
            } else {
                break;
            }
        }
        while (true) {
            //比較
            log.push({ x: pivot_position, y: right, type: 'compare', line: 10 });
            //
            if (pivot < array[right]) {
                right--;
            } else {
                break;
            }
        }
        //比較
        log.push({ x: right, y: left, type: 'compare', line: 13 });
        //        
        if (right <= left) {
            break;
        }
        //入れ替え
        log.push({ x: left, y: right, type: 'exchange', line: 16 });
        //
        [array[left], array[right]] = [array[right], array[left]];
        right--;
    }

    //比較
    log.push({ x: start, y: left -1, type: 'compare', line: 20 });
    //    
    if (start < left - 1) {
        //再帰
        log.push({ x: start, y: left - 1, type: 'recursion', line: 21 })
        //
        quickSort(array, start, left - 1, log);
    }
    //比較
    log.push({ x: right + 1, y: end, type: 'compare', line: 23 });
    //    
    if (right + 1 < end) {
        //再帰
        log.push({ x: right + 1, y: end, type: 'recursion', line: 24 })
        //
        quickSort(array, right + 1, end, log);
    }
}

