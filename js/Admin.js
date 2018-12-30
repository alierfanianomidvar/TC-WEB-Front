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
            window.location.replace("../html/Adminpage.html")
        }
    })
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

$("#cars").click(function () {
    window.location.replace("../html/ListOfAdminCar.html")
});



