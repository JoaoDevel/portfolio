import React from "react";
import { assets } from "../assets/assets";
import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d27fc12a-7be0-435a-9106-9d952129690b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="px-[12%] py-10 w-full scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Conecte-se comigo </h4>
      <h2 className="text-center text-5xl font-Ovo">Entre em contato</h2>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-col-1 sm:grid-cols-2 gap-6 mt-10 mb-8">
          <input
            type="text"
            placeholder="Seu nome"
            required
            name="name"
            className="flex-1 p-3 outline-none border-[0.5px]  border-gray-500 rounded-md bg-white"
          />
          <input
            type="email"
            placeholder="Seu email"
            required
            name="email"
            className="flex-1 p-3 outline-none border-[0.5px]  border-gray-500 rounded-md bg-white"
          />
        </div>
        <textarea
          rows="6"
          placeholder="Sua mensagem"
          required
          name="message"
          className="w-full p-4 outline-none border-[0.5px] border-gray-500 rounded-md bg-white mb-6"
        ></textarea>
        <button
          type="submit"
          className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full px-10 py-3 mx-auto  hover:bg-lightHover duration-300 hover:shadow-black "
        >
          Enviar
          <img src={assets.right_arrow} alt="" className="w-4" />
        </button>

        <p className="mt-4">{result}</p>
      </form>
    </div>
  );
};

export default Contact;
