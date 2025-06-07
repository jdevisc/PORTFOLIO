document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const messageBox = document.getElementById("form-message");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const msg = form.message.value.trim();

    if (!name || !email || !msg) {
      messageBox.style.color = "red";
      messageBox.textContent = "Por favor completa todos los campos.";
      hideMessageAfterDelay();
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      messageBox.style.color = "red";
      messageBox.textContent = "Por favor ingresa un correo válido.";
      hideMessageAfterDelay();
      return;
    }

    try {
      const formData = new FormData(form);
      await fetch("https://formsubmit.co/ajax/jdevisc@gmail.com", {
        method: "POST",
        body: formData,
      });

      messageBox.style.color = "green";
      messageBox.textContent = "¡Mensaje enviado con éxito!";
      form.reset();
      hideMessageAfterDelay();
    } catch (error) {
      messageBox.style.color = "red";
      messageBox.textContent = "Hubo un error al enviar el mensaje.";
      hideMessageAfterDelay();
    }
  });

  function hideMessageAfterDelay() {
    setTimeout(() => {
      messageBox.textContent = "";
    }, 4000); // Oculta el mensaje después de 4 segundos
  }
});