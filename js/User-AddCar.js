var token = $.cookie("token");
$("#mySubmit").click(function () {

    var name = $("input[name=car-name]").val();
    var factory = $("input[name=car-company]").val();
    var year = $("input[name=year]").val();
    var color = $("input[name=color]").val();
    var kilometer = $("input[name=kilometer]").val();
    var description = $("input[name=description]").val();
    var automate = $("select[name=automate] option:selected").val();
    var automateBool;
    if (automate == "automate") {
        automateBool = true
    } else {
        automateBool = false
    }
    var price = $("input[name=price]").val();
    var car = {automate: automateBool, color: color, description: description, factory: factory, kilometer: kilometer,
        name: name, price: price, year: year};
    $.ajax({
        type: "POST",
        data :JSON.stringify(car),
        url: "http://172.20.10.6:5000/api/v1/cars",
        contentType: "application/json",
        dataType: "json",
        async: false,
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Access-Token', token);
        },
        success: function(j){
            window.location.replace("http://172.20.10.6:5000/templates/html/User-profilepage.html")
        }
    })
    console.log("aaaaaaaa")
});
