import React from "react";

const Contact = () => {
  return (
    <div className="h-auto md:h-[100vh] md:w-[97vw] flex justify-around items-center flex-col md:flex-row space-y-16">
      {/* Contact text */}
      <div className="">
        <h1 className="text-[45px] font-worksans">Contact</h1>
        <h4 className="font-light">Looking forward to hearing from you</h4>
        <div className="mt-6">
          <h1 className="font-worksans text-xl">Phone</h1>
          <span>890-972-9014</span>
        </div>
        <div className="mt-4">
          <h1 className="font-worksans text-xl">Email</h1>
          <span>sdevesh890@gmail.com</span>
        </div>
      </div>

      {/* Input field */}

      <div className=" w-[60vw] md:h-[80vh] md:w-[40vw] gap-4  ">
    
      <div className="flex  justify-center items-center mt-8">
      <form className="p-8">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-2">First Name</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3  focus:shadow hover:border-black"
              type="text"
              placeholder="First Name"
              required
            />
          </div>
          <div>
            <label className="block text-sm  mb-2">Last Name</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 focus:outline focus:shadow-outline hover:border-black"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div>
            <label className="block text-sm mb-2">Email</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3  focus:outline focus:shadow-outline hover:border-black"
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-2">Subject</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 focus:outline focus:shadow-outline hover:border-black"
              type="text"
              placeholder="Subject"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Message</label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 focus:outline focus:shadow-outline hover:border-black"
              type="text"
              placeholder="Message"
              cols="30"
              rows="5"
              required
            />
          </div>

          <div className="mt-8">
          <button
            className=" ml-8 duration-500 h-32 w-32 rounded-full bg-[#EEA302] font-bold py-2 px-4 border-2 border-black hover:bg-white "
            type="submit"
          >
            Submit
          </button>
        </div>
        </div>
      </form>
    </div>

      </div>    
      </div>
  );
};

export default Contact;
