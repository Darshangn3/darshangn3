function fnvalidatesignup(){
    let inputfirstname=document.getElementById("firstname").value;
    let inputlastname=document.getElementById("lastname").value;
    let emailname=document.getElementById("email").value;
    let phonenoname=document.getElementById("phoneno").value;
    let passwordname=document.getElementById("password").value;
   

    const fnameCheck = document.getElementById('fnameCheck');
    if (inputfirstname.length < 5) {
        fnameCheck.textContent = "Invalid: atleast 5 characters";
        fnameCheck.style.color = "red";
    } else {
        fnameCheck.textContent = "Valid";
        fnameCheck.style.color = "green";
    }


    const lnameCheck = document.getElementById('lnameCheck');
    if (inputlastname.length < 5) {
        lnameCheck.textContent = "Invalid: atleast 5 characters";
        lnameCheck.style.color = "red";
    } else {
        lnameCheck.textContent = "Valid";
        lnameCheck.style.color = "green";
    }

    const emailCheck = document.getElementById('emailCheck');
    const validateemail=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let validemail=validateemail.test(emailname);
    if (!validemail) {
        emailCheck.textContent = "Invalid: Please enter a valid email address.";
        emailCheck.style.color = "red";
    } else {
        emailCheck.textContent = "Valid";
        emailCheck.style.color = "green";
    }
    
    const passwordCheck = document.getElementById('passwordCheck');
    const validatepassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    let validpassword=validatepassword.test(passwordname);
    if (!validpassword) {
        passwordCheck.textContent = "Invalid: Password must be 8-15 characters long, including uppercase, lowercase, number, and special character.";
        passwordCheck.style.color = "red";
    } else {
        passwordCheck.textContent = "Valid";
        passwordCheck.style.color = "green";
    }
}
