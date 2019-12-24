//Name: Joseph Restua
//Date Created: November 7, 2019
//Most recent revision: November 7, 2019


function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["contactInfo"].elements.length; 
        loopCounter++) {
        if (document.forms["contactInfo"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["contactInfo"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
} 

function resetForm() {
    clearErrors();
    document.forms["contactInfo"]["name"].value = "";
    document.forms["contactInfo"]["email"].value = "";
    document.forms["contactInfo"]["phone"].value = "";
    document.getElementById("sendRequest").innerText = "Send Request";
}

function validateItems() {
    clearErrors();
    var name = document.forms["contactInfo"]["name"].value;
    var email = document.forms["contactInfo"]["email"].value;
    var phone = document.forms["contactInfo"]["phone"].value;
    if (name == "" || email =="" || phone =="") {
        alert("Please Complete Empty Fields.");
    }
    else {
      return confirm("PLEASE CONFIRM: " + "NAME: " + name + "  " + "EMAIL: " + email + "  " + "PHONE: " + phone);;
    }
}