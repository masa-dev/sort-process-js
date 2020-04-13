let sortType = new Vue({
    el: '#sort-type',
    data: {
        selected: 0,
        options: [
            { id: 0, name: '選択ソート', code: selectionSortCode },
            { id: 1, name: '挿入ソート', code: insertSortCode }
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
        },
        deleteCode: function () {
            this.list.splice(0, this.list.length);
        },
        changeCode: function () {
            this.deleteCode();
            this.initCode(sortType.options[sortType.selected].code);
            this.selected = sortType.options[sortType.selected].name;
        }
    }
})

let button = new Vue({
    el: '#button-area',
    methods: {
        shuffleArray: function () {
            shuffle(array);
            adjustPosition(array);
            console.log(array);
        },
        executeSort: function () {
            let i = 0;

            // ボタンを無効にする
            $('#shuffle-button').attr('disabled', true);
            $('#execute-button').attr('disabled', true);

            // sortLog を初期化
            sortLog.splice(0, sortLog.length);

            console.log(array)
            switch (sortType.selected) {
                case 0:
                    selectionSort(array, sortLog);
                    break;
                case 1:
                    insertSort(array, sortLog);
                    break;
                default:
                    break;
            }

            sortAnimation = setInterval(function () {
                if (sortLog[i].type == 'compare') {
                    changeWhenComparison(sortLog[i].x, sortLog[i].y, 500);
                }
                else if (sortLog[i].type == 'exchange') {
                    exchangePlace(sortLog[i].x, sortLog[i].y, 500);
                }
                else {
                    alert('error');
                }

                if (i == sortLog.length - 1) {
                    //ボタンを有効にする
                    $('#shuffle-button').attr('disabled', false);
                    $('#execute-button').attr('disabled', false);
                    clearInterval(sortAnimation);
                }
                i++;
            }, 500);

            console.log(array, sortLog);
        }
    }
})