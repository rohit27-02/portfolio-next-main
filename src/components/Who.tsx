/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import { FC } from "react";
import Three from "./Three";

const Who: FC = () => {

  return (
    <div
      id="who"
      className="flex gap-[5vw] px-[5vw] lg:px-[15vw] z-[2] lg:min-h-[70vh] items-center justify-center flex-col md:flex-row"
    >
      <Three/>
      {/* <img
        data-scroll
        data-scroll-speed="2"
        className="w-[20vh] md:w-[20vw]"
        src="/web-development_1688451.png"
        alt=""
      /> */}
      <div className=" space-y-[3vh]">
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
          <Link
            href="/about"
          >
            <span
              className="h-[45px] px-[15px] text-white cursor-pointer  rounded transition duration-300 flex items-center gap-[10px] bg-[#06a987] hover:text-dark hover:bg-[white]"
            > Know More</span>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Who;
