function validateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var x = document.getElementById("message");
    if (inputText.value.match(mailformat)) {
        //alert("Valid email address!");
        x.style.display = "none";
        //document.form1.text1.focus();
        //return true;
    } else {
        x.style.display = "block";
        //alert("You have entered an invalid email address!");
        //document.form1.text1.focus();
        //return false;
    }
}