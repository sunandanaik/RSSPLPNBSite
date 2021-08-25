var clicked
var searchInput
var dst
//============================================================================
/*Check if daylight savings is in effect*/
Date.prototype.stdTimezoneOffset = function () {
    var jan = new Date(this.getFullYear(), 0, 1);
    var jul = new Date(this.getFullYear(), 6, 1);
    return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
}

Date.prototype.isDstObserved = function () {
    return this.getTimezoneOffset() < this.stdTimezoneOffset();
}

var today = new Date();
if (new Date().getTimezoneOffset() == -330) {
    if (!today.isDstObserved()) {
        dst = 0
    }
    else { dst = 1 }}
else {

    if (today.isDstObserved()) {
        dst = 1
    }
    else { dst = 0 }
}
//============================================================================
// ================================================================================
/*Digital clock display for Great Britain and India time-zones.*/
function startTime() {
    /*Build India Time*/
    var currentTime = new Date();
    var currentOffset = currentTime.getTimezoneOffset();
    var ISTOffset = 330;   // IST offset UTC +5:30 India
    var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);
    // ISTTime now represents the time in IST coordinates
    var hoursIN = ISTTime.getHours()
    var minutesIN = ISTTime.getMinutes()
    var secIN = ISTTime.getSeconds();
    var h = ((hoursIN > 12) ? hoursIN - 12 : hoursIN)
    var ampm = (hoursIN < 12 ? 'am' : 'pm');
    hoursIN = (h < 10) ? "0" + h : h;
    minutesIN = (minutesIN < 10) ? "0" + minutesIN : minutesIN;
    secIN = (secIN < 10) ? "0" + secIN : secIN;
    document.getElementById('india').innerHTML = hoursIN + ":" + minutesIN + ":" + secIN + " " + ampm;
   

    /*Build UK Time*/
    var ISTOffset = 0;   // IST offset UTC +0:00 UK
    var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);
    // ISTTime now represents the time in IST coordinates
    var hoursUK = ((dst == 1) ? (ISTTime.getHours()) + 1 : ISTTime.getHours());
    var minutesUK = ISTTime.getMinutes();
    var secUK = ISTTime.getSeconds();
    var h = ((hoursUK > 12) ? hoursUK - 12 : hoursUK)
    h = ((h > 12) ? h - 12 : h)
    var ampm = (hoursUK < 12 ? 'am' : 'pm');
    hoursUK = (h < 10) ? "0" + h : h;
    minutesUK = (minutesUK < 10) ? "0" + minutesUK : minutesUK;
    secUK = (secUK < 10) ? "0" + secUK : secUK;
    document.getElementById('london').innerHTML = hoursUK + ":" + minutesUK + ":" + secUK + " " + ampm;
    $('.flag').show();
    //console.log(dst);
    //console.log(today.isDstObserved());
}
setInterval(startTime, 1000);
// ================================================================================ 

// ================================================================================ 
/*Dropdown menu toggle - show / hide*/
var $dropdown = $(".dropdown");
var $dropdownToggle = $(".dropdown-toggle");
var $dropdownMenu = $(".dropdown-menu");
var showClass = "show";

//var status = this.status = this.status || 404;
//if (nul == body) {
//    this.type = 'text'
//    body = http..
//}

//======================================================================================
$(window).on("load resize", function () {
    if (this.matchMedia("(min-width: 768px)").matches) {
        $dropdown.hover(
            function () {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function () {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
        );
    } else {
        $dropdown.off("mouseenter mouseleave");
    }
    GetAllNavigationItems();
});
// ================================================================================ 
$(function () {
    $(document).on('click', '.top-nav-bar li', function () {
        $('.top-nav-bar li').removeClass('active');
        $(this).addClass('active');
        clicked = $(this).attr('class').split(" ");
        var ClassName = clicked[0];
        sessionStorage.setItem('home', ClassName);
        //GetNavigationData(ClassName);
        //NavData($(this))

    });
    $(document).on('click', '.dropdown-menu a', function () {
        clicked = $(this).attr('class').split(" ");
        var ClassName = clicked[1];
        if (ClassName == 'faqaccount_partialca' || ClassName == 'faqaccount_partialbca' || ClassName == 'faqaccount_partial' || ClassName == 'faqaccount_partialfd' || ClassName == 'faqaccount_partialbfd' || ClassName == 'faqaccount_partialnri' || ClassName == 'faqaccount_partialdc' || ClassName == 'faqaccount_partialmt' || ClassName == 'faqaccount_partialcisa') {
        }
        else if (ClassName == 'internetbanking_partial' || ClassName == 'swifttransferbanking_partial') {
            sessionStorage.setItem('mt', ClassName);
            sessionStorage.setItem('home', 'moneytransfer_partial');
            //NavData($(this))
            //GetNavigationData(ClassName);
        }
        else if (ClassName == 'currentaccount_partial' || ClassName == 'savingsaccount_partial' /*|| ClassName == 'debitmastercard_partial'*/ || ClassName == 'nriservices_partial' || ClassName == 'cashisa_partial' || ClassName == 'fixeddepositaccount_partial') {
            sessionStorage.setItem('home', 'personalhome_partial');
            
            //NavData($(this))
            //GetNavigationData(ClassName);
        }
        else if (ClassName == 'debitmastercard_partial') {
            sessionStorage.setItem('home', 'debitmastercard_partial');
        }
        //else if (ClassName == 'faqaccount_partialbfd1') {
            
        //    var str = ClassName;
        //    var res = str.replace(ClassName, "faqaccount_partialbfd");
        //    ClassName = res;
        //    alert(ClassName);
        //}
        else {
            //NavData($(this))
            // GetNavigationData(ClassName);
        }
    });
    $(document).on('click', '#demo div a', function () {
        clicked = $(this).attr('class').split(" ");
        var ClassName = clicked[0];
        //NavData($(this))
        //GetNavigationData(ClassName);
    });

    $(document).on('click', '.contactus_partial', function () {
        var ClassName = 'contactus_partial';
        sessionStorage.setItem('home', '');
        //NavData($(this))
        //GetNavigationData(ClassName);
    });

    $('.personalhome_partial').on('click', function () {
        var ClassName = 'personalhome_partial';
        sessionStorage.setItem('home', ClassName);
        //NavData($(this))
        //GetNavigationData(ClassName);
    });

   

    $('.loanshome_partial').on('click', function () {
        var ClassName = 'loanshome_partial';
        sessionStorage.setItem('home', 'loanshome_partial');
        //NavData($(this))
        //GetNavigationData(ClassName);
    });

    $(document).on('click', '#readmorelinks a', function () {
        clicked = $(this).attr('class').split(" ");
        var ClassName = clicked[0];
        sessionStorage.setItem('home', clicked[1]);
        //NavData()
        //GetNavigationData(ClassName);
    });

    $('#readmorelinks div a').on('click', function () {
        clicked = $(this).attr('class').split(" ");
        var ClassName = clicked[1];
        sessionStorage.setItem('home', clicked[1]);
        //NavData($(this))
        //GetNavigationData(ClassName);
    });

    $(document).on('click', '.pns ul li a', function () {
        clicked = $(this).attr('class').split(" ");
        sessionStorage.setItem('home', clicked[1]);
        var ClassName = clicked[0];
        // NavData($(this))
        //GetNavigationData(ClassName);
    });

    
    $(document).on('click', 'div p a', function () {
        clicked = $(this).attr('class').split(" ");
        sessionStorage.setItem('home', clicked[0]);
        var ClassName = clicked[0];
        // NavData($(this))
        //GetNavigationData(ClassName);
    });

    $(document).on('click', '.bottom_buttons div a', function () {
        clicked = $(this).attr('class').split(" ");
        var ClassName = clicked[0];
        //NavData($(this))
        //GetNavigationData(ClassName);
    });
})

$(document).ready(function () {

    $('ul.nav.nav-tabs.menu-tab li').click(function () {
        $('ul.nav.nav-tabs.menu-tab li').removeClass('active');
        $(this).addClass('active');
        var id = $(this).find('a').attr('id');
        if (id == 'faqaccount_partialca' || id == 'faqaccount_partialsa' || id == 'faqaccount_partialbca' || id == 'faqaccount_partialcisa' || id == 'faqaccount_partialfd' || id == 'faqaccount_partialbfd') {
            $("#Information_click1").attr('style', 'display:block');
           
        }
        else {
            $("#Information_click1").attr('style', 'display:none');
        }
    });

    $('.middle-bar button.navbar-toggler').click(function () {
        $("#navb").toggle("slow");
    });

    $('#breadCrumbs').text($('meta[name=BreadCrumbs]').attr('content'));

    var directurl = (window.location.href).split('/');
    GetNavigationData(directurl[5]);
    //HomeLoad();

    //$('#login-button').click(function () {
    //    if ($('#login-button').text() == "Personal Login") {
    //        var ClassName = 'personalhome_partial';
    //        sessionStorage.setItem('home', ClassName);
    //    }
    //    else {
    //        var ClassName = 'businesshome_partial';
    //        sessionStorage.setItem('home', ClassName);
    //    }
    //    //NavData()
    //    //GetNavigationData(ClassName);
    //});

    document.querySelector('#searchbox').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            event.preventDefault();
            $('#searchbtn').click();
        }
    });

    //search
    $('#searchbtn').click(function () {
        $('#searchResultBox').empty();
        url = $("#hdnPath").val() + '/Search/Search';
        var maincontentMA = $('#pageContent')
        LoadPartialView(url, maincontentMA);
    });

});

function GetNavigationData(x) {
    $.ajax({
        cache: false,
        url: $("#hdnPath").val() + '/NavigationItem/GetNavigationData',
        type: 'GET',
        contentType: 'application/json;',
        data: { "page": x },
        dataType: 'json',
        success: function (Data) {
            sessionStorage.setItem('home', Data.NavData.HtmlClass);
            if (Data.NavData.HtmlClass == 'internetbanking_partial' || Data.NavData.HtmlClass == 'swifttransferbanking_partial' || Data.NavData.HtmlClass == 'moneytransfer_partial') {
                sessionStorage.setItem('mt', Data.NavData.HtmlClass);
                Moneytransfer();
            }
            HomeLoad();
        }
    });
}

function GetAllNavigationItems() {
    $.ajax({
        cache: false,
        url: $("#hdnPath").val() + '/NavigationItem/GetAllNavigationData',
        type: 'GET',
        contentType: 'application/json;',
        dataType: 'json',
        success: function (Data) {
            for (var i = 0; i < Data.NavData.length; i++) {
                var htmlID = Data.NavData[i].HtmlId
                $('[id=' + htmlID + ']').attr("href", Data.NavData[i].SEOFriendlyURL);
                //$('[id=' + htmlID + ']').attr("breadCrumb", Data.NavData[i].BreadCrumbs);
                //$('[id=' + htmlID + ']').attr("title", Data.NavData[i].Title);
            }
        }
    });
}

function Search(searchInput) {
    $.ajax({
        cache: false,
        url: $("#hdnPath").val() + '/Search/SeachResult',
        type: 'GET',
        contentType: 'application/json;',
        data: { "searchInput": searchInput },
        dataType: 'json',
        success: function (Data) {
            if (Data.SearchResults.length == 0) {
                var v = "<div class='searchResults'><label style='font-size:25px; color:#676363 !important'> No results found.</label></div>";
                $('#searchResultBox').append(v);
            }
            else {
                for (var i = 0; i < Data.SearchResults.length; i++) {
                    var v = "<div class='searchResults'><label style='font-size:25px' ><a href='" + Data.SearchResults[i].SEOFriendlyURL + "'>" + Data.SearchResults[i].DisplayName + "</a></label><br><span class='search_results_txtdesc'>" + Data.SearchResults[i].PageContent.substr(0, 170) + '…' + "</span></div>";
                    $('#searchResultBox').append(v);
                }
                $('.search_results_txtdesc p').addClass("search-results-desc")
                $('.search_results_txtdesc').addClass("search-results-desc")
                $('.search_results_txtdesc h5').addClass("search-results-desc")
                if (document.body.clientWidth < 768) {
                    var elmnt = document.getElementById("searchResultBox");
                    elmnt.scrollIntoView();
                }
            }
        }
    });
}

var btn = $('#top-button');
$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        //document.getElementById("top-button").classList.add('show');
        $("#top-button").addClass("show");
    } else {
        //document.getElementById("top-button").classList.remove('show');
        $("#top-button").removeClass("show");
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});

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
            var searchInput = document.getElementById('searchbox').value;
            Search(searchInput);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert("Loading failed");
        }
    });
}

document.addEventListener('readystatechange', function (event) {
    if (event.target.readyState === 'complete') {
        $('.loader').fadeOut(2000);
        $('#main').fadeIn(1000);
    }
});


function HomeLoad() {
    /*Please note use  "iscookielevel" to know the cookiesetting value from user\client side */

    var cookielevel = localStorage.getItem("CookieLevel");
    if (cookielevel) {

        var cookiesettingsvalue = localStorage.getItem("CookieLevel");
        document.cookie = "iscookielevel=" + cookiesettingsvalue + "; expires=Tue, 19 Jan 2038 03:14:07 UTC";
    }


   
    var home = sessionStorage.getItem('home');
    // alert(window.location.href);
    //alert(home);
    if (home == 'faqaccount_partial' || home == 'about_partial' || home == 'contactus_partial' || home == 'otherservices_partial' || home == 'calculator_partial' || home == 'financialreport_partial' || home == 'directorprofile_partial' || home == 'compliance_partial' || home == 'career_partial' || home == 'termsandconditions_partial' || home == 'newpress_partial' || home == 'forms_partial' || home == 'complaints_partial' || home == 'latestnews_partial' || home == 'cookiepolicyhome_partial') {

        $('.top-nav-bar li').removeClass('active');
        //$('.top-personalhome_partial').removeClass('active');
        $('#businesscurrentaccount_partial').attr('style', 'display:none');
        $('#businessfixeddeposit_db_link').attr('style', 'display:none');
        $('#fixeddeposit_db_link').attr('style', 'display:block');
        $('.faqaccount_partialfd').attr('style', 'display:block');
        $('.faqaccount_partialbfd').attr('style', 'display:none');
        $('.faqaccount_partialbca').attr('style', 'display:none');
        $('#login-button').show().text("Personal Login");
    }
    else if (home == 'personalhome_partial') {
        $('.top-nav-bar li').removeClass('active');
        $('.top-personalhome_partial').addClass('active');
        $('#bcurrentaccount_db_link').attr('style', 'display:none');
        $('#businessfixeddeposit_db_link').attr('style', 'display:none');
        $('#fixeddeposit_db_link').attr('style', 'display:block');
        $('.faqaccount_partialfd').attr('style', 'display:block');
        $('.faqaccount_partialbfd').attr('style', 'display:none');
        $('.faqaccount_partialbca').attr('style', 'display:none');
        $("#corporate_login").hide();
        $('#login-button').show().text("Personal Login");
        $('#login-button').attr("href", "https://onlinepnbglobal.com/ukret/AuthenticationController?FORMSGROUP_ID__=AuthenticationFG&__START_TRAN_FLAG__=Y&__FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=024");
    }
    else if (home == 'businesshome_partial' || home == 'businesscurrentaccount_partial' || home == 'businessfixeddepositaccount_partial') {
        $('.top-nav-bar li').removeClass('active');
        //$('.top-personalhome_partial').removeClass('active');
        $('.top-businesshome_partial').addClass('active');
        $('#pcurrentaccount_db_link').attr('style', 'display:none');
        $('#psavingsaccount_db_link').attr('style', 'display:none');
        $('#navbarDropdownCashISA').attr('style', 'display:none');
        $('#navbarDropdownNRIServices').attr('style', 'display:none');
        $('#bcurrentaccount_db_link').attr('style', 'display:block');
        $('#businessfixeddeposit_db_link').attr('style', 'display:block');
        $('.faqaccount_partialca').attr('style', 'display:none');
        //$('.faqaccount_partialbfd').attr('style', 'display:none');
        $('.faqaccount_partialfd').attr('style', 'display:none');
        $('#fixeddeposit_db_link').attr('style', 'display:none');
        //$('.faqaccount_partialbca').attr('style', 'visibility:hidden');
        $('#login-button').show().text("Corporate Login");
        $('#login-button').attr("href", "https://onlinepnbglobal.com/ukcorp/AuthenticationController?FORMSGROUP_ID__=AuthenticationFG&__START_TRAN_FLAG__=Y&__FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=024");

    }
    else if (home == 'loanshome_partial') {
        $('.top-nav-bar li').removeClass('active');
        //$('.top-personalhome_partial').removeClass('active');
        $('.top-loanshome_partial').addClass('active');
        $('#bcurrentaccount_db_link').attr('style', 'display:none');
        $('#businessfixeddeposit_db_link').attr('style', 'display:none');
        $('#fixeddeposit_db_link').attr('style', 'display:block');
        $('.faqaccount_partialbfd').addClass("d-none")
        $('.faqaccount_partialbca').addClass("d-none")
        $('#login-button').hide();
        $('#navbarDropdownMoneyTransfer').attr('style', 'display:none');
        $('#navbarDropdownCashISA').attr('style', 'display:none');
        $('#navbarDropdownNRIServices').attr('style', 'display:none');
        $('#navbarDropdownAccounts').attr('style', 'display:none');
        $('#navbarDropdownFixedDeposits').attr('style', 'display:none');
        $('#navbarDropdownNRIServices').attr('style', 'display:none');
        $('#navbarDropdownDebitCards').attr('style', 'display:none');
        $('#navbarLoans').attr('style', 'display:none');
        $('.loan_hide').addClass('d-none');
    }
    else if (home == 'moneytransfer_partial' || home == 'internetbanking_partial' || home == 'swifttransferbanking_partial') {
        $('.top-nav-bar li').removeClass('active');
        //$('.top-personalhome_partial').removeClass('active');
        $('.top-moneytransfer_partial').addClass('active');
        $('#bcurrentaccount_db_link').attr('style', 'display:none');
        $('#businessfixeddeposit_db_link').attr('style', 'display:none');
        $('.faqaccount_partialbfd').attr('style', 'display:none');
        $('.faqaccount_partialbca').attr('style', 'display:none');
        $('#fixeddeposit_db_link').attr('style', 'display:block');
        $('#fd-faq').attr('style', 'display:block');
        $('#login-button').hide();
    }
    else if (home == 'currentaccount_partial' || home == 'savingsaccount_partial' || home == 'fixeddepositaccount_partial' || home == 'cashisa_partial'
        || home == 'debitmastercard_partial' || home == 'nriservices_partial') {
        {
            //alert(home);

            $('#businessfixeddeposit_db_link').attr('style', 'display:none');
            $('.faqaccount_partialbfd').attr('style', 'display:none');
            $('.faqaccount_partialbca').attr('style', 'display:none');
        }
    }


    /*Cookie Consent popup Accept*/


    if (localStorage.getItem("cookieSeen") == "shown") {

        document.querySelector(".cookies").style.visibility = 'hidden';
    } else {
        $(".cookies").delay(2000).fadeIn();
    }

    $('.cookie_consent_close').click(function (e) {
        // localStorage.setItem('cookieSeen', 'shown');
        $('.cookies').fadeOut();
    });


    /*Cookie settings */
    const cookieContainer = document.querySelector("cookies");
    const cookieButtonAccept = document.getElementById("cookieaccept");


    //Accept
    $("#cookieaccept").bind("click", function (event) {
        localStorage.setItem("CookieLevel", "3");
        localStorage.setItem("cookieSeen", "shown");
    });


    //Manage
    // Get the modal
    var modal = document.getElementById("exampleModal4");
    // Get the button that opens the modal
    var btn = document.getElementById("cookiemanage");

    // Get the button that opens the modal
    var close = document.getElementById("close");

    //save cookie settings
    var btnsetting = document.getElementById("cookiesettings");
    // When the user clicks the button, open the modal 
    btn.onclick = function () {
        //modal.style.display = "block";
        document.getElementById("performance").checked = true;
        document.getElementById("targeting").checked = true;
    }




    //to delete cookies
    function deleteAllCookies() {
        var cookies = document.cookie.split(";");

        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            var eqPos = cookie.indexOf("=");
            var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;

            if ((document.getElementById("performance").checked == true) && (document.getElementById("essential").checked == true)) {
                document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
            }

            else if ((document.getElementById("essential").checked == true) && (document.getElementById("performance").checked == false)) {
                document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
                /*below line is to delete the google analytics cookies. they are set with the domain*/
                document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;domain=" + location.hostname.replace(/^www\./i, "");
            }
        }
    }
   
    const tarcheckbox = document.getElementById('targeting');
    const percheckbox = document.getElementById('performance');

    $("#targeting").bind("click", function (event) {
        if (event.currentTarget.checked) {
            document.getElementById("performance").checked = true;
        }
        else {
            document.getElementById("performance").checked = true;
        }
    })


    $("#performance").bind("click", function (event) {
        if (!event.currentTarget.checked) {
            document.getElementById("targeting").checked = false;
        }
    })

    btnsetting.onclick = function () {

        $('.cookies').fadeOut();
        //essential performance targeting
        localStorage.setItem("CookieLevel", "3");
        localStorage.setItem("cookieSeen", "shown");
        if ((document.getElementById("performance").checked == true) && (document.getElementById("targeting").checked == false)) {
            localStorage.setItem("CookieLevel", "2");

            deleteAllCookies();
        }
        else if (document.getElementById("targeting").checked == true) {
            localStorage.setItem("CookieLevel", "3");
        }
        else {

            localStorage.setItem("CookieLevel", "1");

            deleteAllCookies();
        }

        var cookiesettingsvalue = localStorage.getItem("CookieLevel");
        document.cookie = "iscookielevel=" + cookiesettingsvalue + "; expires=Tue, 19 Jan 2038 03:14:07 UTC";

    }
}