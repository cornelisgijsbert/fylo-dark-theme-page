document.getElementById("submit").addEventListener("click", validateEmail);
var x = document.getElementById("message");
var txt = document.forms["form1"]["text1"].value;
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function validateEmail () {
    if (txt.match(mailformat)) {
      x.innerText = "";  
    } else {
      x.innerText = "Enter a valid email adress";
    }
}

/*function validateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailformat)) {
        alert("Valid email address!");
        document.form1.text1.focus();
        return true;

    } else {
        alert("You have entered an invalid email address!");
        document.form1.text1.focus();
        return false;

    }
}*/