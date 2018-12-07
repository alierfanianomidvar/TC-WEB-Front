var carId;
$.ajax({
    url: "http://172.20.10.6:5000/api/v1/cars/user",
    contentType: "application/json",
    dataType: "json",
    async: false,
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

$("#myCarList").click(function () {
    window.location.replace("http://172.20.10.6:5000/templates/html/ListOfUserCar.html")
});

$("#myAddCar").click(function () {
    window.location.replace("http://172.20.10.6:5000/templates/html/User-Addcar.html")
});

$("#myLogout").click(function () {
    window.location.replace("http://172.20.10.6:5000/templates/html/Login.html")
})

$("#myDelete").click(function () {
    $.ajax({
        method: "DELETE",
        url: "http://172.20.10.6:5000/api/v1/cars/" + carId,
        contentType: "application/json",
        dataType: "json",
        async: false,
        success: function (j) {
            window.location.replace("http://172.20.10.6:5000/templates/html/ListOfUserCar.html")
        }
    })
});
console.log("aaaaa");

$("#mySave").click(function () {
    var price = $("input[name=price]").val();
    var kilometer = $("input[name=kilometer]").val();
    var description = $("input[name=description]").val();
    var car = {description: description, kilometer: kilometer, price: price};
    $.ajax({
        method: "PUT",
        url: "http://172.20.10.6:5000/api/v1/cars/" + carId,
        data :JSON.stringify(car),
        contentType: "application/json",
        dataType: "json",
        async: false,
        success: function (j) {
            window.location.replace("http://172.20.10.6:5000/templates/html/ListOfUserCar.html")
        }
    })
});