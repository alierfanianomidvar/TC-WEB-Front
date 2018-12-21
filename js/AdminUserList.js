var token = $.cookie("token");
$.ajax({
    url: "http://172.20.10.6:5000" + "/api/v1/users",
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