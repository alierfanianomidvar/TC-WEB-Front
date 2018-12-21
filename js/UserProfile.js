
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
            /*$(".but" + (i+1)).attr("id","rent" + item.id);
            $(".name" + (i+1)).append(item.name)
            $(".company" + (i+1)).append(item.factory)
            $(".cost" + (i+1)).append(item.price)
            $(".kilometer" + (i+1)).append(item.kilometer)*/
            // var gift = gifts[i];
            // console.log(gift);
            var box = document.createElement('div');
            box.setAttribute('class', 'w3-half w3-margin-bottom col-sm-4');
            var img = document.createElement('img');
            img.src = "../img/6572131-tehran-wallpapers.jpg";
            img.setAttribute('style' , 'width:100%')
            var info = document.createElement('div');
            info.setAttribute('class', 'w3-container w3-white');
            var name = document.createElement('h3');
            name.innerHTML = item.name;//kia
            var companey = document.createElement('h4');
            companey.innerHTML = item.factory;//kia
            var cost = document.createElement('p');
            cost.innerHTML = " Cost : " + item.price;//kia
            var kilometer1 = document.createElement('p');
            kilometer1.innerHTML = item.kilometer;//kia
            var button = document.createElement('button');
            button.setAttribute('class', 'w3-button w3-margin-bottom');
            button.setAttribute('name','rent');//kia
            button.setAttribute('id',item.id);//kia
            button.setAttribute('onclick','confirmGiftInfo(this)');
            button.innerHTML = "Rent";
            info.appendChild(name);
            info.appendChild(companey);
            info.appendChild(cost);
            info.appendChild(kilometer1);
            info.appendChild(button);
            box.appendChild(img);
            box.appendChild(info)
            document.getElementById('CarList').appendChild(box);
        })
    }
});

$("#myCarList").click(function () {
    window.location.replace("../html/ListOfUserCar.html")
});

$("#myAddCar").click(function () {
    window.location.replace("../html/User-Addcar.html")
});

$("#myLogout").click(function () {
    window.location.replace("../html/Login.html")
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



// $("#rent1").click(function () {
//     Cookies.set('id', 1);
//     window.location.replace("http://172.20.10.6:5000" + "/templates/html/profilePage.html");
//
// });
//
// $("#rent2").click(function () {
//     Cookies.set('id', 2);
//
//     window.location.replace("http://172.20.10.6:5000" + "/templates/html/profilePage.html");
// });
//
// $("#rent3").click(function () {
//     Cookies.set('id', 3);
//
//     window.location.replace("http://172.20.10.6:5000" + "/templates/html/profilePage.html");
// });
//
// $("#rent4").click(function () {
//     Cookies.set('id', 4);
//
//     window.location.replace("http://172.20.10.6:5000" + "/templates/html/profilePage.html");
// });
//
// $("#rent5").click(function () {
//     Cookies.set('id', 5);
//
//     window.location.replace("http://172.20.10.6:5000" + "/templates/html/profilePage.html");
// });
//
// $("#rent6").click(function () {
//     Cookies.set('id', 6);
//
//     window.location.replace("http://172.20.10.6:5000" + "/templates/html/profilePage.html");
// });
$("button[name=rent]").click(function () {
    var myId = $(this).attr("id");
    carId = $.cookie("carId",myId);
    window.location.replace("../html/profilePage.html")
});



