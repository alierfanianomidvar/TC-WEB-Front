
$("#myLogin").click(function () {
    var username = $("input[name=username]").val();
    var password = $("input[name=password]").val();

    var person = {username : username , password : password};

    $.ajax({
        type: "POST",
        data :JSON.stringify(person),
        url: "http://172.20.10.6:5000/api/v1/auth/login",
        contentType: "application/json",
        dataType: "json",
        async: false,
        success: function(j){
            if (j.status == "invalid credentials!"){
                window.alert("Invalid username and password");
                window.location.replace("file:///D:/TC-WEB-Front/html/Login.html");
            }else{
                if (j.object.role=="admin") {
                    console.log("asasasasasa");
                    window.location.replace("file:///D:/TC-WEB-Front/html/Adminpage.html");
                }
                else {
                    console.log("bbbbbbbbbb");
                    window.location.replace("file:///D:/TC-WEB-Front/html/User-profilepage.html");
                }
                 //user profile
            }
        }
    })
});