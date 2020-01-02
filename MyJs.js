var email;
var password;
var password_confirmation;
var name;
var subject;
var themessage;
var status;

function validateLogin()
{
    email=document.getElementById("emailLogin").value;
    password=document.getElementById("passwordLogin").value;
    if(email==""||password=="")
    {
        alert("Please anter email and password");
        return;
    }
    else
    {
        status = validateEmail(email);
        if (status)
        {
            validatePassword(password);
        }   
    } 
}

function validateSignUp()
{
    email=document.getElementById("emailSignUp").value;
    password=document.getElementById("passwordSignUp").value;
    password_confirmation=document.getElementById("confirmation").value;
    if(email==""||password==""||password_confirmation=="")
    {
        document.getElementById("allertemail").style.visibility="visible";
       // alert("Please anter email, password and confirmation password");
        return;
    }
    else
    {
        status = validateEmail(email);
        if(status)
        {
           status = validatePassword(password);
        }

        if(status)
        {
           if(password != password_confirmation)
           {
               alert("The password must be similar to confirmation password");
           } 
        }

    }
}

function validateContuct(){
    email = document.getElementById("emailContuct").value;
    name = document.getElementById("nameContuct").value;
    subject = document.getElementById("subject").value;
    themessage = document.getElementById("theMessage").value;

    if (email == "" || name == "" || subject == "" || themessage == "")
    {
        alert("Please insert email,name,concerning and subject");
        return;
    }

    validateEmail(email);
}


function validateEmail(email)
{

    var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!reg.test(email))
    {
        alert("The email unvalid");
        return false;
    }
    return true;
}


function validatePassword(password)
{
    var reg;
   
    if(password.length < 6)
    {
        alert("The password should be minimum 6 characters");
        return flase;
    }

    reg=/[A-Z]/;
    if(!reg.test(password))
    {
        alert("The password should contain an uppercase character");
        return flase;
    }

    reg=/[a-z]/;
    if(!reg.test(password))
    {
        alert("The password should contain a lowercase character");
        return flase;
    }

    reg=/\d/;
    if(!reg.test(password))
    {
        alert("The password should contain a number");
        return flase;
    }

    reg=/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if(!reg.test(password))
    {
        alert("The password should contain a special character");
        return flase;
    }
}
