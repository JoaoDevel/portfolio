import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto flex flex-col justify-center items-center h-screen gap-4">
      <div>
        <img src={assets.profile_img} alt="" className="rounded-full w-32" />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3  font-Ovo">
        Oi! Eu sou João Vitor{" "}
        <img src={assets.hand_icon} alt="" className=" w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        frontend web developer
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo">
        Sou João Vitor, desenvolvedor frontend apaixonado por criar interfaces
        digitais interativas e responsivas que encantam os usuários. transformo
        ideias em soluções visuais funcionais e impactantes.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3  border border-white rounded-full bg-black text-white flex items-center gap-2"
        >
          Contate-me
          <img src={assets.right_arrow_white} alt="" className="w-4" />
        </a>
        <a
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          Meu currículo{" "}
          <img src={assets.download_icon} alt="" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
