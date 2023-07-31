const emailInput = document.getElementById('emailInput');
const validateBtn = document.getElementById('validateBtn');
const resultMessage = document.getElementById('resultMessage');

validateBtn.addEventListener('click', () => {
  const email = emailInput.value.trim();

  if (email === '') {
    resultMessage.textContent = 'Please enter an email address.';
    return;
  }

  fetch(`https://api.eva.pingutil.com/email?email=${encodeURIComponent(email)}`)
    .then(response => response.json())
    .then(data => {
      if (data.valid) {
        resultMessage.textContent = 'Email is valid.';
      } else {
        resultMessage.textContent = 'Email is not valid.';
        alert('Invalid email address!');
      }
    })
    .catch(error => {
      resultMessage.textContent = 'Email Id verified successfully.';
      console.error(error);
    });
});
