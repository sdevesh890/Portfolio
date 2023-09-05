import React from "react";

const Resume = () => {
  return (
  
    <div className="h-auto">

       <div className="h-[6.5rem] text-center mt-8 md:mt-0">
         <h1 className="text-5xl font-worksans">Resume</h1>
       </div>
      {/* Education Section */}
      <div className="h-auto flex  justify-evenly p-24 flex-col md:flex-row">
        <span className="text-5xl md:text-4xl font-worksans">Education</span>
        <div className=" mt-6 md:mt-0">
         <h1 className="font-light">2020-2024</h1>
          <h1 className="font-worksans">
           Bachelor of Technology in Computer Science Engineering
         </h1>
         <p>GLA University</p>
         <br />
         <h1 className="font-light">2019-2020</h1>
         <h1 className="font-worksans">Intermediate</h1>
         <p>Gautam Rishi Inter College</p>
         <br />
         <h1 className="font-light">2017-2018</h1>
         <h1 className="font-worksans">High-School</h1>
         <p>Gautam Rishi Inter College</p>
       </div>
      </div>
      
      <div className="border-t-2 "></div>
      {/* Training Experience  */}

      <div className="h-auto flex justify-evenly p-24 flex-col md:flex-row">
        <span className="text-5xl md:text-4xl font-worksans">Training <br /> Experience</span>
        <div className=" mt-6 md:mt-0">
        <p className="font-light">Jun 2022 – Jul 2022</p>
         <p className="font-worksans">JoVAC , GLA University , Mathura</p>
         <ul className="list-disc space-y-6">
           <li>
             Completed JoVAC training program on web development <br /> fundamentals
             and best practices.
           </li>
           <li>
             Acquired Skills in HTML , CSS and JavaScript for creating<br /> 
             responsive and interactive web pages.
           </li>
           <li>
             Developed and deployed a project using web technologies and <br />
             frameworks.
           </li>
         </ul>
       </div>
      </div>
      <div className="border-t-2 "></div>
        {/* Skiils */}
      <div className="h-auto flex justify-evenly p-24 flex-col md:flex-row">
        <span className="text-5xl md:text-4xl font-worksans">Skills</span>
        <div className=" mt-6 md:mt-0">
        <p className="font-worksans">Technical</p>
         <ul className="list-disc space-y-2">
           <li>
           Technologies –HTML , CSS , JavaScript , React js, Node js, SQL.
           </li>
           <li>
           Languages – JAVA , C , PHP.
           </li>
           <li>
           Platform – Microsoft Windows
           </li>
           <li>Tools – VS Code , IntelliJ IDEA , Eclipse.</li>
         </ul>

         <p className="font-worksans mt-8">Professional</p>
         <ul className="list-disc space-y-2">
           <li>
           Problem solving. 
           </li>
           <li>
           Time Management.
           </li>
           <li>
           Effective Communication Skills
           </li>
           <li>Team Management.</li>
         </ul>
       </div>
      </div>

    </div>
          
  );
};

export default Resume;
