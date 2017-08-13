var h = document.getElementById("h");
var m = document.getElementById("m");
var s = document.getElementById("s");
var p = document.getElementById("p");
var dt1 = new Date();
dt1.setHours(03,45,00);
var dt2 = new Date();
dt2.setHours(05,20,00);
var dt3 = new Date();
dt3.setHours(11,59, 00);
var dt4 = new Date();
dt4.setHours(15,36,00);
var dt5 = new Date();
dt5.setHours(18,40,56);
var dt6 = new Date();
dt6.setHours(20, 30, 56);
var dt7 = new Date();
dt7.setHours(23, 59, 59);
var dt8 = new Date();
dt8.setHours(00, 00, 01);

var id = setInterval(frame, 5);
function frame() {
var date1 = new Date();
    document.getElementById("tm").innerHTML = "time now: "+ date1;
    if (date1 > dt1 && date1 < dt2) {
    var t = dt2.getTime() - date1.getTime();
    var t1 = (t % 3600000);
    h.innerHTML = (t - (t % 3600000)) / 3600000;
     var t2 = (t%3600000)%60000;
     m.innerHTML = (t1 - t2) / 60000;
     s.innerHTML = (t2 - (t2 % 1000)) / 1000;
     p.innerHTML = ": باقى على الشروق " ;
    } else if (date1 > dt2 && date1 < dt3) {
        var t = dt3.getTime() - date1.getTime();
        var t1 = (t % 3600000);
        h.innerHTML = (t - (t % 3600000)) / 3600000;
        var t2 = (t % 3600000) % 60000;
        m.innerHTML = (t1 - t2) / 60000;
        s.innerHTML = (t2 - (t2 % 1000)) / 1000;
        p.innerHTML = ": باقى على الظهر "
    } else if (date1 > dt3 && date1 < dt4) {
        var t = dt4.getTime() - date1.getTime();
        var t1 = (t % 3600000);
        h.innerHTML = (t - (t % 3600000)) / 3600000;
        var t2 = (t % 3600000) % 60000;
        m.innerHTML = (t1 - t2) / 60000;
        s.innerHTML = (t2 - (t2 % 1000)) / 1000;
        p.innerHTML = ": باقى على العصر ";
    }
    else if (date1 > dt4 && date1 < dt5) {
        var t = dt5.getTime() - date1.getTime();
        var t1 = (t % 3600000);
        h.innerHTML = (t - (t % 3600000)) / 3600000;
        var t2 = (t % 3600000) % 60000;
        m.innerHTML = (t1 - t2) / 60000;
        s.innerHTML = (t2 - (t2 % 1000)) / 1000;
        p.innerHTML = ": باقى على المغرب ";
    } else if (date1 > dt5 && date1 < dt6) {
        var t = dt6.getTime() - date1.getTime();
        var t1 = (t % 3600000);
        h.innerHTML = (t - (t % 3600000)) / 3600000;
        var t2 = (t % 3600000) % 60000;
        m.innerHTML = (t1 - t2) / 60000;
        s.innerHTML = (t2 - (t2 % 1000)) / 1000;
        p.innerHTML = ": باقى على العشاء ";
    } else if (date1 < dt1) {
        var t = dt1.getTime() - date1.getTime();
        var t1 = (t % 3600000);
        h.innerHTML = (t - (t % 3600000)) / 3600000;
        var t2 = (t % 3600000) % 60000;
        m.innerHTML = (t1 - t2) / 60000;
        s.innerHTML = (t2 - (t2 % 1000)) / 1000;
        p.innerHTML = ": باقى على الفجر ";
    } else if (date1 > dt6) {
        var t = (dt1.getTime() - dt8.getTime()) + (dt7.getTime() - date1.getTime());
        var t1 = (t % 3600000);
        h.innerHTML = (t - (t % 3600000)) / 3600000;
        var t2 = (t % 3600000) % 60000;
        m.innerHTML = (t1 - t2) / 60000;
        s.innerHTML = (t2 - (t2 % 1000)) / 1000;
        p.innerHTML = ": باقى على الفجر ";
    }

}
