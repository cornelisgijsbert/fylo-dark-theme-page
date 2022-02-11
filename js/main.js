function validateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const x = document.getElementById("message");
    if (inputText.value.match(mailformat)) {
        //alert("Valid email address!");
        //x.style.display = "none";
        x.innerHTML = "";
        document.form1.text1.focus();
        return true;

    } else {
        //alert("You have entered an invalid email address!");
        //x.style.display = "block";
        x.innerHTML = "Please enter a valid email adress";
        document.form1.text1.focus();
        return false;

    }
}