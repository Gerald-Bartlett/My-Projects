/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function setAction(form) {
  form.action = "Request-Sent";
  alert(form.action);
  return false;
}


function validate() { 
    let name = 
        document.getElementById("firstname").value; 
    let subject = 
        document.getElementById("subject").value; 
    let phone = 
        document.getElementById("phone").value; 
    let email = 
        document.getElementById("email").value; 
    let message = 
        document.getElementById("message").value; 
    let error_message = 
        document.getElementById("error_message"); 
  
    error_message.style.padding = "10px"; 
  
    let errors = []; 
  
    if (name.length < 5) { 
        errors.push("Please Enter a valid Name");} 
    if (subject.length < 10) { 
        errors.push("Please Enter a Correct Subject");} 
    if (isNaN(phone) || phone.length != 10) { 
        errors.push("Please Enter a valid Phone Number");} 
    if (email.indexOf("@") == -1 || email.length < 6) { 
        errors.push( 
            "Please Enter a valid Email");} 
    if (message.length <= 40) { 
        errors.push( 
            "Please Enter More Than 40 Characters");} 
  
    if (errors.length > 0) { 
        error_message.innerHTML = 
            errors.join("<br>"); 
        return false;} 
    else { 
        alert( 
            "Form Submitted Successfully!"); 
        return true;}}