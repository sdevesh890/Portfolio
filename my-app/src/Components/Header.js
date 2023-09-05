import React, { useState } from "react";
import { Link } from "react-router-dom";
import {AiOutlineMenu ,AiOutlineClose} from "react-icons/ai";
const Header=()=>
{
    const [Toggle , setToggle] = useState(false);
    return(
     <div className="flex justify-between text-center">
      <div className="ml-4 p-4 flex">
        <div className="inline-block rounded-full h-8 w-8 bg-[#EEA302]"></div>
        <span className="ml-4 font-worksans text-[22px]"><a href="/"><Link to="/">Devesh Sharma</Link></a></span>
      </div>
      {/* Second side */}
      <div className="mr-12 p-4">
       <ul className="hidden md:flex font-light gap-14">
        <li className="text-[17px]"><a href="/" className="hover:font-normal duration-300"><Link to="/resume">Resume</Link></a></li>
        <li className="text-[17px]"><a href="/" className="hover:font-normal duration-300"><Link to="/project">Projects</Link></a></li>
        <li className="text-[17px]"><a href="/" className="hover:font-normal duration-300"><Link to="/contact">Contact</Link></a></li>
       </ul>
      </div>
      
      {
         Toggle ? 
          <AiOutlineClose className="text-2xl md:hidden block mr-4 mt-4" onClick={()=>
            {
            setToggle(!Toggle);
            }}/>
            :
            <AiOutlineMenu className="text-2xl md:hidden block mr-4 mt-4" onClick={()=>
              {
              setToggle(!Toggle);
              }}/>
      }

      {/* Responsive Menu */}
       <ul className={`duration-500 md:hidden w-full h-screen fixed md:fixed bg-white top-[60px]  
       ${Toggle ? 'left-[0]': 'left-[-100%]'} `}>
        <li className="text-[22px] p-4"><a href="/" className="hover:font-worksans" onClick={()=>{setToggle(false)}}><Link to="/resume">Resume</Link></a></li>
        <li className="text-[22px] p-4"><a href="/" className="hover:font-worksans" onClick={()=>{setToggle(false)}}><Link to="/project">Projects</Link></a></li>
        <li className="text-[22px] p-4"><a href="/" className="hover:font-worksans" onClick={()=>{setToggle(false)}}><Link to="/contact">Contact</Link></a></li>
       </ul>
     </div>
    );
}

export default Header;