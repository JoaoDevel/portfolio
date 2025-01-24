// Importa dependências necessárias, incluindo assets e hooks do React
import React, { useState, useRef, useEffect } from "react";
import { assets } from "../assets/assets.js";

// Componente Navbar
const Navbar = () => {
  // Estado para controlar o scroll e exibir a navbar com fundo transparente
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef(); // Referência para o menu lateral

  // Funções para abrir e fechar o menu lateral
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closerMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  // Efeito para monitorar o scroll e alterar o estado
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsScroll(window.scrollY > 50);
    });
  }, []);

  return (
    <>
      {/* Navbar principal com fundo dinâmico ao rolar */}
      <nav
        className={`flex items-center justify-between w-full fixed px-5 py-4 z-50 ${
          isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg" : ""
        }`}
      >
        {/* Logo com link para o topo */}
        <a href="#top">
          <img src={assets.logo} alt="Logo" className="w-28 cursor-pointer" />
        </a>

        {/* Links de navegação (desktop) */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8  rounded-full px-12 py-3 ${
            isScroll ? "" : "bg-white shadow-sm bg-opacity-50"
          } `}
        >
          <li>
            <a href="#top">Início</a>
          </li>
          <li>
            <a href="#about">Sobre mim</a>
          </li>
          <li>
            <a href="#services">Serviços</a>
          </li>
          <li>
            <a href="#work">Portfólio</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>

        {/* Botões de interação (Modo escuro e menu mobile) */}
        <div className="flex items-center gap-4">
          {/* <button>
            <img src={assets.moon_icon} alt="Modo escuro" className="w-6" />
          </button> */}
          <a
            href="#contact"
            className="hidden md:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full duration-300 hover:shadow-black"
          >
            Contact
            <img src={assets.arrow_icon} alt="" className="w-3" />
          </a>
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <img src={assets.menu_black} alt="Menu" className="w-6" />
          </button>
        </div>

        {/* Menu lateral para mobile */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 h-screen w-64 bg-white transition duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closerMenu}>
            <img
              src={assets.close_black}
              alt="Fechar menu"
              className="cursor-pointer w-5"
            />
          </div>
          <li>
            <a href="#top" onClick={closerMenu}>
              Início
            </a>
          </li>
          <li>
            <a href="#about" onClick={closerMenu}>
              Sobre mim
            </a>
          </li>
          <li>
            <a href="#services" onClick={closerMenu}>
              Serviços
            </a>
          </li>
          <li>
            <a href="#work" onClick={closerMenu}>
              Portfólio
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closerMenu}>
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
