// components/ContactForm.js

import React, { useState } from "react";
import Input from "../Input";

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
      form.reset();
      setStatus("SUCCESS");
    } else {
      setStatus("ERROR");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 min-w-full">

      <Input 
        label="Seu Nome Completo" id="name" type="text" name="nome"
        placeholder="Coloque seu nome aqui." required
      />

      <Input 
        label="Seu Email" id="email" type="email" name="email"
        placeholder="Coloque seu email aqui." required
      />

      <Input 
        label="Seu Celular" id="tel" type="tel" name="telefone"  
        placeholder="(xx) xxxxx-xxxx" required
      />

      <div className="flex flex-col">
        <label htmlFor="message" className="text-xl drop-shadow"> Escreva sua mensagem </label>
        <textarea 
          name="message" id="message" rows={2} required
          placeholder="Deixe sua mensagem aqui."
          className="outline-none p-1 bg-transparent border-b-2 border-gray-300 hover:border-gray-700 focus:border-gray-700"
        >
        </textarea>
      </div>
      
      {status === "SUCCESS" ? 
        <p className="drop-shadow">Enviado com Sucesso!</p> : 
        <button 
          type="submit" 
          className="max-w-fit border-indigo-900 rounded py-1 px-3 border 
            hover:text-gray-100 hover:bg-emerald-500 hover:border-emerald-500
            duration-300 text-md ">
            Enviar
        </button>}
      {status === "ERROR" && <p className="drop-shadow" >Ooops! Aconteceu algum erro.</p>}

    </form>
  );
};

export default ContactForm;
