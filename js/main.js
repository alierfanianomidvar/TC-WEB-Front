
$("#myLogin").click(function () {
    var username = $("input[name=username]").val();
    var password = $("input[name=password]").val();

    var person = {username : username , password : password};

    var token;

    $.ajax({
        type: "POST",
        data :JSON.stringify(person),
        url: "http://172.20.10.6:5000/api/v1/users/login",
        contentType: "application/json",
        dataType: "json",
        async: false,
        success: function(j){
            if (j.status == "invalid credentials!"){
                window.alert("Invalid username and password");
                window.location.replace("http://172.20.10.6:5000/templates/html/Login.html");
            }else{
                token = j.token;
                $.cookie("token",token);
                if (j.object.role=="admin") {
                    console.log("asasasasasa");
                    window.location.replace("http://172.20.10.6:5000/templates/html/Adminpage.html");
                }
                else {
                    console.log("bbbbbbbbbb");
                    window.location.replace("http://172.20.10.6:5000/templates/html/User-profilepage.html");
                }
                //user profile
            }
        }
    })
});