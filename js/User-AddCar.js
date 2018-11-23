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
})


var SCREENER_FORM_ID = '#screener-form',
    REGEX_EMAIL = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

function groupSelect(sel) {
    var el = document.querySelector(SCREENER_FORM_ID),
        val = sel.value.toLowerCase();

    [].forEach.call(el.getElementsByClassName('ques-form'), function (quesForm) {
        quesForm.classList.add('hide');
    });
    el.getElementsByClassName(val + '-form')[0].classList.remove('hide');
}

/**
 * Returns if the email id entered is valid
 * @param email
 */
function isValidEmail(email) {
    return REGEX_EMAIL.test(email);
}

function getFieldInputData() {
    var el = document.querySelectorAll('#screener-form .field-input'),
        data = {};
    [].forEach.call(el, function (inputField) {
        var dataId = inputField.dataset.id.split(':') || [],
            inputValue = inputField.value,
            closestControlGrp = inputField.closest('.control-group'),
            isRequiredField = closestControlGrp.dataset.required;
        if (isRequiredField && !inputValue) { //If it's a required field and is empty
            closestControlGrp.classList.add('error');
        }

        if (closestControlGrp.dataset.type === 'email' && !isValidEmail(inputValue)) { //If it's an email field and not correct email
            closestControlGrp.classList.add('error');
        }

        //To support contactInfo:zipCode in nested manner - done for only 2 levels for now
        if (dataId[1]) {
            debugger;
            data[dataId[0]] = {};
            data[dataId[0]][dataId[1]] = inputValue;
        } else {
            data[dataId[0]] = inputValue;
        }
    });

//Set the interests
    var interestsEl = document.querySelector('#screener-form .sc-interests'),
        interests = [];
    [].forEach.call(interestsEl.getElementsByClassName('opt-cb'), function(option) {
        option.checked && interests.push(option.dataset.id);
    });
    data.interests = interests;

    return data;
}

function getQuestionsData() {
    var questions = document.querySelectorAll('#screener-form .ques-form:not(.hide)')[0].getElementsByClassName('control-group'), //Fetch the question form which is not hidden i.e. selected
        data = [];

    [].forEach.call(questions, function (ques) {
        var optsSelected = [];
        [].forEach.call(ques.getElementsByClassName('opt-cb'), function (option) {
            option.checked && optsSelected.push(option.dataset.id);
        });

        if(optsSelected[0]){
            data.push({questions: ques.dataset.id, answers: optsSelected });
        }

        console.log(data);
    });
    return data;
}

function getData() {
    var inputData = getFieldInputData(),
        contactInfo = getContactInfo(),
        questionsData = {
            screenerResponse: getQuestionsData()
        };

    return Object.assign({}, inputData, contactInfo, questionsData);
}

function onSave() {
    var data,
        el = document.querySelectorAll('#screener-form .control-group'),
        error;

    [].forEach.call(el, function (group) {
        group.classList.remove('error');
    });

    data = getData();

    [].forEach.call(el, function (group) {
        group.classList.contains('error') && ( error = true);
    });
    console.log(data);
    error || request('POST', 'xb-screener', JSON.stringify(data));
}




function request(method, url, data) {

    var xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(data || null);
    xhr.onload = function (e) {
        if (xhr.status === 200) {
            console.log('xhr successful');
        } else {
            console.error('xhr unsuccessful');
        }
    }
}

function openImageUploadBox(event) {
    event.preventDefault();
    event.stopPropagation();

    var input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.addEventListener('change', handleUpload);
    input.click();
}
function handleUpload(event) {
    var files = event.target.files,
        fileAPISupported = window.File && window.FileReader && window.FileList && window.Blob;

    if (files && files.length && fileAPISupported) {
        var file = files[0],
            reader = new FileReader();

        reader.onload = function(e) {
            var imageSource = e.target.result,
                formData = new FormData();
            formData.append( 'file', file ),
                img = document.getElementById('profilePic');
            console.log(img);
            img.src = imageSource;
            img.classList.add('hasImg');
            selectedMedia = {
                assetType: 'PHOTO',
                mediaUrl: ''
            };
            // $.ajax({
            //   url: XB_SERVER_URL + 'public/authenticated/upload?assetType=PHOTO&uploadTrackerId='+guid()+'&file='+encodeURIComponent( file.name ),
            //   data: formData,
            //   processData: false,
            //   contentType: false,
            //   type: 'POST',
            //   success: function(){
            //     loadImageBox(imageSource);
            //   },
            //   error: function() {
            //     alert('There was an error selecting the photo');
            //   }
            // });
        }
        reader.readAsDataURL(file);
    }
}
