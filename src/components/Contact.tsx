import { FC } from "react";
import { socialLinks } from "../shared/contants";

const Contact: FC = () => {
  return (
    <div className="pb-20">
      <h1 className="text-center text-4xl mt-14 md:mt-28 mb-10">
        Get in touch
      </h1>
      <div
        data-scroll
        data-scroll-speed="1"
        className="flex justify-center mx-[5vw] mt-8"
      >
        <div className="w-full max-w-[1100px] justify-center flex gap-10 flex-col md:flex-row">
         
          <div className="flex-1 justify-center">
           
            {socialLinks.map((item) => (
              <a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 items-center hover:bg-slate-900 p-2 transition duration-300"
              >
                <img
                  className="w-[30px] h-[30px] rounded-full"
                  src={item.icon}
                  alt=""
                />
                <h1>{item.title}</h1>
              </a>
            ))}
            
          </div>
          <div className="  rounded-lg md:items-center flex flex-col justify-evenly md:flex-row  w-full ">
      <div className="relative md:mb-0 mb-4">
       
        <input placeholder="Full name" type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative md:mb-0 mb-4">
       
        <input placeholder="Email" type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="flex">
              <a
               
                target="_blank"
                rel="noopener noreferrer"
                className="h-[6.5vh] w-[16vh]  text-white justify-center  rounded transition duration-300 flex items-center gap-[10px] bg-[#06a987] hover:text-dark hover:bg-[white]"
              >
                <span> Send</span>
              </a>
            
            </div>
    </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
