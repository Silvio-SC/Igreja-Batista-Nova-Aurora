// components/ContactForm.js

import React, { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void; target: any; }) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const response = await fetch("https://formspree.io/f/myzgggbl", {
      method: "POST",
      body: data,
      headers: {
        "Accept": "application/json"
      }
    });

    if (response.ok) {
      form.reset();
      setStatus("SUCCESS");
    } else {
      setStatus("ERROR");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Seu nome:
        <input type="text" name="name" required />
      </label>
      <label>
        Seu email:
        <input type="email" name="email" required />
      </label>
      <label>
        Escreva uma mensagem:
        <textarea name="message" required></textarea>
      </label>
      {status === "SUCCESS" ? <p>Enviado com Sucesso!</p> : <button type="submit">Submit</button>}
      {status === "ERROR" && <p>Ooops! Aconteceu algum erro.</p>}
    </form>
  );
};

export default ContactForm;
