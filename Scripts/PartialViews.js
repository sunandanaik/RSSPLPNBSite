LoadContent();
function LoadContent() {
    var maincontentBB = $('#buttonbottom_partial');
    var urlBB = $('#hdnPath').val() + '/NavigationItem/BottomButtons';
    LoadPartialView(urlBB, maincontentBB);

    var maincontentMA = $('#mobileapplinks_partial');
    var urlMA = $('#hdnPath').val() +'/NavigationItem/IndicativeExchangeRates';
    LoadPartialView(urlMA, maincontentMA);


};

function LoadPartialView(urlpath, viewDiv) {
    $.ajax({
        type: "GET",
        url: (urlpath),
        context: viewDiv,
        dataType: "html",
        success: function (data) {
            var viewDivparent = viewDiv.parent();
            var parentdiv = this;
            this.html('');
            this.html(data);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert("Loading failed");
        }
    });
}