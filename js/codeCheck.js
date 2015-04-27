function codeChecker() {
    var codeArray = new Array();
    codeArray[55417890] = '55417890';
    codeArray[89726345] = '89726345';
    codeArray[92678452] = '92678452';
    codeArray[19872655] = '19872655';
    codeArray[01975680] = '01975680';
    codeArray[17072265] = '17072265';
    var code = codeArray[$('.codebox').val()];
    if (code == undefined) {
        $('.codebox').val('');
        $('.codebox').attr('placeholder','Try Again');
        return false;
    } else {
        $('.container').addClass('fadeOut');
        $('.navbar').addClass('fadeOut');
        setTimeout(function () {
            window.location = 'keys/' + code + '.html';
        }, 500);
        return false;
    }
    return false;
}

function codeCheckerLite() {
    var codeArray = new Array();
    codeArray[55417890] = '55417890';
    codeArray[89726345] = '89726345';
    codeArray[92678452] = '92678452';
    codeArray[19872655] = '19872655';
    codeArray[01975680] = '01975680';
    codeArray[17072265] = '17072265';
    var code = codeArray[$('.codebox').val()];
    if (code == undefined) {
        $('.codebox').val('');
        $('.codebox').attr('placeholder','Try Again');
        return false;
    } else {
        $('.container').addClass('fadeOut');
        $('.navbar').addClass('fadeOut');
        setTimeout(function () {
            window.location = '../keys/' + code + '.html';
        }, 500);
        return false;
    }
    return false;
}