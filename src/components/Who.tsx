import { FC } from "react";
import { BiLinkExternal } from "react-icons/bi";

const Who: FC = () => {
  return (
    <div
      id="who"
      className="flex gap-[5vw] px-[5vw] lg:px-[15vw] z-[2] lg:min-h-[70vh] items-center justify-center flex-col md:flex-row"
    >
      <img
        data-scroll
        data-scroll-speed="2"
        className="w-[20vh] md:w-[20vw]"
        src="/680-it-developer-outline (2).webp"
        alt=""
      />
      <div className="text-center md:text-left space-y-[3vh]">
        <h1 data-scroll data-scroll-speed="0.5" className="title text-[40px]">
          Who am I ?
        </h1>

        {/* Hide my age :v */}
        <p data-scroll className="text-lg text-gray-200" id="story">
          Highly motivated and skilled Full Stack Developer with a B.Tech degree in Computer Science and Engineering (CSE).
          Proficient in MERN stack and experienced in various technologies, seeking to contribute expertise in developing innovative
          web applications and solutions to advance technological progress.
        </p>
        <div className="flex mt-[25px] gap-[20px]">
              <a
                href="/about"
                className="h-[45px] px-[15px] text-white  rounded transition duration-300 flex items-center gap-[10px] bg-[#06a987] hover:text-dark hover:bg-[white]"
              >
                <BiLinkExternal size={25} />
                <span> Know More</span>
              </a>
            
            </div>
      </div>
    </div>
  );
};

export default Who;
