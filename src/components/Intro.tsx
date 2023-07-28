import { FC, Fragment } from "react";

import { BiChevronsDown } from "react-icons/bi";
import Canvas from "./Canvas";
import { characters } from "../shared/contants";
import { m } from "framer-motion";

const Intro: FC = () => {

  return (
    <div className="relative h-screen flex justify-center items-center flex-col gap-5">
      <Canvas />

      <div className="flex w-full justify-center items-center align-baseline z-[1] max-w-[100vw]">
        {characters.map((character, index) => (

          <svg
           
           className="w-[200px] md:w-[250px] h-[60px] md:h-[80px] "
            key={character}
            viewBox="70 -20 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            
          >
            <Fragment >
              <m.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1 + index / 10, duration: 2 }}
                d={character}
                fill="none"
                stroke="#FFF"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"

              ></m.path>
              <m.path
                initial={{ fill: "#ffffff00" }}
                animate={{ fill: "#ffffff" }}
                transition={{ delay: 1.5 + index / 10, duration: 2 }}
                fill="none"
                d={character}
                vectorEffect="non-scaling-stroke"
              ></m.path>
            </Fragment>
          </svg>
        ))}
      </div>
      <m.p
        data-scroll
        data-scroll-speed="1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.4 }}
        className="text-3xl font-semibold text-center z-[1] overflow-hidden"
      >
        {`Full Stack Developer`}
      </m.p>

      <m.a
        data-scroll
        data-scroll-speed="2"
        data-scroll-delay="1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.4 }}
        className="absolute left-[calc(50%-23px)] bottom-[10vh] cursor-pointer"
        href="#who"
        data-scroll-to
      >
        <BiChevronsDown className="animate-bounce" size={56} />
      </m.a>
    </div>
  );
};

export default Intro;
