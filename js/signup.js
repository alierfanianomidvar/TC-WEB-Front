
//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(".next").click(function(){
    if(animating) return false;
    animating = true;

    current_fs = $(this).parent();
    next_fs = $(this).parent().next();

    //activate next step on progressbar using the index of next_fs
    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

    //show the next fieldset
    next_fs.show();
    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
        step: function(now, mx) {
            //as the opacity of current_fs reduces to 0 - stored in "now"
            //1. scale current_fs down to 80%
            scale = 1 - (1 - now) * 0.2;
            //2. bring next_fs from the right(50%)
            left = (now * 50)+"%";
            //3. increase opacity of next_fs to 1 as it moves in
            opacity = 1 - now;
            current_fs.css({
                'transform': 'scale('+scale+')',
                'position': 'absolute'
            });
            next_fs.css({'left': left, 'opacity': opacity});
        },
        duration: 800,
        complete: function(){
            current_fs.hide();
            animating = false;
        },
        //this comes from the custom easing plugin
        easing: 'easeInOutBack'
    });
});

$(".previous").click(function(){
    if(animating) return false;
    animating = true;

    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();

    //de-activate current step on progressbar
    $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

    //show the previous fieldset
    previous_fs.show();
    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
        step: function(now, mx) {
            //as the opacity of current_fs reduces to 0 - stored in "now"
            //1. scale previous_fs from 80% to 100%
            scale = 0.8 + (1 - now) * 0.2;
            //2. take current_fs to the right(50%) - from 0%
            left = ((1-now) * 50)+"%";
            //3. increase opacity of previous_fs to 1 as it moves in
            opacity = 1 - now;
            current_fs.css({'left': left});
            previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
        },
        duration: 800,
        complete: function(){
            current_fs.hide();
            animating = false;
        },
        //this comes from the custom easing plugin
        easing: 'easeInOutBack'
    });
});

$(".submit").click(function(){
    window.location.replace("http://172.20.10.6:5000/templates/html/Login.html")
})

$("#myNext").click(function () {
    var name = $("input[name=name]").val();
    var family = $("input[name=family]").val();
    var idNum = $("input[name=IdNumber]").val();
    var gender = $("input[name=gender]").val();
    var birthday = $("input[name=birthday]").val();
    var mobileNum = $("input[name=mobileNumber]").val();
    var phoneNum = $("input[name=phoneNumber]").val();
    var username = $("input[name=username]").val();
    var email = $("input[name=email]").val();
    var password = $("input[name=pass]").val();
    var cpassword = $("input[name=cpass]").val();
    var code = $("input[name=emailCode]").val();
    var person = {name : name, family : family, identificationId : idNum , gender : gender , birthday : birthday , mobileNum : mobileNum,
        phoneNum : phoneNum , username : username , email : email , password : password, cpassword : cpassword,
        code : code};
    $.ajax({
        type: "POST",
        data :JSON.stringify(person),
        url: "http://172.20.10.6:5000/api/v1/users/signup",
        contentType: "application/json",
        dataType: "json",
        async: false,
        success: function(j){
            console.log(j.status)
        }
    })
});
