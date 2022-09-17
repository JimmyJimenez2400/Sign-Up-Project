function checkPassword(){
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
    let  message = document.getElementById("message");

    

    if(password.length != 0){
        if(password === confirmPassword){
            message.textContent = "*Password Matches!";
            message.style.backgroundColor = "#006600";
        }
        else{
            message.textContent = "*Password Don't Match!!"
            message.style.backgroundColor = "#DC143C";

        }
    }
    else{
        message.textContent = "Password Cannot Be Empty"
        message.style.backgroundColor = "#000000";
    }

}