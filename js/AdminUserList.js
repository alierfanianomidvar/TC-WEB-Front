var token = $.cookie("token");
$.ajax({
    url: ip + "/api/v1/users",
    contentType: "application/json",
    dataType: "json",
    async: false,
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Access-Token', token);
    },
    success: function (j) {
        var obj = j.object;
        console.log(obj);
        $(obj).each(function(i, item){
            $("#myTitle" + (i+1)).append(item.name + " " + item.family);
            $("#myName" + (i+1)).append(item.name);
            $("#myFamily" + (i+1)).append(item.family);
            $("#myAge" + (i+1)).append(item.age);
            $("#myIdNum" + (i+1)).append(item.identificationId);
            $("#myPhone" + (i+1)).append(item.mobile_num);
            $("#myEmail" + (i+1)).append(item.email)
        })
    }
});

$("#homeButt").click(function () {
    window.location.replace("../html/Adminpage.html")
});

$("#users").click(function () {
    window.location.replace("../html/AdminUserList.html")
});

$("#addCar").click(function () {
    window.location.replace("../html/AdminAddCar.html")
});

$("#logout").click(function () {
    $.cookie("token",null);
    window.location.replace("../html/Login.html")
});

