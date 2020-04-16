let sortType = new Vue({
    el: '#sort-type',
    data: {
        selected: 0,
        options: [
            { id: 0, name: '選択ソート', code: selectionSortCode },
            { id: 1, name: '挿入ソート', code: insertSortCode },
            { id: 2, name: 'クイックソート', code: quickSortCode },
            { id: 3, name: 'バブルソート', code: bubbleSortCode },
            { id: 4, name: 'シェーカーソート', code: shakerSortCode },
            { id: 5, name: 'ボゴソート（非推奨）', code: bogoSortCode }
        ]
    }
})

let codeContent = new Vue({
    el: '#code-block',
    data: {
        selected: '選択ソート',
        list: []
    },
    methods: {
        initCode: function (codeText) {
            const codePerLine = codeText.split(/\n/);
            for (let i = 0; i < codePerLine.length; i++) {
                this.list.push({ id: i + 1, code: codePerLine[i] });
            }
            this.addCodeHighlight();
        },
        deleteCode: function () {
            this.list.splice(0, this.list.length);
        },
        changeCode: function () {
            this.deleteCode();
            this.initCode(sortType.options[sortType.selected].code);
            this.selected = sortType.options[sortType.selected].name;
        },
        addCodeHighlight: function () {
            let code = [];
            for (let line of this.list) {
                code.push(line.code);
            }

            for (let i = 0; i < this.list.length; i++) {
                //ドットと空白と'[]'を含まず、'('で終わる文字列
                code[i] = code[i].replace(/([^!\.\s()\[\]]+)(\()/g, '<span class="fw">$1</span>$2');
                code[i] = code[i].replace(/(function|let|var|const)(\s)/g, '<span class="dw">$1</span>$2');
                code[i] = code[i].replace(/(for|while|if|break|return|else)(\(|\s|;|\{)/g, '<span class="robw">$1</span>$2');
                code[i] = code[i].replace(/(true|false)/g, '<span class="bw">$&</span>');
                code[i] = code[i].replace(/[0-9]/g, '<span class="nw">$&</span>');

                this.list[i].code = code[i];
            }
        }
    }
})

let button = new Vue({
    el: '#button-area',
    data: {
        i: 0,
        time: 250,
        statement: 'stop',
        name: '中断'
    },
    methods: {
        shuffleArray: function () {
            shuffle(array);
            adjustPosition(array);
        },
        executeSort: function () {
            let i = 0; // 0から始まる
            time = button.time;
            this.statement = 'processing'

            // ボタンを無効にする
            $('#shuffle-button').attr('disabled', true);
            $('#execute-button').attr('disabled', true);
            $('#select-sort').attr('disabled', true);
            // ボタンを有効にする
            $('#stop-or-restart-button').attr('disabled', false);

            // sortLog を初期化
            sortLog.splice(0, sortLog.length);

            switch (sortType.selected) {
                case 0:
                    selectionSort(array, sortLog);
                    break;
                case 1:
                    insertSort(array, sortLog);
                    break;
                case 2:
                    quickSort(array, 0, array.length - 1, sortLog);
                    break;
                case 3:
                    bubbleSort(array, sortLog);
                    break;
                case 4:
                    shakerSort(array, sortLog);
                    break;
                case 5:
                    let result = confirm('ボゴソートを本当に実行しますか？\n※落ちるため、処理が100万回に達した時点で止まります\n※最悪計算時間：∞\n※推奨ソート速度：infinity process');
                    if (result) {
                        bogoSort(array, sortLog);
                        if (sortLog.length > 1000000) {
                            alert('処理が100万回を越えたため停止しました')
                        }
                    }
                    else {
                        sortLog.push({ type: 'reject' });
                    }
                    break;
                default:
                    break;
            }

            //ソートアニメーション開始
            sortAnimation = setInterval(function () {
                if (sortLog[i].type == 'compare') {
                    changeWhenComparison(sortLog[i].x, sortLog[i].y, time);
                    paintLine(sortLog[i].line, 'rgba(255, 206, 86, 0.4)', time);
                }
                else if (sortLog[i].type == 'exchange') {
                    exchangePlace(sortLog[i].x, sortLog[i].y, time);
                    paintLine(sortLog[i].line, 'rgba(255, 99, 132, 0.4)', time)
                }
                else if (sortLog[i].type == 'recursion') {
                    recursionPlace(sortLog[i].x, sortLog[i].y, time);
                    paintLine(sortLog[i].line, 'rgba(153, 102, 255, 0.4)', time)
                }
                else if ('reject') {
                    //何もしない
                }
                else {
                    console.log(sortLog[i]);
                    alert('sortLog : error \n' + sortLog[i].type);
                }

                //ソートアニメーション終了
                if (i == sortLog.length - 1) {
                    button.statement = 'stop'
                    button.i = 0;
                    // 入力フォーム、ボタンを有効にする
                    $('#shuffle-button').attr('disabled', false);
                    $('#execute-button').attr('disabled', false);
                    $('#select-sort').attr('disabled', false);
                    // ボタンを無効にする
                    $('#stop-or-restart-button').attr('disabled', true);
                    clearInterval(sortAnimation);
                } else {
                    i++;
                    button.i++;
                }
            }, time);
        },
        stopOrRestart: function () {
            time = button.time;
            if (this.statement == 'processing') {
                this.statement = 'pause';
                this.name = '再開';
                clearInterval(sortAnimation);
            }
            else if (this.statement == 'pause') {
                this.statement = 'processing';
                this.name = '中断';
                let i = this.i;
                sortAnimation = setInterval(function () {
                    if (sortLog[i].type == 'compare') {
                        changeWhenComparison(sortLog[i].x, sortLog[i].y, time);
                        paintLine(sortLog[i].line, 'rgba(255, 206, 86, 0.4)', time);
                    }
                    else if (sortLog[i].type == 'exchange') {
                        exchangePlace(sortLog[i].x, sortLog[i].y, time);
                        paintLine(sortLog[i].line, 'rgba(255, 99, 132, 0.4)', time)
                    }
                    else if (sortLog[i].type == 'recursion') {
                        recursionPlace(sortLog[i].x, sortLog[i].y, time);
                        paintLine(sortLog[i].line, 'rgba(153, 102, 255, 0.4)', time)
                    }
                    else {
                        alert('stop : error');
                    }

                    if (i == sortLog.length - 1) {
                        button.statement = 'stop'
                        // 入力フォーム、ボタンを有効にする
                        $('#select-sort').attr('disabled', false);
                        $('#shuffle-button').attr('disabled', false);
                        $('#execute-button').attr('disabled', false);
                        // ボタンを無効にする
                        $('#stop-or-restart-button').attr('disabled', true);
                        button.i = 0;
                        clearInterval(sortAnimation);
                    } else {
                        i++;
                        button.i++;
                    }
                }, time);
            }
        },
        changeSortSpeed: function (speed) {
            speed = 500 - speed;
            $('#now-speed').html(Math.round(1 / (speed / 1000) * 10) / 10 + ' process / s')
            if (this.statement == 'stop' || this.statement == 'pause') {
                this.time = speed;
            }
            else if (this.statement == 'processing') {
                this.time = speed;
                this.stopOrRestart();
                this.stopOrRestart();
            }
        },
        resetThisPage: function () {
            if (typeof sortAnimation === undefined) {
                clearInterval(sortAnimation);
            }
            location.reload()
        }
    }
})