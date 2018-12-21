var token = $.cookie("token");
$.ajax({
    url: ip + "/api/v1/cars/user",
    contentType: "application/json",
    dataType: "json",
    async: false,
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Access-Token', token);
    },
    success: function (j) {
        var obj = j.object;
        console.log(obj[0].name);
        carId = obj[0].id;
        $("#myName").append(obj[0].name);
        $("#myCompany").append(obj[0].factory);
        $("#mycost").attr("placeholder",obj[0].price);
        $("#mykilomete").attr("placeholder",obj[0].kilometer);
        if (obj[0].atomate == true) {
            $("#myautomate").append("Automate")
        }else{
            $("#myautomate").append("Manual")
        }
        $("#myYear").append(obj[0].year);
        $("#mydesc").attr("placeholder",obj[0].description)
    }
});

$("#homebutt").click(function () {
    window.location.replace("../html/User-profilepage.html")
});

$("#myCarList").click(function () {
    window.location.replace("../html/ListOfUserCar.html")
});

$("#myAddCar").click(function () {
    window.location.replace("../html/User-Addcar.html")
});

$("#myLogout").click(function () {
    window.location.replace("../html/Login.html");
    token = $.cookie("token",null)
});

$("#myDelete").click(function () {
    $.ajax({
        method: "DELETE",
        url: ip + "/api/v1/cars/" + carId,
        contentType: "application/json",
        dataType: "json",
        async: false,
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Access-Token', token);
        },
        success: function (j) {
            window.location.replace("../html/ListOfUserCar.html")
        }
    })
});

$("#mySave").click(function () {
    // var price = $("input[name=price]").val();
    var price;
    if ($("input[name=price]").val() == ""){
        price = $("#mycost").attr("placeholder");
    }else{
        price = $("input[name=price]").val();
    }

    // var kilometer = $("input[name=kilometer]").val();
    var kilometer;
    if ($("input[name=kilometer]").val() == ""){
        kilometer = $("#mykilomete").attr("placeholder");
    }else {
        kilometer = $("input[name=kilometer]").val()
    }
    // var description = $("input[name=description]").val();
    var description;
    if ($("input[name=description]").val() == "") {
        description = $("#mydesc").attr("placeholder");
    }else {
        description = $("input[name=description]").val();
    }
    var car = {description: description, kilometer: kilometer, price: price};
    $.ajax({
        method: "PUT",
        url: ip + "/api/v1/cars/" + carId,
        data :JSON.stringify(car),
        contentType: "application/json",
        dataType: "json",
        async: false,
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Access-Token', token);
        },
        success: function (j) {
            window.location.replace("../html/ListOfUserCar.html")
        }
    })
});