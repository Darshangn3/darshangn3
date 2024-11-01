console.log("This is javascript");

function fmname(para1,para2){
    console.log(para1,para2);
    console.log(para1+parseInt(para2));

}

fmname(1,2);
fmname(4,"6");
fmname(4,"jgk");

let para1=4;
function fmname1(para1=1,para2=2){
    console.log(para1,para2);
    console.log(para1+parseInt(para2));

}

fmname1();
fmname1(10,20);

{
    let a=30;
    console.log(a);
    var b=40;
    const c=50;
    console.log(c);
}

// console.log(a);
console.log(b);
// console.log(c);

var username="gmit";
var password="gmit123";

function fnvalidate(){
    let inputusername=document.getElementById("username").value;
    let passwordname=document.getElementById("password").value;
    console.log(inputusername);
    console.log(passwordname);

    if(inputusername===username && passwordname===password){
        prompt("loginsuccessful");
        
    }
}

function fnvalidatesignup(){
    let inputfirstname=document.getElementById("firstname").value;
    const fnameCheck = document.getElementById('fnameCheck');
    let inputlastname=document.getElementById("lastname").value;
    let emailname=document.getElementById("email").value;
    let phonenoname=document.getElementById("phoneno").value;
    let passwordname=document.getElementById("password").value;
    console.log(inputfirstname,inputlastname,emailname,phonenoname,passwordname);
     let validateemail=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      let validatepassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    let validateform=validatefun(inputfirstname,inputlastname);
   
    let validemail=validateemail.test(emailname);
    console.log(validemail); 
    // console.log("true email");

    let validpassword=validatepassword.test(passwordname);
    console.log(validpassword);

    if (inputfirstname.length < 5) {
        fnameCheck.textContent = "Invalid: atleast 5 characters";
        fnameCheck.style.color = "red";
    } else {
        fnameCheck.textContent = "Valid";
        fnameCheck.style.color = "green";
    }
}

function validatefun(firstname,lastname){

    if(firstname.length>5 && lastname.length>5){
     console.log("Success");
    }
    else{
        console.log("failure");  
    }
}
