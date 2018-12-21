
var carId;

var token = $.cookie("token");

$.ajax({
    url: ip + "/api/v1/cars",
    contentType: "application/json",
    dataType: "json",
    async: false,
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Access-Token', token);
    },
    success: function (j) {
        var obj = j.object;
        $(obj).each(function(i, item){
            $(".but" + (i+1)).attr("id","rent" + item.id);
            $(".name" + (i+1)).append(item.name)
            $(".company" + (i+1)).append(item.factory)
            $(".cost" + (i+1)).append(item.price)
            $(".kilometer" + (i+1)).append(item.kilometer)
        })
    }
});

$("#homeButt").click(function () {
    window.location.replace("../html/UserProfile.html")
});

$("#myCarList").click(function () {
    window.location.replace("../html/ListOfUserCar.html")
});

$("#myAddCar").click(function () {
    window.location.replace("../html/User-Addcar.html")
});

$("#myLogout").click(function () {
    window.location.replace("../html/Login.html")
    token = $.cookie("token",null)
});

$("#cd").click(function () {
    $.ajax({
        url: ip + "/api/v1/sort/cars/price/0",
        contentType: "application/json",
        dataType: "json",
        async: false,
        success: function (j) {
            var obj = j.object;
            $(obj).each(function(i, item){
                $(".but" + (i+1)).attr("id","rent" +item.id);
                $(".name" + (i+1)).empty();
                $(".name" + (i+1)).append(item.name);
                $(".company" + (i+1)).empty();
                $(".company" + (i+1)).append(item.factory);
                $(".cost" + (i+1)).empty();
                $(".cost" + (i+1)).append(item.price);
                $(".kilometer" + (i+1)).empty();
                $(".kilometer" + (i+1)).append(item.kilometer)
            })
        }
    });
});

$("#ca").click(function () {
    $.ajax({
        url: ip + "/api/v1/sort/cars/price/1",
        contentType: "application/json",
        dataType: "json",
        async: false,
        success: function (j) {
            var obj = j.object;
            $(obj).each(function(i, item){
                $(".but" + (i+1)).attr("id","rent" + item.id);
                $(".name" + (i+1)).empty();
                $(".name" + (i+1)).append(item.name);
                $(".company" + (i+1)).empty();
                $(".company" + (i+1)).append(item.factory);
                $(".cost" + (i+1)).empty();
                $(".cost" + (i+1)).append(item.price);
                $(".kilometer" + (i+1)).empty();
                $(".kilometer" + (i+1)).append(item.kilometer)
            })
        }
    });
});

$("#ya").click(function () {
    $.ajax({
        url: ip + "/api/v1/sort/cars/year/1",
        contentType: "application/json",
        dataType: "json",
        async: false,
        success: function (j) {
            var obj = j.object;
            $(obj).each(function(i, item){
                $(".but" + (i+1)).attr("id","rent" + item.id);
                $(".name" + (i+1)).empty();
                $(".name" + (i+1)).append(item.name);
                $(".company" + (i+1)).empty();
                $(".company" + (i+1)).append(item.factory);
                $(".cost" + (i+1)).empty();
                $(".cost" + (i+1)).append(item.price);
                $(".kilometer" + (i+1)).empty();
                $(".kilometer" + (i+1)).append(item.kilometer)
            })
        }
    });
});

$("#yd").click(function () {
    $.ajax({
        url: ip + "/api/v1/sort/cars/year/0",
        contentType: "application/json",
        dataType: "json",
        async: false,
        success: function (j) {
            var obj = j.object;
            $(obj).each(function(i, item){
                $(".but" + (i+1)).attr("id","rent" + item.id);
                $(".name" + (i+1)).empty();
                $(".name" + (i+1)).append(item.name);
                $(".company" + (i+1)).empty();
                $(".company" + (i+1)).append(item.factory);
                $(".cost" + (i+1)).empty();
                $(".cost" + (i+1)).append(item.price);
                $(".kilometer" + (i+1)).empty();
                $(".kilometer" + (i+1)).append(item.kilometer)
            })
        }
    });
});



$("#rent1").click(function () {
    Cookies.set('id', 1);
    window.location.replace("http://172.20.10.6:5000" + "/templates/html/profilePage.html");

});

$("#rent2").click(function () {
    Cookies.set('id', 2);

    window.location.replace("http://172.20.10.6:5000" + "/templates/html/profilePage.html");
});

$("#rent3").click(function () {
    Cookies.set('id', 3);

    window.location.replace("http://172.20.10.6:5000" + "/templates/html/profilePage.html");
});

$("#rent4").click(function () {
    Cookies.set('id', 4);

    window.location.replace("http://172.20.10.6:5000" + "/templates/html/profilePage.html");
});

$("#rent5").click(function () {
    Cookies.set('id', 5);

    window.location.replace("http://172.20.10.6:5000" + "/templates/html/profilePage.html");
});

$("#rent6").click(function () {
    Cookies.set('id', 6);

    window.location.replace("http://172.20.10.6:5000" + "/templates/html/profilePage.html");
});


