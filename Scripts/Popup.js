


$(document).ready(function ($) {

    $.ajax({

        cache: false,
        url: $("#hdnPath").val() + '/PopupContent/GetPopupContentData',
        type: 'GET',
        data: {
        },
        contentType: 'application/json;',
        dataType: 'json',
        success: function (Data) {
            jQuery.noConflict();          
            var bannerText = Data.PopupPageContent.FilePath;

            if (Data["PopupPageContent"]["IsActivated"]) {
                if (sessionStorage.getItem('#myModal') !== 'true') {
                    sessionStorage.setItem('#myModal', 'true');
                    $('#modal-title').html(Data.PopupPageContent.Title);
                    $("#bannerText").html(bannerText);
                    $("#myModal").modal({
                        show: true
                    });
                }
                else {
                    $("#myModal").modal({
                        show: false
                    });
                }
            }
            else {
                $('#myModal').modal('hide');
            }
        },
        error: function (Data) {

            console.log(Data);
        }
    });




})

