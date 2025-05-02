require('dotenv').config();

function SendEmail(){
    if(document.getElementById("email").value == ""){
      alert("Please, check your email address and try again.")
    }
    else{
      emailjs.init(process.env.EMAILJS_PUBLIC_KEY);
      const email = document.getElementById('email').value;
      const description = document.getElementById('description').value;
      const templateParams = {
        name: document.getElementById('email').value,
        message: description,
      };
      emailjs.send(process.env.EMAILJS_SERVICE_ID, process.env.EMAILJS_TEMPLATE_ID, templateParams)
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