let sortLog = [];
let array = [];

for(let i = 1; i <= 10; i++) {
    array.push(i);
}
shuffle(array);
adjustPosition(array);

//はじめは選択ソートを表示
codeContent.initCode(selectionSortCode);
