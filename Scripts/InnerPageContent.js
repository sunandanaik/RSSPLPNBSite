$(document).ready(function () {
    $('.menu-tab li').on('click', function () {
        $('.menu-tab li').removeClass('active');
        $(this).addClass('active');
        clicked = $(this).closest("ul").attr('class').split(" ");
        PageName = clicked[3]
        Name = this.firstElementChild.id;
        GetInnerContentData(Name, PageName)
        $(document).ready(function () {
            GetAllNavigationItems();
        });
    });
});

function GetInnerContentData(Name, PageName) {
    $.ajax({
        cache: false,
        url: $("#hdnPath").val() + '/InnerPageContent/GetInnerContentData',
        type: 'GET',
        data: {
            "Name": Name,
            "PageName": PageName
        },
        contentType: 'application/json;',
        dataType: 'json',
        success: function (Data) {
            $('#home').html(Data.InnerPageContent);
        }
    });
}