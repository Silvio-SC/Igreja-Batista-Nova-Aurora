// components/ContactForm.js

import React, { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void; target: any; }) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    console.log(data)
    const response = await fetch("https://formspree.io/f/myzgggbl", {
      method: "POST",
      body: data,
      headers: {
        "Accept": "application/json"
      }
    });

    if (response.ok) {
    // if (true) {
      form.reset();
      setStatus("SUCCESS");
    } else {
      setStatus("ERROR");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 min-w-full">
      <div className="flex flex-col">
        <label htmlFor="name" className="text-xl drop-shadow"> Seu Nome </label>
        <input type="text" name="name" id="name" required 
          className="outline-none p-1 bg-transparent border-b-2 border-gray-300 hover:border-gray-700 focus:border-gray-700"
          placeholder="Coloque seu nome aqui."
        />
      </div>

      <label htmlFor="email"> SEU EMAIL </label>
      <input type="email" name="email" id="email" required />

      <label htmlFor="tel"> SEU CELULAR </label>
      <input type="tel" name="telefone" id="tel" required />

      <label htmlFor="message"> ESCREVA SUA MENSAGEM </label>
      <textarea name="message" id="message" required></textarea>

      {status === "SUCCESS" ? <p>Enviado com Sucesso!</p> : <button type="submit">Submit</button>}
      {status === "ERROR" && <p>Ooops! Aconteceu algum erro.</p>}

    </form>
  );
};

export default ContactForm;
