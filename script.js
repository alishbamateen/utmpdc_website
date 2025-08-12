function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value
    }

    emailjs.send("pdc_contact", "template_5wn5agd", parms).then(alert("Email Sent!"))
}