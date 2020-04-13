function paintLine(line, color, time) {
    $('#line_' + line).css({
        'background-color': color//'rgba(255, 99, 132, 0.4)'
    });
    setTimeout(function () {
        $('#line_' + line).css({
            'background-color': ''
        });
    }, time - 50);
}