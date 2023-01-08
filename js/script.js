// input password toglle visibility
// const togglePassword = document.querySelector('#togglePassword');
// const password = document.querySelector('#inputPassword');

function checkEmail() {
    let input = document.getElementById('user-email');
    // console.log(input)
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.value.match(mailformat)) {
        input.classList.add("match-email");
        // document.loginForm.email.focus();
        return true;
    } else {
        input.classList.remove("match-email");
        // document.loginForm.email.focus();
        return false;
    }
}

function showPassword(id) {
    var inputId;
    if (id == 'togglePassword') {
        inputId = 'newPassword';
    } else {
        inputId = 'rePassword';
    }
    const password = document.querySelector('#' + inputId);
    const togglePassword = document.querySelector('#' + id);
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye / eye slash icon
    document.getElementById(id).classList.toggle('eye-slash');
    // image path change
    var img = document.getElementById(id);
    if (img.classList.contains('eye-slash')) {
        document.getElementById(id).src = "images/eye-slash-ic.svg";
    } else {
        document.getElementById(id).src = "images/eye-ic.svg";
    }
}
// togglePassword.addEventListener('click', function (e) {
//     // toggle the type attribute
//     const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
//     password.setAttribute('type', type);
//     // toggle the eye / eye slash icon
//     this.classList.toggle('eye-slash');
//     // image path change
//     var img = document.getElementById('togglePassword');
//     if(img.classList.contains('eye-slash')){
//         document.getElementById("togglePassword").src = "images/eye-slash-ic.svg";   
//     }else{
//         document.getElementById("togglePassword").src = "images/eye-ic.svg";
//     }
// });

// darkmode
const toggleSwitch = document.querySelector('#desktop-switch input[type="checkbox"]');

const currentTheme = localStorage.getItem('theme') ?? 'light'; //this
console.log(currentTheme)
document.body.classList.add(currentTheme)
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }else{
        toggleSwitch.checked = false;
    }
    changeLogo(currentTheme) //this
    changeModeImages(currentTheme) //this
}

function switchTheme(e) {
    var mode = (e.target.checked)?'dark':'light';
    document.documentElement.setAttribute('data-theme', mode)
    localStorage.setItem('theme', mode);

    document.body.classList.remove((mode=='dark')?'light':'dark')
    document.body.classList.add(mode)

    changeLogo(mode)
    changeModeImages(mode)
}

function changeModeImages(mode) { ///this
    var elmId = $("body").attr("id");

    ///for common image group 1
    if(elmId == 'password-request' || elmId == 'new-password' || elmId == 'login-page' || elmId == 'login-confirm' || elmId == 'login-failed' || elmId == 'create-account' || elmId == 'after-creating-account'){
        changePagesImages(mode)
    }

    ///for common image group 2
    if(elmId == 'password-request' || elmId == 'new-password' || elmId == 'login-page'){
        changePagesImages2(mode)
    }

    ///for common image group 3
    if(elmId == 'login-confirm' || elmId == 'login-failed' || elmId == 'after-creating-account'){
        changePagesImages3(mode)
    }

    if (mode == 'dark') {

        if(elmId == 'create-account'){
            document.getElementById('teddy-black').src = "images/teddy-black.webp";
        }else if(elmId = 'account-detail'){

        }else if(elmId = 'new-password'){

        }
    } else {

        if(elmId == 'create-account'){
            document.getElementById('teddy-black').src = "images/teddy-clay.webp";
        }else if(elmId == 'account-detail'){
            
        }
    }
}
function changePagesImages(mode){
    if (mode == 'dark') {
        document.getElementById('solana-logo').src = "images/solana-logo-w.webp";
    } else {
        document.getElementById('solana-logo').src = "images/solana-logo.webp";
    }
}
function changePagesImages2(mode){
    if (mode == 'dark') {
        document.getElementById('teddy-clay').src = "images/black-clay-teddy.webp";
    } else {
        document.getElementById('teddy-clay').src = "images/teddy-clay.webp";
    }
}

function changePagesImages3(mode){
    if (mode == 'dark') {
        document.getElementById('teddy-blue').src = "images/teddy-blue.webp";
    } else {
        document.getElementById('teddy-blue').src = "images/teddy-clay.webp";
    }
}

function changeLogo(mode){ ///this
    if (mode == 'dark') {
        document.getElementById('logo-img').src = "images/logo-w.webp";
        // document.getElementById('solana-logo').src = "images/solana-logo-w.webp";
    } else {
        document.getElementById('logo-img').src = "images/logo.webp";
        // document.getElementById('solana-logo').src = "images/solana-logo.webp";
    }
}

toggleSwitch.addEventListener('change', switchTheme, true);


// box file upload
var $fileInput = $('.file-input');
var $droparea = $('.file-drop-area');

// highlight drag area
$fileInput.on('dragenter focus click', function() {
  $droparea.addClass('is-active');
});

// back to normal state
$fileInput.on('dragleave blur drop', function() {
  $droparea.removeClass('is-active');
});

// change inner text
$fileInput.on('change', function() {
  var filesCount = $(this)[0].files.length;
  var $textContainer = $(this).prev();

  if (filesCount === 1) {
    // if single file is selected, show file name
    var fileName = $(this).val().split('\\').pop();
    $textContainer.text(fileName);
  } else {
    // otherwise show number of files
    $textContainer.text(filesCount + ' files selected');
  }
});



//input lable input file js
$('#file-upload').change(function() {
    var filepath = this.value;
    var m = filepath.match(/([^\/\\]+)$/);
    var filename = m[1];
    $('#filename').html(filename);

});




