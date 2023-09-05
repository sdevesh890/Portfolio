import React from "react";
import {BiLogoLinkedin,BiLogoGithub} from "react-icons/bi";
const Footer=()=>
{
    return(
       <div className="flex flex-col space-y-6 md:flex-row md:space-y-0 justify-around mt-20 p-12 border-t-2">
        <div>
            <h1 className="font-worksans text-xl">Phone</h1>
            <span>890-972-9014</span>
        </div>
        <div>
            <h1 className="font-worksans text-xl">Email</h1>
            <span>sdevesh890@gmail.com</span>
        </div>
        <div>
            <h1 className="font-worksans text-xl">Follow Me</h1>
            <a href="https://www.linkedin.com/in/devesh-sharma890/" className=""><BiLogoLinkedin className="duration-500 hover:text-xl"/></a>
            <a href="https://github.com/sdevesh890" className=""><BiLogoGithub className="duration-500 inline hover:text-xl"/></a>
        </div>
       </div>
    );
}


export default Footer;