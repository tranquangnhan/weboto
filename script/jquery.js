var qltitle = $(".boxtrang__text");
var qlcontent = $(".boxwelcome__alert");
var icon = $(".fa-chevron-down");
for (let i = 0; i < qltitle.length; i++) {
    $(qltitle[i]).click(function(e) {
        e.preventDefault();
        $(qlcontent[i]).slideToggle();
        $(qlcontent[i]).parent().siblings().children('.boxwelcome__alert').slideUp();
    });

    $(icon[i]).click(function(e) {
        e.preventDefault();
        $(qlcontent[i]).slideToggle();
    });
}