LoadER();
LoadGetLastApprovedDate();
function LoadER() {
    $.ajax({
        url: $("#hdnPath").val() + '/ExchangeRate/GetAllExchangeRates',
        type: 'GET',
        async: false,
        contentType: 'application/json;',
        dataType: 'json',
        success: function (jsonResult) {
            
            var str
           
            var v = '<div class="row table-row" style=" padding-top:3%;padding-bottom:3%;"><div class="table-inner-section" style="padding-top:0% !important;"><p style="font-size: 17px;">Currency</p></div><div class="col-one-new table-one-new"><p style="font-size: 17px;">Rate</p></div><div class="col-two-new table-two-new" style="padding-left:10%;"><p style="font-size: 17px;">Amount</p></div></div>'
            $('#indexrate').append(v);
            jsonResult.rates.forEach(function (item) {
                //if (item.FromSlab == 0) {
                //    str = 'Less than ' + '<span style="font-family:open-sans;">' + item.SourceHtml + '</span>' + item.ToSlab;
                //}
                //else {
                //    str = '<span style="font-family:open-sans;">' + item.SourceHtml + '</span>' + item.FromSlab + ' - ' + '<span style="font-family:open-sans;">' + item.SourceHtml + '</span>' + item.ToSlab;
                //}
                //var v = '<div class="row table-row"><div class="table-inner-section"><p class="GBP">' + item.SourceISO + '/' + item.DestinationISO + '</p></div><div class="col-one-new table-one-new"><p>Rate</p><p class="amount">' + parseFloat(item.Rate).toFixed(2) + '</p></div><div class="col-two-new table-two-new"><p>Amount</p><p class="amount amountone">' + str + '</p></div></div>';
                //$('#indexrate').append(v);

                if (item.FromSlab == 5000) {
                    str = '<span>Above </span><span style="font-family:open-sans;">' + item.SourceHtml + '</span>' + item.FromSlab + ' to ' + '<span style="font-family:open-sans;">' + item.SourceHtml + '</span>' + item.ToSlab;
                    var v = '<div class="row table-row" style=" padding-top:3%;padding-bottom:3%;"><div class="table-inner-section" style="padding-top:0% !important;"><p class="GBP">' + item.SourceISO + '/' + item.DestinationISO + '</p></div><div class="col-one-new table-one-new"><p class="amount">' + parseFloat(item.Rate).toFixed(2) + '</p></div><div class="col-two-new table-two-new" style="padding-left:10%;"><p class="amount amountone">' + str + '</p></div></div>'
                    $('#indexrate').append(v);
                }
                else if (item.FromSlab == 2000) {
                    str = '<span style="font-family:open-sans;">' + item.SourceHtml + '</span>' + item.FromSlab + ' to ' + '<span style="font-family:open-sans;">' + item.SourceHtml + '</span>' + item.ToSlab;
                    var v = '<div class="row table-row" style=" padding-top:3%;padding-bottom:3%;"><div class="table-inner-section" style="padding-top:0% !important;"><p class="GBP">' + item.SourceISO + '/' + item.DestinationISO + '</p></div><div class="col-one-new table-one-new"><p class="amount">' + parseFloat(item.Rate).toFixed(2) + '</p></div><div class="col-two-new table-two-new" style="padding-left:10%;"><p class="amount amountone">' + str + '</p></div></div>'
                    $('#indexrate').append(v);
                }
                else if (item.FromSlab == 250) {
                    str = '<span style="font-family:open-sans;">' + item.SourceHtml + '</span>' + item.FromSlab + ' to less than ' + '<span style="font-family:open-sans;">' + item.SourceHtml + '</span>' + item.ToSlab;
                    var v = '<div class="row table-row" style=" padding-top:3%;padding-bottom:3%;"><div class="table-inner-section" style="padding-top:0% !important;"><p class="GBP">' + item.SourceISO + '/' + item.DestinationISO + '</p></div><div class="col-one-new table-one-new"><p class="amount">' + parseFloat(item.Rate).toFixed(2) + '</p></div><div class="col-two-new table-two-new" style="padding-left:10%;"><p class="amount amountone">' + str + '</p></div></div>'
                    $('#indexrate').append(v);
                }
                else if (item.FromSlab == 0 && item.SourceISO == "GBP") {
                    str = 'Less than ' + '<span style="font-family:open-sans;">' + item.SourceHtml + '</span>' + item.ToSlab;
                    var v = '<div class="row table-row" style=" padding-top:3%;padding-bottom:3%;"><div class="table-inner-section" style="padding-top:0% !important;"><p class="GBP">' + item.SourceISO + '/' + item.DestinationISO + '</p></div><div class="col-one-new table-one-new"><p class="amount">' + parseFloat(item.Rate).toFixed(2) + '</p></div><div class="col-two-new table-two-new" style="padding-left:10%;"><p class="amount amountone">' + str + '</p></div></div>'
                    $('#indexrate').append(v);
                }
                else if (item.FromSlab == 0 && (item.SourceISO == "EUR" || item.SourceISO == "USD")) {
                    str = 'Up to ' + '<span style="font-family:open-sans;">' + item.SourceHtml + '</span>' + item.ToSlab;
                    var v = '<div class="row table-row" style=" padding-top:3%;padding-bottom:3%;"><div class="table-inner-section" style="padding-top:0% !important;"><p class="GBP">' + item.SourceISO + '/' + item.DestinationISO + '</p></div><div class="col-one-new table-one-new"><p class="amount">' + parseFloat(item.Rate).toFixed(2) + '</p></div><div class="col-two-new table-two-new" style="padding-left:10%;"><p class="amount amountone">' + str + '</p></div></div>'
                    $('#indexrate').append(v);
                }
            });
        },

        error: function () {
        }
    });
}
function LoadGetLastApprovedDate() {
    $.ajax({
        url: $("#hdnPath").val() + '/ExchangeRate/GetLastApprovedDate',
        type: 'GET',
        async: false,
        contentType: 'application/json;',
        dataType: 'json',
        success: function (jsonResult) {
            var LastApprovedDate = jsonResult;
            $('#LastApprovedDateTime').text(LastApprovedDate);
        },
        error: function () {
        }
    });
}

$('.per').on('click', function () {
    var url = '../Home/Personal';
    window.location = url;
});
$('.bus').on('click', function () {
    var url = '../Home/Business';
    window.location = url;
});


