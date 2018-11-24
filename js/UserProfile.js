$.ajax({
    url: "http://172.17.9.255:5000/api/v1/cars",
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
