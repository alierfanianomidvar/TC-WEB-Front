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
            /*$("#myTitle" + (i+1)).append(item.name + " " + item.family);
            $("#myName" + (i+1)).append(item.name);
            $("#myFamily" + (i+1)).append(item.family);
            $("#myAge" + (i+1)).append(item.age);
            $("#myIdNum" + (i+1)).append(item.identificationId);
            $("#myPhone" + (i+1)).append(item.mobile_num);
            $("#myEmail" + (i+1)).append(item.email)
*/

            var btnacc = document.createElement('button');
            btnacc.setAttribute('class', 'accordion');
            // btnacc.setAttribute("id",item.id);
            btnacc.innerHTML = item.lastName;//kia


            var userpanle = document.createElement('div');
            userpanle.setAttribute('class', 'panel');

            var hr = document.createElement('hr');
            var name = document.createElement('p');
            name.setAttribute('style','padding-top: 7px');
            var namespan = document.createElement('span');
            namespan.setAttribute('class', 'glyphicon glyphicon-user');
            namespan.setAttribute('style','padding-right: 3px');

            name.appendChild(namespan);//<p><span>
            name.innerHTML = "Name : " + item.name;//kia

            var hr1 = document.createElement('hr');
            var familyname = document.createElement('p');
            familyname.setAttribute('style','padding-top: 7px');
            var fnamespan = document.createElement('span');
            fnamespan.setAttribute('class', 'glyphicon glyphicon-user');
            fnamespan.setAttribute('style','padding-right: 3px');

            familyname.appendChild(fnamespan);//<p><span>
            familyname.innerHTML = "Family Name : " + item.family; //kia

            var hr2 = document.createElement('hr');
            var age = document.createElement('p');
            age.setAttribute('style','padding-top: 7px');
            var agespan = document.createElement('span');
            agespan.setAttribute('class', 'glyphicon glyphicon-user');
            agespan.setAttribute('style','padding-right: 3px');

            age.appendChild(agespan);//<p><span>
            age.innerHTML = "Age : " + item.age; //kia

            var hr3 = document.createElement('hr');
            var phone = document.createElement('p');
            phone.setAttribute('style','padding-top: 7px');
            var phonespan = document.createElement('span');
            phonespan.setAttribute('class', 'glyphicon glyphicon-user');
            phonespan.setAttribute('style','padding-right: 3px');

            phone.appendChild(phonespan);//<p><span>
            phone.innerHTML = "Phone : " + item.mobile_num; //kia

            var hr4 = document.createElement('hr');
            var id = document.createElement('p');
            id.setAttribute('style','padding-top: 7px');
            var idspan = document.createElement('span');
            idspan.setAttribute('class', 'glyphicon glyphicon-user');
            idspan.setAttribute('style','padding-right: 3px');

            id.appendChild(idspan);//<p><span>
            id.innerHTML = "ID : " + item.identificationId; //kia

            var hr5 = document.createElement('hr');
            var email = document.createElement('p');
            email.setAttribute('style','padding-top: 7px');
            var emailspan = document.createElement('span');
            emailspan.setAttribute('class', 'glyphicon glyphicon-user');
            emailspan.setAttribute('style','padding-right: 3px');

            email.appendChild(emailspan);//<p><span>
            email.innerHTML = "Phone : " + item.email; //kia

            var hr6 = document.createElement('hr');
            var deletebtn = document.createElement('button');
            deletebtn.setAttribute('id',item.id);
            deletebtn.setAttribute('class','btn btn-danger');
            deletebtn.setAttribute('name','delete');
            var dbtnspan = document.createElement('span');
            dbtnspan.setAttribute('class', 'glyphicon glyphicon-remove');
            dbtnspan.setAttribute('style','padding-right: 3px');
            dbtnspan.setAttribute('name','delete');


            deletebtn.appendChild(dbtnspan);//<p><span>
            deletebtn.innerHTML = "Delete";

            userpanle.appendChild(hr);
            userpanle.appendChild(name);
            userpanle.appendChild(hr1);
            userpanle.appendChild(familyname);
            userpanle.appendChild(hr2);
            userpanle.appendChild(age);
            userpanle.appendChild(hr3);
            userpanle.appendChild(phone);
            userpanle.appendChild(hr4);
            userpanle.appendChild(id);
            userpanle.appendChild(hr5);
            userpanle.appendChild(email);
            userpanle.appendChild(hr6);
            userpanle.appendChild(deletebtn);

            document.getElementById('UserList').appendChild(btnacc);
            document.getElementById('UserList').appendChild(userpanle);
        })
    }
});

$("button[name=delete]").click(function () {
    var id = $(this).attr("id");
    $.ajax({
        type: "DELETE",
        url: ip + "/api/v1/users/" + id,
        contentType: "application/json",
        dataType: "json",
        async: false,
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Access-Token', token);
        },
        success: function (j) {
            window.location.replace("../html/AdminUserList.html");
        }
    });
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

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

