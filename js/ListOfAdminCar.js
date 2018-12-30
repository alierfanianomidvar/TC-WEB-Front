var token = $.cookie("token");
$.ajax({
    url: ip + "/api/v1/cars/user",
    contentType: "application/json",
    dataType: "json",
    async: false,
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Access-Token', token);
    },
    success: function (j) {
        var obj = j.object;
        // console.log(obj[0].name);
        // carId = obj[0].id;
        // $("#myName").append(obj[0].name);
        // $("#myCompany").append(obj[0].factory);
        // $("#mycost").attr("placeholder",obj[0].price);
        // $("#mykilomete").attr("placeholder",obj[0].kilometer);
        // if (obj[0].atomate == true) {
        //     $("#myautomate").append("Automate")
        // }else{
        //     $("#myautomate").append("Manual")
        // }
        // $("#myYear").append(obj[0].year);
        // $("#mydesc").attr("placeholder",obj[0].description)
        $(obj).each(function(i, item){
            // $(".but" + (i+1)).attr("id","rent" + item.id);
            // $(".name" + (i+1)).empty();
            // $(".name" + (i+1)).append(item.name);
            // $(".company" + (i+1)).empty();
            // $(".company" + (i+1)).append(item.factory);
            // $(".cost" + (i+1)).empty();
            // $(".cost" + (i+1)).append(item.price);
            // $(".kilometer" + (i+1)).empty();
            // $(".kilometer" + (i+1)).append(item.kilometer)

            var btnacc = document.createElement('button');
            btnacc.setAttribute('class', 'accordion');
            // button.setAttribute('onclick','myFunction()');
            btnacc.innerHTML = item.name;//kia

            var carpanle = document.createElement('div');
            carpanle.setAttribute('class', 'panel');


            var edit = document.createElement('div');
            edit.setAttribute('class','text-right');

            var editbtn = document.createElement('button');
            editbtn.setAttribute('class', 'btn btn-block');
            editbtn.setAttribute('name','edit');//kia
            editbtn.setAttribute('name',item.id);//kia
            //editbtn.setAttribute('onclick','myFunction1()');
            editbtn.setAttribute('style','font-size:24px');

            var far = document.createElement('i');
            far.setAttribute('class', 'fas fa-edit');

            editbtn.appendChild(far);
            edit.appendChild(editbtn);


            var carinfo = document.createElement('div');
            carinfo.setAttribute('class','text-left');


            var hr = document.createElement('hr');
            var name = document.createElement('p');
            name.setAttribute('style','padding-top: 7px');
            var namespan = document.createElement('span');
            namespan.setAttribute('class', 'glyphicon glyphicon-user');
            namespan.setAttribute('style','padding-right: 3px');

            name.appendChild(namespan);//<p><span>
            name.innerHTML = "Name : " + item.name ;//kia

            var hr1 = document.createElement('hr');
            var companyname = document.createElement('p');
            companyname.setAttribute('style','padding-top: 7px');
            var cospan = document.createElement('span');
            cospan.setAttribute('class', 'glyphicon glyphicon-user');
            cospan.setAttribute('style','padding-right: 3px');

            companyname.appendChild(cospan);//<p><span>
            companyname.innerHTML = "companyname Name : " + item.factory; //kia

            var hr2 = document.createElement('hr');
            var costcar = document.createElement('p');
            costcar.setAttribute('style','padding-top: 7px');
            var costspan = document.createElement('span');
            costspan.setAttribute('class', 'glyphicon glyphicon-user');
            costspan.setAttribute('style','padding-right: 3px');

            costcar.appendChild(costspan);//<p><span>
            costcar.innerHTML = "Cost : "; //kia

            var costinput = document.createElement('input');
            costinput.setAttribute('id' , 'mycost'); // kia
            costinput.setAttribute('name' , 'price'); // kia
            costinput.setAttribute('type' , 'text');
            costinput.setAttribute('placeholder', item.price);
            costcar.appendChild(costinput);



            var hr3 = document.createElement('hr');
            var kmcar = document.createElement('p');
            kmcar.setAttribute('style','padding-top: 7px');
            var kmspan = document.createElement('span');
            kmspan.setAttribute('class', 'glyphicon glyphicon-user');
            kmspan.setAttribute('style','padding-right: 3px');

            kmcar.appendChild(kmspan);//<p><span>
            kmcar.innerHTML = "kilometer : " ; //kia

            var kminput = document.createElement('input');
            kminput.setAttribute('id' , 'mykilometer'); // kia
            kminput.setAttribute('name' , 'kilometer'); // kia
            kminput.setAttribute('type' , 'text');
            kminput.setAttribute('placeholder', item.kilometer);

            kmcar.appendChild(kminput);


            var hr4 = document.createElement('hr');
            var myautomate = document.createElement('p');
            myautomate.setAttribute('style','padding-top: 7px');
            var autspan = document.createElement('span');
            autspan.setAttribute('class', 'glyphicon glyphicon-user');
            autspan.setAttribute('style','padding-right: 3px');

            myautomate.appendChild(autspan);//<p><span>
            if (item.atomate == true) {
                myautomate.innerHTML = " Automate : " +'Automate'; //kia
            }else{
                myautomate.innerHTML = " Automate : " + 'Manual';//kia
            }


            var hr5 = document.createElement('hr');
            var year = document.createElement('p');
            year.setAttribute('style','padding-top: 7px');
            var yearspan = document.createElement('span');
            yearspan.setAttribute('class', 'glyphicon glyphicon-user');
            yearspan.setAttribute('style','padding-right: 3px');

            year.appendChild(yearspan);//<p><span>
            year.innerHTML = " Year : " + item.year; //kia

            var hr6 = document.createElement('hr');
            var description = document.createElement('p');
            description.setAttribute('style','padding-top: 7px');
            var despan = document.createElement('span');
            despan.setAttribute('class', 'glyphicon glyphicon-user');
            despan.setAttribute('style','padding-right: 3px');

            description.appendChild(despan);//<p><span>
            description.innerHTML = "Description : " ; //kia

            var desinput = document.createElement('input');
            desinput.setAttribute('id' , 'mydesc'); // kia
            desinput.setAttribute('name' , 'description'); // kia
            desinput.setAttribute('type' , 'text');
            desinput.setAttribute('placeholder', item.description);
            description.appendChild(desinput);


            var hr7 = document.createElement('hr');
            var deletebtn = document.createElement('button');
            deletebtn.setAttribute('class','btn btn-danger');
            deletebtn.setAttribute('name','delete'); //kia
            deletebtn.setAttribute('id',item.id); //kia

            var dbtnspan = document.createElement('span');
            dbtnspan.setAttribute('class', 'glyphicon glyphicon-remove');
            dbtnspan.setAttribute('style','padding-right: 3px');


            deletebtn.appendChild(dbtnspan);//<p><span>
            deletebtn.innerHTML = "Delete"


            var hr8 = document.createElement('hr');
            var savebtn = document.createElement('button');
            savebtn.setAttribute('class','btn btn-danger');
            savebtn.setAttribute('name','save');
            savebtn.setAttribute('id', item.id);
            var savespan = document.createElement('span');
            savespan.setAttribute('class', 'glyphicon glyphicon-save');
            savespan.setAttribute('style','padding-right: 3px');


            savebtn.appendChild(savespan);//<p><span>
            savebtn.innerHTML = "Save";

            carinfo.appendChild(hr);
            carinfo.appendChild(name);
            carinfo.appendChild(hr1);
            carinfo.appendChild(companyname);
            carinfo.appendChild(hr2);
            carinfo.appendChild(costcar);
            carinfo.appendChild(hr3);
            carinfo.appendChild(kmcar);
            carinfo.appendChild(hr4);
            carinfo.appendChild(myautomate);
            carinfo.appendChild(hr5);
            carinfo.appendChild(year);
            carinfo.appendChild(hr6);
            carinfo.appendChild(description);
            carinfo.appendChild(hr7);
            carinfo.appendChild(deletebtn);
            carinfo.appendChild(hr8);
            carinfo.appendChild(savebtn);

            carpanle.appendChild(edit);
            carpanle.appendChild(carinfo);

            document.getElementById('UserList').appendChild(btnacc);
            document.getElementById('UserList').appendChild(carpanle);
        })
    }
});

$("#homebutt").click(function () {
    window.location.replace("../html/Adminpage.html")
});

$("#myCarList").click(function () {
    window.location.replace("../html/ListOfAdminCar.html")
});

$("#myAddCar").click(function () {
    window.location.replace("../html/AdminAddCar.html")
});

$("#myLogout").click(function () {
    window.location.replace("../html/Login.html");
    token = $.cookie("token",null)
});

$("button[name=delete]").click(function () {
    var carId = $(this).attr("id");
    $.ajax({
        method: "DELETE",
        url: ip + "/api/v1/cars/" + carId,
        contentType: "application/json",
        dataType: "json",
        async: false,
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Access-Token', token);
        },
        success: function (j) {
            window.location.replace("../html/ListOfUserCar.html")
        }
    })
});

$("button[name=save]").click(function () {
    var carId = $(this).attr("id");
    // var price = $("input[name=price]").val();
    var price;
    if ($("input[name=price]").val() == ""){
        price = $("#mycost").attr("placeholder");
    }else{
        price = $("input[name=price]").val();
    }

    // var kilometer = $("input[name=kilometer]").val();
    var kilometer;
    if ($("input[name=kilometer]").val() == ""){
        kilometer = $("#mykilomete").attr("placeholder");
    }else {
        kilometer = $("input[name=kilometer]").val()
    }
    // var description = $("input[name=description]").val();
    var description;
    if ($("input[name=description]").val() == "") {
        description = $("#mydesc").attr("placeholder");
    }else {
        description = $("input[name=description]").val();
    }
    var car = {description: description, kilometer: kilometer, price: price};
    $.ajax({
        method: "PUT",
        url: ip + "/api/v1/cars/" + carId,
        data :JSON.stringify(car),
        contentType: "application/json",
        dataType: "json",
        async: false,
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Access-Token', token);
        },
        success: function (j) {
            window.location.replace("../html/ListOfUserCar.html")
        }
    })
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


function myFunction() {
    document.getElementById("mycost").disabled = true;
    document.getElementById("mykilomete").disabled = true;
    document.getElementById("mydesc").disabled = true;
    document.getElementById("imageUpload").disabled = true;
}

function myFunction1() {

    document.getElementById("mycost").disabled = false;
    document.getElementById("mykilomete").disabled = false;
    document.getElementById("mydesc").disabled = false;
    document.getElementById("imageUpload").disabled = false;
}