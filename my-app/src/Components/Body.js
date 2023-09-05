import React from "react";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div className="h-auto w-[98vw] flex flex-col-reverse md:flex-wrap md:flex-row items-center justify-center text-center space-y-[10%] ">
      
      <div className=" h-[60vw] w-[60vw] md:h-[450px] md:w-[450px] rounded-full bg-[url('./assets/my-passport-photo.jpg')] bg-cover bg-no-repeat bg-center md:mt-[135px] "></div>

      <div className="space-y-4 ">
        <h1 className="text-8xl font-worksans">Hello</h1>
        <h3 className="text-xl font-worksans">A Bit About Me</h3>
        <p className="font-light">
          I'm Devesh, a B.Tech Computer Science student
          <br /> and MERN stack developer. I'm passionate about
          <br /> crafting seamless web experiences that blend <br />
          creativity with functionality.
          <br /> Explore my projects to see my journey unfold!
        </p>

        <div className="flex space-x-8 p-4 ml-[25px]">
          {/* Resume */}
          <Link to="/resume"><a
            href="/"
            className="flex items-center justify-center h-[80px] w-[80px] md:h-28 md:w-28 border-2 border-black rounded-full bg-[#EEA302] hover:bg-[white] duration-300 font-worksans text-md md:text-xl"
          >
            Contact         
            </a></Link>

          {/* Projects */}
          <Link to="/project"><a
            href="/"
            className="flex items-center justify-center h-[80px] w-[80px] md:h-28 md:w-28 border-2 border-black rounded-full bg-[#ff3c3c] hover:bg-[white] duration-300 font-worksans text-md md:text-xl"
          >
            Projects
          </a></Link>
          

          {/* Contact */}
          <Link to="/contact"><a
            href="/"
            className="flex items-center justify-center h-[80px] w-[80px] md:h-28 md:w-28 border-2 border-black rounded-full bg-[#00BFFF] hover:bg-[white] duration-300 font-worksans text-md md:text-xl"
          >
            Contact
          </a></Link>
        </div>
      </div>
    </div>
  );
};
export default Body;
