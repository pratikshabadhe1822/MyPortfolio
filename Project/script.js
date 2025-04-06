// script.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const name = form.querySelector("input[type='text']").value;
      const email = form.querySelector("input[type='email']").value;
      const message = form.querySelector("textarea").value;
  
      if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
      }
  
      // You can integrate this part with an API or email handler service like EmailJS
      alert(`Thank you ${name}, your message has been sent!`);
  
      form.reset();
    });
  });
  