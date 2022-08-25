var noReload = document.getElementById("form-1");

noReload.addEventListener("submit", function (e) {
    e.preventDefault();
    validation();
});

function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

function validation() {
    var name = document.contactForm.name.value;
    var email = document.contactForm.mail.value;

    var mobile = document.contactForm.mobile.value;
    var address = document.contactForm.address.value;

    var country = document.contactForm.country.value;


    var namErr = emailErr = mobileErr = addressErr = countryErr = true;
    //name
    if (name == "") {
        printError("nameErr", "This field is required");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("nameErr", "This field is required");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
    //email
    if (email == "") {
        printError("emailErr", "This field is required");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Invalid Email Id");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    //mobile
    if (mobile == "") {
        printError("mobileErr", "This field is required");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if (regex.test(mobile) === false) {
            printError("mobileErr", "Invalid Number");
        } else {
            printError("mobileErr", "");
            mobileErr = false;
        }
    }
    //grade
    if (address == "") {
        printError("addressErr", "This field is required");
    } else {
        printError("addressErr", "");
        addressErr = false;
    }

    //Message
    if (country == "") {
        printError("countryErr", "This field is required");
    } else {
        printError("countryErr", "");
        countryErr = false;
    }

    if (!(nameErr || emailErr || mobileErr || addressErr || countryErr)) {
        var dataPreview = "Thank you for your response..We will contact you soon!!!\n";
        alert(dataPreview);
    }
}
