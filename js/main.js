
$("#myLogin").click(function () {
    var username = $("input[name=username]").val();
    var password = $("input[name=password]").val();

    var person = {username : username , password : password};

    var token;

    $.ajax({
        type: "POST",
        data :JSON.stringify(person),
        url: ip + "/api/v1/users/login",
        contentType: "application/json",
        dataType: "json",
        async: false,
        success: function(j){
            if (j.status == "invalid credentials!"){
                window.alert("Invalid username and password");
                window.location.replace("../html/Login.html");
            }else{
                token = j.token;
                $.cookie("token",token);
                if (j.object.role=="super_admin") {
                    window.location.replace("../html/Adminpage.html");
                }
                else {
                    window.location.replace("../html/User-profilepage.html");
                }
            }
        }
    })
});