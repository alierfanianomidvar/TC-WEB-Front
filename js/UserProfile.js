$.ajax({
    url: "http://172.20.10.6:5000/api/v1/cars",
    contentType: "application/json",
    dataType: "json",
    async: false,
    success: function (j) {
        var obj = j.object;
        $(obj).each(function(i, item){
            $(".name" + (i+1)).append(item.name)
            $(".company" + (i+1)).append(item.factory)
            $(".cost" + (i+1)).append(item.price)
            $(".kilometer" + (i+1)).append(item.kilometer)
        })
    }
});

$("#rent1").click(function () {
    $.ajax({
        type: "GET",
        // data :JSON.stringify(person),
        url: "http://172.20.10.6:5000/api/v1/cars/" + "1",
        contentType: "application/json",
        dataType: "json",
        async: false,
        success: function(j){
            window.location.replace("file:///D:/TC-WEB-Front/html/profilePage.html");
            var obj = j.object;
            $("#myName").append(obj.name);
            $("#myCost").append(obj.price);
            $("#myYear").append(obj.year);
            $("#myKilometer").append(obj.kilometer);
            $("#myAutomatic").append(obj.automate);
            $("#myColor").append(obj.color);
            $("#myDescription").append(obj.description);
        }
    })
});

$("#rent2").click(function () {
    $.ajax({
        type: "POST",
        data :JSON.stringify(person),
        url: "http://172.17.11.7:5000/api/v1/auth/signup",
        contentType: "application/json",
        dataType: "json",
        async: false,
        success: function(j){
            console.log(j.status)
        }
    })
});

$("#rent3").click(function () {
    $.ajax({
        type: "POST",
        data :JSON.stringify(person),
        url: "http://172.17.11.7:5000/api/v1/auth/signup",
        contentType: "application/json",
        dataType: "json",
        async: false,
        success: function(j){
            console.log(j.status)
        }
    })
});

$("#rent4").click(function () {
    $.ajax({
        type: "POST",
        data :JSON.stringify(person),
        url: "http://172.17.11.7:5000/api/v1/auth/signup",
        contentType: "application/json",
        dataType: "json",
        async: false,
        success: function(j){
            console.log(j.status)
        }
    })
});

$("#rent5").click(function () {
    $.ajax({
        type: "POST",
        data :JSON.stringify(person),
        url: "http://172.17.11.7:5000/api/v1/auth/signup",
        contentType: "application/json",
        dataType: "json",
        async: false,
        success: function(j){
            console.log(j.status)
        }
    })
});

$("#rent6").click(function () {
    $.ajax({
        type: "POST",
        data :JSON.stringify(person),
        url: "http://172.17.11.7:5000/api/v1/auth/signup",
        contentType: "application/json",
        dataType: "json",
        async: false,
        success: function(j){
            console.log(j.status)
        }
    })
});


