async function SendEmail() {
  const email = document.getElementById("email").value;
  const description = document.getElementById("description").value;
  if (!email) {
    alert("Please, check your email address and try again.");
    return;
  }
  const response = await fetch('/.netlify/functions/send-email', {
    method: 'POST',
    body: JSON.stringify({ email, message: description }),
  });
  const result = await response.json();
  if (result.success) {
    document.getElementById('responseMessage').textContent = "Feedback sent successfully!";
    document.getElementById('feedbackForm').reset();
  } else {
    document.getElementById('responseMessage').textContent = "There was an error sending your feedback. Please try again later.";
  }
  alert("Feedback sent!");
}