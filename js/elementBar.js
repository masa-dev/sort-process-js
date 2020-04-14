let place = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300];

for (let i = 0; i < place.length; i++) {
    place[i] -= 1;  //位置の修正
}


// 色を変更する
function changeBarColor(id, color, borderColor) {
    $(id).css({
        'background-color': color,
        'border-color': borderColor
    });
}

// 位置を調整
function adjustPosition(array) {
    for (let i = 0; i < 10; i++) {
        $('#element-' + i).css({
            height: '',
            left: '',
            top: ''
        })

        $('#element-' + i).css({
            height: (30 * array[i]) + 'px',
            left: (30 * i - 1) + 'px',
            top: '+=1'
        })

    }
}

// 比較時の色変更
function changeWhenComparison(num_1, num_2, time) {
    //色を変更
    for (let num of [num_1, num_2]) {
        changeBarColor('#element-' + num, 'rgba(255, 206, 86, 0.2)', 'rgba(255, 206, 86, 1)');
        //0.45 秒後に色を戻す
        setTimeout(function () {
            changeBarColor('#element-' + num, 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 1)');
        }, time - time/10);
    }
}

// 入れ替えの色変更と入れ替え
function exchangePlace(num_1, num_2, time) {
    //要素の色の変更
    for (let num of [num_1, num_2]) {
        changeBarColor('#element-' + num, 'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 1)');
        //0.45 秒後に要素の色を元に戻す
        setTimeout(function () {
            changeBarColor('#element-' + num, 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 1)');
        }, time - time/10);
    }

    //要素の異動
    $('#element-' + num_1).animate({ 'left': place[num_2] + 'px' }, time - time/10);
    $('#element-' + num_2).animate({ 'left': place[num_1] + 'px' }, time - time/10);

    //要素の id の入れ替え
    $('#element-' + num_1).attr('id', 'element-temp');
    $('#element-' + num_2).attr('id', 'element-' + num_1);
    $('#element-temp').attr('id', 'element-' + num_2);
}