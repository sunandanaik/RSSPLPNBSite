//// ================================================================================ 
///*
//    Digital clock display for Great Britain and India time-zones.
//*/

//function startTime() {

//    //var datetimeIN, ampmIN, timeUK, ampmUK;
//    //var h, m, s;
//    var datetimeIN = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
//    var timeIN = datetimeIN.split(',');
//    //timeIN = new Date(timeIN);
//    //h = timeIN.getHours();
//    //m = timeIN.getMinutes();
//    //s = timeIN.getSeconds();
//    //ampmIN = ((h >= 12) ? 'PM' : 'AM');
//    //h = ((h != 12) ? (h % 12) : h);
//    //h = checkTime(h);
//    //m = checkTime(m);
//    //s = checkTime(s);
//    document.getElementById('india').innerHTML = timeIN[1]
//    //h + ":" + m + ":" + s + " " + ampmIN;

//    var datetimeUK = new Date().toLocaleString("en-GB", { timeZone: "Europe/London" });
//    var timeUK = datetimeUK.split(',');
//    var hms = timeUK[1].split(':');
//    var h = ((hms[0] > 12) ? hms[0] - 12 : hms[0])
//    var ampmUK = ((0 < hms[0] < 12) ? 'am' : 'pm');
//    //timeUK = new Date(timeUK);
//    //h = timeUK.getHours();
//    //m = timeUK.getMinutes();
//    //s = timeUK.getSeconds();
  
//    //h = ((h != 12) ? (h % 12) : h);
//    //h = checkTime(h);
//    //m = checkTime(m);
//    //s = checkTime(s);
//    document.getElementById('london').innerHTML = h + ":" + hms[1] + ":" + hms[2] + " " + ampmUK;
//    //h + ":" + m + ":" + s + " " + ampmUK;

//}
////function checkTime(i) {
////    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
////    return i;
////}

//setInterval(startTime, 1000);


///*
//function displayTime() {

//    var timeIN, timeGB;

//    timeIN = new Date().toLocaleTimeString("en-IN", {timeZone: "Asia/Kolkata"});
//    document.getElementById('india').innerHTML = timeIN; 

//    timeGB = new Date().toLocaleTimeString("en-GB", {timeZone: "Europe/London"});
//    document.getElementById('london').innerHTML = timeGB;
//}

//setInterval(displayTime, 1000);
//*/

//// ================================================================================ 

//// ================================================================================ 
///*
//    Dropdown menu toggle - show / hide
//*/

//var $dropdown = $(".dropdown");
//var $dropdownToggle = $(".dropdown-toggle");
//var $dropdownMenu = $(".dropdown-menu");
//var showClass = "show";

//$(window).on("load resize", function () {
//    if (this.matchMedia("(min-width: 768px)").matches) {
//        $dropdown.hover(
//            function () {
//                const $this = $(this);
//                $this.addClass(showClass);
//                $this.find($dropdownToggle).attr("aria-expanded", "true");
//                $this.find($dropdownMenu).addClass(showClass);
//            },
//            function () {
//                const $this = $(this);
//                $this.removeClass(showClass);
//                $this.find($dropdownToggle).attr("aria-expanded", "false");
//                $this.find($dropdownMenu).removeClass(showClass);
//            }
//        );
//    } else {
//        $dropdown.off("mouseenter mouseleave");
//    }
//});

//// ================================================================================ 
//$(document).ready(function () {
//    $('ul.nav.nav-tabs.menu-tab li').click(function () {
//        $('ul.nav.nav-tabs.menu-tab li').removeClass('active');
//        $(this).addClass('active');
//        //$(".header .nav-menu").hide();
//    });
//    $('.middle-bar button.navbar-toggler.my-menu').click(function () {

//        $("#navb").toggle("slow");
//    });
//});