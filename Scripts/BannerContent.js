var PageName;
window.onload = function () {
    var x = document.getElementById('Banner').querySelectorAll('.banner');
    PageName = $('#Banner').attr('pagename');
    for (var i = 0; i < x.length; i++) {
        var BannerId = x[i].id;
        $.ajax({
            cache: false,
            url: $("#hdnPath").val() + '/BannerContent/GetBannerContentData',
            type: 'GET',
            data: {
                "PanelDisplayId": BannerId, 
                "PageName": PageName
            },
            contentType: 'application/json;',
            dataType: 'json',
            success: function (Data) {
                if (Data.BannerPageContent.BannerId != null) {
                    $('#' + Data.BannerPageContent.BannerId).find('img').attr('src', Data.BannerPageContent.FilePath);
                    $('#' + Data.BannerPageContent.BannerId).find('#readmorelinks').html(Data.BannerPageContent.Content);
                    $('#' + Data.BannerPageContent.BannerId).find('a').attr('href', Data.BannerPageContent.Link);
                }
                if (sessionStorage.getItem('mt') == 'internetbanking_partial') {
                    $('.header').text('Internet Banking');
                }
                else if (sessionStorage.getItem('mt') == 'swifttransferbanking_partial') {
                    $('.header').text('Swift Transfer');
                }
            }
        });
    }
};
