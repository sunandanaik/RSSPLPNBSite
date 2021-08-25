var clicked
var selected
var accordianflag;
var ClassName;
$(document).ready(function () {
    selected = sessionStorage.getItem('selected');

    if (selected == null) {
        selected = '#faqaccount_partialma';
        $(selected).click();
        $(selected).parent().addClass('active');
        Name = $(selected).attr('url');
        GetFAQContentData(Name, 'FAQ')
    }
    else {
        $(selected).click();
        $(selected).parent().addClass('active');
        Name = $(selected).attr('url');
        GetFAQContentData(Name, 'FAQ')
    }
    //$(document).on('click',selected, function () {
    //    alert("")
    //    $(this).addClass('active');
    //    Name = $(this).attr('url');
    //    clicked = $(this).closest("ul").attr('class').split(" ");
    //    PageName = clicked[5]
    //    GetFAQContentData(Name, PageName)
    //});

    $(document).on('click', '.faqmenu a', function () {
        clicked = $(this).attr('class').split(" ");
        ClassName = "#" + clicked[1];
        
        if (ClassName == '#faqaccount_partialbfd1') {

            var str = ClassName;
            var res = str.replace(ClassName, "#faqaccount_partialbfd");
            ClassName = res;
            //alert(ClassName);
        }
        else if (ClassName == '#faqaccount_partialbca1') {
            var str = ClassName;
            var res = str.replace(ClassName, "#faqaccount_partialbca");
            ClassName = res;
        } 
        else if (ClassName == '#faqaccount_partialfd1') {
            var str = ClassName;
            var res = str.replace(ClassName, "#faqaccount_partialfd");
            ClassName = res;
        }
        else if (ClassName == '#faqaccount_partialca1') {
            var str = ClassName;
            var res = str.replace(ClassName, "#faqaccount_partialca");
            ClassName = res;
        }
        else {
            ClassName;
        }
        //alert(ClassName);

        if (clicked[1] == 'faqaccount_partialir' || clicked[1] == 'faqaccount_partialseca' || clicked[1] == 'faqaccount_partialpsd2') {
            sessionStorage.setItem('expand', 'no');
        }
        else {
            sessionStorage.setItem('expand', '');
        }
        sessionStorage.setItem('selected', ClassName);
        sessionStorage.setItem('home', 'test');
        // GetFAQNavigationData()
    });
    $(document).on('click', '.faqmenu-nav a', function () {
        clicked = $(this).attr('class').split(" ");
        if (clicked[1] == 'faqaccount_partialca' || clicked[1] == 'faqaccount_partialbca' || clicked[1] == 'faqaccount_partial' || clicked[1] == 'faqaccount_partialfd' || clicked[1] == 'faqaccount_partialbfd' || clicked[1] == 'faqaccount_partialnri' || clicked[1] == 'faqaccount_partialdc' || clicked[1] == 'faqaccount_partialmt' || clicked[1] == 'faqaccount_partialcisa') {
             sessionStorage.setItem('expand', 'yes');
            ClassName = "#" + clicked[1];
            sessionStorage.setItem('selected', ClassName);
           // alert(sessionStorage.getItem(ClassName));
            // GetFAQNavigationData()
            
        }
    });
    $(document).on('click', '.faqmenu1', function () {
        clicked = $(this).attr('class').split(" ");
        ClassName = "#" + clicked[1];
        sessionStorage.setItem('selected', ClassName);
        if (clicked[1] == 'faqaccount_partialpsd2' || clicked[1] == 'faqaccount_partialir') {
            sessionStorage.setItem('expand', 'no');
        }
        // GetFAQNavigationData()
    });

    $('#faqaccount_partialirbb').click(function () {
        ClassName = "#faqaccount_partialir";
        sessionStorage.setItem('selected', ClassName);
        sessionStorage.setItem('expand', 'no');
        // GetFAQNavigationData()
    });

    $(document).on('click', '.faqaccount_partialircisa', function () {
        ClassName = "#faqaccount_partialir";
        sessionStorage.setItem('expand', 'no');
        sessionStorage.setItem('selected', ClassName);
        // GetFAQNavigationData()
    });

    $('.menu-tab-nav li a').on('click', function () {
        $('.menu-tab-nav li').removeClass('active');
        $(this).addClass('active');
        Name = $(this).attr('url');
        ClassName = ("#" + $(this).attr('id'));
        sessionStorage.setItem('selected', ClassName);
        if (document.body.clientWidth < 768) {
            var elmnt = document.getElementById("tab-content");
            elmnt.scrollIntoView();
        }
        if (Name == 'Interest Rate' || Name == 'Security Advisory' || Name == 'PSD2') {
            $("#Information_click").attr('style', 'display:none');
        }
        else {
            $("#Information_click").attr('style', 'display:block');
        }
        clicked = $(this).closest("ul").attr('class').split(" ");
        PageName = clicked[5]
        GetFAQContentData(Name, PageName)
        $(document).ready(function () {
            GetAllNavigationItems();
        });
    });

    $('.outside_faq').on('click', function () {
        $(this).addClass('active');
        Name = $(this).attr('url');
        PageName = 'FAQ'
        GetFAQContentData(Name, PageName)
    });


});

// if (ClassName == 'faqaccount_partialbfd1') {
//     alert("123");
    
//     ClassName = res;
//     ClassName = "#" + "faqaccount_partialbfd";
//     sessionStorage.setItem('selected', ClassName);
//     Name = "Business Fixed Deposits";
//     alert(Name);
//     GetFAQContentData(Name, PageName);
    
//}

function GetFAQContentData(Name, PageName) {
//    if (Name == null) {
//        Name = "Money Transfer"
//    }
    $.ajax({
        cache: false,
        url: $("#hdnPath").val() + '/FAQ/GetFAQContentData',
        type: 'GET',
        data: {
            "Name": Name,
            "PageName": PageName
        },
         contentType: 'application/json;',
        dataType: 'json',
        success: function (Data) {
            $('#home').html(Data.FAQContent);
        }
    });
}


//function GetFAQNavigationData() {
//    $.ajax({
//        cache: false,
//        url: $("#hdnPath").val() + '/NavigationItem/GetNavigationData',
//        type: 'GET',
//        contentType: 'application/json;',
//        data: { "htmlClass": 'faqaccount_partial' },
//        dataType: 'json',
//        success: function (Data) {
//            sessionStorage.setItem('breadCrumb', Data.breadCrumbs)
//            sessionStorage.setItem('title', Data.NavData.Title)
//            sessionStorage.setItem('description', Data.NavData.Description)
//            sessionStorage.setItem('keyword', Data.NavData.Keywords)
//        }
//    });
//}