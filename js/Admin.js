// var current_fs, next_fs, previous_fs; //fieldsets
// var left, opacity, scale; //fieldset properties which we will animate
// var animating; //flag to prevent quick multi-click glitches
//
// $(".next").click(function(){
//     if(animating) return false;
//     animating = true;
//
//     current_fs = $(this).parent();
//     next_fs = $(this).parent().next();
//
//     //activate next step on progressbar using the index of next_fs
//     $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
//
//     //show the next fieldset
//     next_fs.show();
//     //hide the current fieldset with style
//     current_fs.animate({opacity: 0}, {
//         step: function(now, mx) {
//             //as the opacity of current_fs reduces to 0 - stored in "now"
//             //1. scale current_fs down to 80%
//             scale = 1 - (1 - now) * 0.2;
//             //2. bring next_fs from the right(50%)
//             left = (now * 50)+"%";
//             //3. increase opacity of next_fs to 1 as it moves in
//             opacity = 1 - now;
//             current_fs.css({
//                 'transform': 'scale('+scale+')',
//                 'position': 'absolute'
//             });
//             next_fs.css({'left': left, 'opacity': opacity});
//         },
//         duration: 800,
//         complete: function(){
//             current_fs.hide();
//             animating = false;
//         },
//         //this comes from the custom easing plugin
//         easing: 'easeInOutBack'
//     });
// });
//
// $(".previous").click(function(){
//     if(animating) return false;
//     animating = true;
//
//     current_fs = $(this).parent();
//     previous_fs = $(this).parent().prev();
//
//     //de-activate current step on progressbar
//     $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
//
//     //show the previous fieldset
//     previous_fs.show();
//     //hide the current fieldset with style
//     current_fs.animate({opacity: 0}, {
//         step: function(now, mx) {
//             //as the opacity of current_fs reduces to 0 - stored in "now"
//             //1. scale previous_fs from 80% to 100%
//             scale = 0.8 + (1 - now) * 0.2;
//             //2. take current_fs to the right(50%) - from 0%
//             left = ((1-now) * 50)+"%";
//             //3. increase opacity of previous_fs to 1 as it moves in
//             opacity = 1 - now;
//             current_fs.css({'left': left});
//             previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
//         },
//         duration: 800,
//         complete: function(){
//             current_fs.hide();
//             animating = false;
//         },
//         //this comes from the custom easing plugin
//         easing: 'easeInOutBack'
//     });
// });
//
// $(".submit").click(function(){
//     return false;
// });

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
    var id = $.cookie("id");
    var car = {automate: automateBool, color: color, description: description, factory: factory, kilometer: kilometer,
        name: name, price: price, user_id: id, year: year};


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
                    window.location.replace("../html/Adminpage.html")
                    console.log("success")
                }
            })
        }
    });

});

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
            // $.ajax({
            //     url: ip + "/api/v1/images/" + item.image_url,
            //     contentType: "application/json",
            //     dataType: "json",
            //     async: false,
            //     beforeSend: function (xhr) {
            //         xhr.setRequestHeader('Access-Token', token);
            //     },
            //     success: function (j) {
            //
            //     }
            // });

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
            img.src = ip + "/api/v1/images/" + item.image_url;
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
            button.innerHTML = "Profile";
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
$("button[name=rent]").click(function () {
    var myId = $(this).attr("id");
    carId = $.cookie("carId",myId);
    window.location.replace("../html/AdminCarProfile.html")
});

function readURL(input) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $("#imagePreview").css("background-image","url(" +  e.target.result + ")")
        };
        reader.readAsDataURL(input.files[0]);
    }
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

$("#cars").click(function () {
    window.location.replace("../html/ListOfAdminCar.html")
});



