console.log('before');

const wait = (sec) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, sec * 1000);
        //setTimeout(() => {reject(new Error("エラー！"))}, sec*1000);
    });
};

async function main() {
    try {
        await wait(10); // ここで10秒間止まります

        console.log('yeah');
        // ここに目的の処理を書きます。

    } catch (err) {
        console.error(err);
    }
}

main();

console.log('after');

//////////////////////////////////////////////////////

let sortLog = [];
let array = [8, 0, 4, 3, 5, 9, 7, 6, 1, 2];

function selectionSort(array) {
    let max, maxIndex;
    for (let i = array.length - 1; i >= 0; i--) {
        max = array[0];
        maxIndex = 0;
        for (let j = 1; j <= i; j++) {
            //比較
            sortLog.push({ x: j, y: maxIndex, type: 'compare' });
            //
            if (array[j] >= max) {
                max = array[j];
                maxIndex = j;
            }
        }
        //入れ替え
        sortLog.push({ x: i, y: maxIndex, type: 'exchange' });
        //
        [array[maxIndex], array[i]] = [array[i], array[maxIndex]];
    }
}

selectionSort(array);

console.log(sortLog);

///////////////////////////////////////////////////////

let sortLog = [];
let count = [];
let array = [8, 0, 4, 3, 5, 9, 7, 6, 1, 2];

function add(addNum) {
    count.push(addNum);
}

function selectionSort(array) {
    add(1)
    let max, maxIndex; add(2)
    for (let i = array.length - 1; i >= 0; i--) {
        add(3)
        max = array[0]; add(4)
        maxIndex = 0; add(5)
        for (let j = 1; j <= i; j++) {
            add(6)
            //比較  
            sortLog.push({ x: j, y: maxIndex, type: 'compare' });
            //  
            if (array[j] >= max) {
                add(7)
                max = array[j]; add(8)
                maxIndex = j; add(9)
            }
        }
        //入れ替え
        sortLog.push({ x: i, y: maxIndex, type: 'exchange' });
        //
        [array[maxIndex], array[i]] = [array[i], array[maxIndex]]; add(12)
    }
}

selectionSort(array);

console.log(sortLog);
console.log(count);

/////////////////////////////////////////////////////////

//id変更
$('#element-1').attr('id', 'elemeeeeeeent');


let i = 0;
setint = setInterval(() => {
    exchangePlace(i, i + 1);
    if (i == 8) {
        clearInterval(setint);
    }
    console.log(i);
    i++;
}, 1000);

///////////////////////////////////////////////////

for(let i = 0; i < 10; i++) {
    code = codeContent.list[i].code.replace(/(function|let)/g, '<span style="color:rgba(54, 162, 235, 1)";>$&</span>');

    $('#line_' + (i+1)).html(code);    
}
