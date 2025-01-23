import React from "react";
import { assets, serviceData } from "../assets/assets";

const Services = () => {
  return (
    <div id="services" className="px-[12%] py-10 w-full scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">What i offer </h4>
      <h2 className="text-center text-5xl font-Ovo">My services</h2>
      <p className="text-center mx-auto mt-5 mb-12 max-w-2xl font-Ovo">
        Sou João Vitor, desenvolvedor frontend apaixonado por criar interfaces
        digitais interativas e responsivas que encantam os usuários. transformo
        ideias em soluções visuais funcionais e impactantes.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black duration-300 cursor-pointer hover:bg-lightHover hover:-translate-y-1"
          >
            <img src={icon} alt="" className="w-10" />
            <h3 className="text-lg my-4 text-gray-700">{title}</h3>
            <p className="text-sm text-gray-600 leading-5">{description}</p>
            <a href={link} className="flex items-center gap-2 text-sm mt-5">
              Read more <img src={assets.right_arrow} alt="" className="w-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
