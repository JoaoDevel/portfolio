import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <img src={assets.logo} alt="" className="w-36 mx-auto mb-2" />

        <div className="w-max flex items-center gap-2 mx-auto">
          <img src={assets.mail_icon} alt="" className="w-6" />
          joaovitormatosfontes15@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[12%] mt-12 py-6">
        <p>
          Desenvolvido com 💻 por João Vitor. © 2025 Todos os direitos
          reservados.
        </p>

        <ul className="flex items-center  gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/JoaoDevel">
              GitHub
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/jo%C3%A3odev/">
              LinkedIn
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.instagram.com/joaovimattos/">
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
