function sendEmail() {
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }

    emailjs.send('service_th2h5gv', 'template_sedcmgp', parms).then(alert("Email sent successfully, will get back to you soon!"));
}