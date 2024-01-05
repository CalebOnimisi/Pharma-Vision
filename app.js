async function registerUser() {

    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    try {
      const response = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone, email, password }),
      });
  
      const data = await response.json();
      alert(data.message);

      if (response.ok){
        window.location.href = '/Public/index.html';
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred during registration');
    }
  }
  
  async function loginUser() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
  
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
      alert(data.message);

      if (data.success){
        window.location.href = '/index.html'
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred during login');
    }
  }
  
  function openWhatsApp() {
    // Replace '1234567890' with your actual WhatsApp number
    const phoneNumber = '1234567890';

    // You can customize the message
    const message = 'Hello! I would like to place an order.';

    // Construct the WhatsApp URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open the WhatsApp chat in a new tab/window
    window.open(whatsappURL, '_blank');
}
