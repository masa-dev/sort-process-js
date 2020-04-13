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
            log.push({ x: j, y: maxIndex, type: 'compare' });
            //              
            if (array[j] >= max) {
                max = array[j];
                maxIndex = j;
            }
        }
        //入れ替え
        log.push({ x: i, y: maxIndex, type: 'exchange' });
        //        
        [array[maxIndex], array[i]] = [array[i], array[maxIndex]];
    }
}

function insertSort(array, log) {
    let x;
    for (let i = 1; i < array.length; i++) {
        x = array[i];
        j = i;
        while (true) {
            //比較  
            log.push({ x: i, y: j - 1, type: 'compare' });
            //              
            if ((array[j - 1] > x) && (j > 0)) {
                //入れ替え
                log.push({ x: j, y: j - 1, type: 'exchange' });
                //        

                array[j] = array[j - 1];
                j--;
            } else {
                break;
            }
        }
        array[j] = x;
    }
}