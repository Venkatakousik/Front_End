function updateClock() {
    var now = new Date();
    var dname = now.getDay(),
        mon = now.getMonth(),
        dnum = now.getDate(),
        year = now.getFullYear(),
        hour = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        pe = "AM";


    if (hour == 0) {
        hour = 12;
    }

    if (hour > 12) {
        hour = hour - 12;
        pe = 'PM';
    }


    Number.prototype.pad = function(digit) {
        for (var n = this.toString(); n.length < digit; n = 0 + n);
        return n;
    }
    var months = ['January', 'febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']


    var ids = ['day', 'month', 'datenum', 'year', 'hour', 'min', 'sec', 'fore-noon']


    var values = [week[dname], months[mon], dnum.pad(2), year, hour.pad(2), min.pad(2), sec.pad(2), pe]
    for (var i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
    }

}

function initClock() {
    updateClock();
    window.setInterval("updateClock()", 1);
}