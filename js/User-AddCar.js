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
        url: ip + "/api/v1/cars",
        contentType: "application/json",
        dataType: "json",
        async: false,
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Access-Token', token);
        },
        success: function(j){
            $.cookie("thisCarId",j.object.id);

            var data = new FormData();
            // $.each($('#imageUpload')[0].files, function(i, file) {
            //     data.append('file-'+i, file);
            // });
            data.append( 'file', $( '#imageUpload' )[0].files[0] );
            $.ajax({
                type: "POST",
                data :data,
                url: ip + "/api/v1/images/" + $.cookie("thisCarId"),
                contentType: false,
                processData: false,
                async: false,
                beforeSend: function (xhr) {
                    xhr.setRequestHeader('Access-Token', token);
                },
                success: function(j){
                    window.location.replace("../html/User-profilepage.html")
                    console.log("success")
                }
            })
        }
    });
});
