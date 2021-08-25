$(document).ready(function () {
    var expand = sessionStorage.getItem('expand')
    if (expand == 'no') {
        $("#Information_click").attr('style', 'display:none');
    }
    else if (expand == 'yes') {
        $("#Information_click").attr('style', 'display:block');
    }
    $("#Information_click").click(function () {
        accordianflag = $("#Information_click").attr('flag');
        if (accordianflag == "false") {
            $('.panel-collapse').addClass('show');
            $('.accordian-color').removeClass('collapsed');
            $("#Information_click").attr('flag', 'true');
            $("#Information_click").text("Collapse All");
        }
        else if (accordianflag == "true") {
            $('.panel-collapse').removeClass('show');
            $('.accordian-color').addClass('collapsed');
            $("#Information_click").attr('flag', 'false');
            $("#Information_click").text("Expand All");
        }
    });

    $("#Information_click1").click(function () {
        accordianflag = $("#Information_click1").attr('flag');
        if (accordianflag == "false") {
            $('.panel-collapse').addClass('show');
            $('.accordian-color').removeClass('collapsed');
            $("#Information_click1").attr('flag', 'true');
            $("#Information_click1").text("Collapse All");
        }
        else if (accordianflag == "true") {
            $('.panel-collapse').removeClass('show');
            $('.accordian-color').addClass('collapsed');
            $("#Information_click1").attr('flag', 'false');
            $("#Information_click1").text("Expand All");
        }
    });

    $('.menu-tab-nav li a').on('click', function () {
        $("#Information_click").text("Expand All");
        $("#Information_click").attr('flag', 'false');
    });

    $('ul.nav.nav-tabs.menu-tab li').click(function () {
        $("#Information_click1").text("Expand All");
        $("#Information_click1").attr('flag', 'false');
    });
});