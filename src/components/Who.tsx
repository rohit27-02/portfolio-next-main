import { FC } from "react";

const Who: FC = () => {
  return (
    <div
      id="who"
      className="flex gap-[5vw] px-[5vw] lg:px-[15vw] z-[2] lg:min-h-[70vh] items-center justify-center flex-col md:flex-row"
    >
      <img
        data-scroll
        data-scroll-speed="2"
        className="w-[20vw]"
        src="/680-it-developer-outline (1).webp"
        alt=""
      />
      <div>
        <h1 data-scroll data-scroll-speed="0.5" className="title text-[40px]">
          Who are we?
        </h1>

        {/* Hide my age :v */}
        <p data-scroll className="text-lg text-gray-200" id="story">
        We are team of creative developers . We, like to develop our projects according to clients perception to provide them what they are imagining in their mind.
        Our main goal is the disrupt the market with our quality service which make our brand irreversible.
          
        </p>
      </div>
    </div>
  );
};

export default Who;
