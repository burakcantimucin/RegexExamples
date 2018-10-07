$(function () {
    $("#button1").click(function () {
        var regex = / ((http|https)\:\/\/)?[a-zA-Z0-9\\/\?\:@\-_=#]+\.([a-zA-Z0-9\&\.\/\?\:@\-_=#])+/g;
        str = $("#yorum").val();
        var getURL = str.match(regex);
        $("#sonuc").html("<b>String İçindeki URL'ler: </b>" + getURL);
    });
    $("#button2").click(function () {
        var yeniDeger = $("#deger").val().replace(/([39])/g, m => {
            switch (m) {
                case '3': return '9';
                case '9': return '3';
            }
        });
        $("#sonuc1").html("<b>Yeni ifade: </b>" + yeniDeger);
    });
});