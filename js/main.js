function SendEmail(){
  if(document.getElementById("email").value == ""){
    alert("Please, check your email address and try again.")
  }
  else{
    emailjs.init("Vx1Y2a2hCfrNX3MLW");
    const email = document.getElementById('email').value;
    const description = document.getElementById('description').value;
    const templateParams = {
      name: document.getElementById('email').value,
      message: description,
    };
    emailjs.send('service_gf3scx2', 'template_idq9ig8', templateParams)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      document.getElementById('responseMessage').textContent = "Feedback send successfully!";
      document.getElementById('feedbackForm').reset();
    }, function(error) {
      console.error('Error sending the support mail: ', error);
      document.getElementById('responseMessage').textContent = "There was an error sending your feedback. Please try again later.";
    });
    alert("Feedback succesfully sent!");
  }
}