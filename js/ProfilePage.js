
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
    return false;
});

var id = $.cookie("carId");
var token = $.cookie("token");
var myKilometer;
$.ajax({
    type: "GET",
    url: ip + "/api/v1/cars/" + id,
    contentType: "application/json",
    dataType: "json",
    async: false,
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Access-Token', token);
    },
    success: function(j){

        var obj = j.object;
        $("#myName").append(obj.name);
        $("#myCost").append(obj.price);
        $("#myYear").append(obj.year);
        myKilometer = obj.kilometer
        $("#myKilometer").append(obj.kilometer);
        if (obj == true) {
            $("#myAutomatic").append("automate");
        }else {
            $("#myAutomatic").append("manual");
        }
        $("#myColor").append(obj.color);
        $("#myDescription").append(obj.description);
    }
});

$("#rent").click(function () {
    var carId = id;
    var src = $(".src").text();
    var des = $(".des").text();
    var cost = 1000;
    var kilometer = myKilometer;
    var pdate = $(".pdate").val();
    var ddate = $(".ddate").val();
    var car = {car_id: carId, cost: cost, destination: des, end: ddate, kilometer: kilometer,
        source: src, start: pdate};
    $.ajax({
        type: "POST",
        data :JSON.stringify(car),
        url: ip + "/api/v1/rent",
        contentType: "application/json",
        dataType: "json",
        async: false,
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Access-Token', token);
        },
        success: function(j){
            window.location.replace("../html/User-profilepage.html")
        }
    })
});