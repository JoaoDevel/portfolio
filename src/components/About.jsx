import React from "react";
import { assets, infoList, toolsData } from "../assets/assets";

const About = () => {
  return (
    <div id="about" className="px-[12%] py-10 w-full  scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introdução</h4>
      <h2 className="text-center text-5xl font-Ovo">Sobre mim</h2>

      <div className="flex w-full flex-col lg:flex-row gap-20 py-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none ">
          <img
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
          />
        </div>
        <div className="flex-1">
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                className="border-[0.5px] border-gray-400 rounded-xl cursor-pointer p-6 hover:bg-lightHover hover:-translate-y-1 duration-300 hover:shadow-black"
                key={index}
              >
                <img src={icon} alt={title} className="w-7 mt-3" />
                <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </li>
            ))}
          </ul>

          <h4 className="my-6 text-gray-700 font-Ovo">
            Ferramentas que eu uso
          </h4>

          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className="cursor-pointer flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg hover:-translate-y-1 hover:shadow-black duration-300"
              >
                <img src={tool} alt={tool} className="w-5 sm:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
