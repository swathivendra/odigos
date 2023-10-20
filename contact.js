const validate = () =>{
    let username = document.contact.username.value;
    let mobile = document.contact.mobile.value;
    let email = document.contact.email.value;
    let user_status = mobile_status = email_status = false;
    let alphaEXP = /^[A-Za-z]+$/;
    let numEXP = /^[0-9]+$/;
    let emailEXP = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
    if(username === ""){
       document.getElementById('usernote').innerHTML="Name is mandatory";
    }
    else{
        if(username.match(alphaEXP)){
        document.getElementById('usernote').innerHTML="";
        }
        else{
            document.getElementById('usernote').innerHTML = "enter only alphabetics";
        }
    }
    if(mobile === ""){
        document.getElementById('mobilenote').innerHTML="Please enter your phone number";
        mobile_status = false;
    }
    else{
        if(mobile.match(numEXP)){
            if(mobile.length == 10){
            document.getElementById('mobilenote').innerHTML="";
            mobile_status = true;
            }
            else{
                document.getElementById('mobilenote').innerHTML = "Please enter your 10 digits number"
                mobile_status = false;
            }
        }
        else{
            document.getElementById('mobilenote').innerHTML="Enter your number";  
            mobile_status = false;
        }
    }
    if(email === ""){
        document.getElementById('emailnote').innerHTML="Enter your mail id";
    }
    if(user_status === true){
        return true;
    }
    else{
        return false
    }
}