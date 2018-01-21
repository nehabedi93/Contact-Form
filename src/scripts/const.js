document.myForm.onsubmit = function() {
    return checkScript();
};

var isSuccess = "&#9989;";
var isFailed = "&#10060;";
var isValid = true;

// function that validates the constraints
// and returns true if everything is ok, false otherwise

var checkScript = function() {
    checkName();
    passMeter();
    checkGender();
    checkEmail();
    checkContact();
    return isValid;
};

function passMeter() {
    var password = document.getElementById("password").value;
    var passwordError = document.getElementById("passwordError");
    var progress = document.getElementById("progress");
    var passHealth = document.getElementById("passHealth");

    if (password === "") {
        passwordError.innerHTML = isFailed + "Password field is required";
        passwordError.style.color = "red";
        progress.style.display = "none";
        isValid = false;
    } else if (password.length < 5) {
        passwordError.innerHTML = isFailed + "Password must be at least 5 characters long. ";
        passwordError.style.color = "red";
        progress.style.display = "inline-block";
        passHealth.style.width = "25%";
        passHealth.style.backgroundColor = "red";
        isValid = false;
    } else if (password.length >= 5 && password.length <= 8) {
        passHealth.style.width = "50%";
        passHealth.style.backgroundColor = "lightyellow";
        passwordError.style.color = "yellow";
        passwordError.innerHTML = isSuccess + "Password strength: Medium";
        isValid = true;
    } else {
        // if the validation is ok, clear the span tag
        progress.style.display = "inline-block";
        passHealth.style.width = "100%";
        passHealth.style.backgroundColor = "green";
        passwordError.style.color = "green";
        passwordError.innerHTML = isSuccess + "Password strength: Strong";
        isValid = true;
    }
    return isValid;
};

function confirmPass() {
    var confirm = document.getElementById("confirmpass").value;
    var confirmError = document.getElementById("confirmError");
    var password = document.getElementById("password").value;

    if (confirm === "") {
        confirmError.innerHTML = isFailed + "Confirm password field is required";
        confirmError.style.color = "red";
        isValid = false;
    } else if (confirm.length < 5) {
        confirmError.innerHTML = isFailed + "Confirm Password must be at least 5 characters long. ";
        confirmError.style.color = "red";
        isValid = false;
    } else if (confirm !== password) {
        confirmError.innerHTML = isFailed + "Confirm Password must match with the Password.";
        confirmError.style.color = "red";
        isValid = false;
    } else {
        // if the validation is ok, clear the span tag
        isValid = true;
        confirmError.innerHTML = isSuccess;
    }
    return isValid;
}

function checkName() {
    // validate textbox
    var name = document.getElementById("name").value;
    var nameError = document.getElementById("nameError");
    var indicator = document.getElementById("indicator");

    if (name === "") {
        nameError.innerHTML = isFailed + "Name field is required";
        nameError.style.color = "red";
        isValid = false;
    } else if (name.length < 5) {
        nameError.innerHTML = isFailed + "Username must be at least 5 characters long. ";
        nameError.style.color = "red";
        isValid = false;
    } else {
        // if the validation is ok, clear the span tag
        isValid = true;
        nameError.innerHTML = isSuccess;
    }
    return isValid;
}

function checkGender() {
    // validate radio buttons
    var genderRadios = document.myForm.gender;
    var genderError = document.getElementById("genderError");
    var isGenderSelected = false;
    // var indicator = document.getElementById("indicator");

    for (var i = 0; i < genderRadios.length; i++) {
        if (genderRadios[i].checked) {
            isGenderSelected = true;
            break;
        }
    }

    if (!isGenderSelected) {
        genderError.innerHTML = isFailed + "Please select your gender";
        genderError.style.color = "red";
        isValid = false;
    } else {
        genderError.innerHTML = isSuccess;
        isValid = true;
    }
    return isValid;
}

function checkEmail() {
    var email = document.getElementById("email").value;
    var emailError = document.getElementById("emailError");

    if (email === "") {
        emailError.innerHTML = isFailed + "Email field is required";
        emailError.style.color = "red";
        isValid = false;
    } else {
        // if the validation is ok, clear the span tag
        emailError.innerHTML = isSuccess;
        isValid = true;
    }
    return isValid;
}

function checkContact() {
    var contact = document.getElementById("contact").value;
    var contactError = document.getElementById("contactError");

    if (contact === "") {
        contactError.innerHTML = isFailed + "Contact field is required";
        contactError.style.color = "red";
        isValid = false;
    } else {
        // if the validation is ok, clear the span tag
        contactError.innerHTML = isSuccess;
    }
    return isValid;
}

document.myForm.onreset = function(){
    nameError.innerHTML = "";
    passwordError.innerHTML = "";
    progress.style.display = "none";
    confirmError.innerHTML = "";
    genderError.innerHTML = "";
    emailError.innerHTML = "";
    contactError.innerHTML = ""; 
}