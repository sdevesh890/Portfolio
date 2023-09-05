import React from "react";

const Project=()=>
{
    return(
        <div className="h-auto">
              <div className="h-[6.5rem] text-center mt-8 md:mt-0">
         <h1 className="text-5xl font-worksans">Projects</h1>
       </div>
      {/* GLAHUB */}
      <div className="h-auto flex  justify-evenly p-20 md:p-24 flex-col md:flex-row">
        <div>
        <span className="text-5xl md:text-4xl font-worksans">GLAHUB</span>
        <h1>I played a key role in the frontend development of GLAHUB <br /> a platform that offers a unified experience for entertainment <br /> education, and motivation videos. My responsibilities included <br /> utilizing HTML, CSS, and  JavaScript to craft dynamic and <br />responsive web pages optimized for video streaming and browsing</h1>
        </div>
        <div className=" w-[100%] mt-6 md:mt-0 h-[300px] md:w-[40%] bg-[url('./assets/image-2.jpg')] bg-cover bg-no-repeat ">
       </div>
      </div>
      {/* Javaist */}
      <div className="border-t-2"></div>
      <div className="h-auto flex  justify-evenly p-24 flex-col md:flex-row">
        <div>
        <span className="text-5xl md:text-4xl font-worksans">Javaist</span>
        <h1>I showcased my frontend web development skills <br /> with Javaist, a Java Multiple Choice Question (MCQ) <br /> quiz website. Using HTML, CSS, and JavaScript <br /> I crafted a user-friendly platform for Java <br /> enthusiasts to test their knowledge. </h1>
        </div>
        <div className=" w-[100%] mt-6 md:mt-0 h-[300px] md:w-[40%] bg-[url('./assets/image-3.jpg')] bg-cover bg-no-repeat ">
       </div>
      </div>
        </div>
    );
}

export default Project;