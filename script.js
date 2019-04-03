var captcha_digits = [];

function validateForm() {

    let name_entered = document.forms["validation"]["name-input"].value;
    let message_entered = document.forms["validation"]["textarea-input"].value;
    let captcha_entered = document.forms["validation"]["captcha-input"].value;

    let nameError = document.getElementById('name-error');
    let textError = document.getElementById('text-error');
    let captchaError = document.getElementById('captcha-error');

    if (name_entered == "") {
        nameError.innerHTML = "Missing name";
        textError.innerHTML = "";
        captchaError.innerHTML = "";
        return false;
    }

    else if (message_entered == "") {
        textError.innerHTML = "Missing message";
        return false;
    }

    else if (captcha_entered == "") {
        captchaError.innerHTML = "Missing digits";
        nameError.innerHTML = "";
        textError.innerHTML = "";
        return false;

    } else if (captcha_entered != captcha_digits) {
        nameError.innerHTML = "";
        textError.innerHTML = "";
        captchaError.innerHTML = "Incorrect digits";
        return false;
    }
    else {

        window.location.replace("./thanks.html");

    }
}

function captcha() {
    for (let i = 0; i <= 5; i++) {
        var randomNumber = Math.floor(Math.random() * 10);
        var imgName = randomNumber + ".png";
        document.getElementById(`captcha${i}`).src = "images" + "/" + `${imgName}`;
        captcha_digits += (`${randomNumber}`);
        // console.log(captcha_digits) 
    }
}



captcha();

