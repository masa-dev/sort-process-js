let sortLog = [];
let array = [];
let sortAnimation;

for (let i = 1; i <= 10; i++) {
    array.push(i);
}
shuffle(array);
adjustPosition(array);

//はじめは選択ソートを表示
codeContent.initCode(selectionSortCode);

// element-10 の border の色を消す
$('#element-10').css({ 'border': '1px' });

