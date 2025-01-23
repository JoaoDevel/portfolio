import React from "react";
import { assets, workData } from "../assets/assets";

const Work = () => {
  return (
    <div id="work" className="px-[12%] py-10 w-full scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio </h4>
      <h2 className="text-center text-5xl font-Ovo">My latest work</h2>
      <p className="text-center mx-auto mt-5 mb-12 max-w-2xl font-Ovo">
        Sou João Vitor, desenvolvedor frontend apaixonado por criar interfaces
        digitais interativas e responsivas que encantam os usuários. transformo
        ideias em soluções visuais funcionais e impactantes.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 my-6 gap-5">
        {workData.map((project, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${project.bgImage})` }}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-300 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex  items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-red-600 transition">
                <img src={assets.send_icon} alt="send icon" className="w-5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <a
        href=""
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full px-10 py-3 mx-auto my-20 hover:bg-lightHover duration-300"
      >
        Show more <img src={assets.right_arrow_bold} alt="" className="w-4" />
      </a>
    </div>
  );
};

export default Work;
