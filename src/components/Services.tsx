import { FC } from 'react'
import { useState } from 'react'

const Services: FC = () => {
  const [c, setc] = useState(false)
  return (
    <section className="text-white body-font">
      <h1 className="text-center text-4xl mb-10 ">Our services</h1>
      <div
        id="web"
        className="flex gap-[5vw] px-[5vw] lg:px-[15vw] z-[2] lg:min-h-[70vh] items-center justify-center flex-col md:flex-row"
      >

        <div>
          <h1 data-scroll data-scroll-speed="0.5" className="title text-[40px]">
            Web development
          </h1>
          <p data-scroll className="text-lg text-gray-200" id="story">
          A business website helps in accomplishing a number of digital marketing strategies that can help a business grow. Web advertising has a wide reach and is one of the most effective forms of advertising.
          </p>
          <a  data-scroll
          data-scroll-speed="1" className='flex cursor-pointer items-center'>
            <img
            className=' w-[8vw]'
         onMouseEnter={()=>setc(true)}
         onMouseLeave={()=>setc(false)}
          src="/981-consultation-outline (1).webp"
          alt=""
        />{c && <span className='bg-[#08a88a] py-2 px-4 text-gray-100  rounded-3xl'>Free consultation </span>}</a>

        </div>
        <img
          data-scroll
          data-scroll-speed="2"
          className="w-[20vw]"
          src="/1331-repository-outline (1).webp"
          alt=""
        />
      </div>

      <div
        id="app"
        className="flex gap-[5vw] px-[5vw] lg:px-[15vw] z-[2] lg:min-h-[70vh] items-center justify-center flex-col md:flex-row"
      >
        <img
          data-scroll
          data-scroll-speed="2"
          className="w-[20vw]"
          src="/1326-command-window-line-outline.webp"
          alt=""
        />
        <div>

          <h1 data-scroll data-scroll-speed="0.5" className="title text-[40px]">
            App development
          </h1>

          {/* Hide my age :v */}
          <p data-scroll className="text-lg text-gray-200" id="story">
            We are team of creative developers . We, like to develop our projects according to clients perception to provide them what they are imagining in their mind.
            Our main goal is the disrupt the market with our quality service which make our brand irreversible.

          </p>
          <a  data-scroll
          data-scroll-speed="1" className='flex cursor-pointer items-center'>
            <img
            className=' w-[8vw]'
         onMouseEnter={()=>setc(true)}
         onMouseLeave={()=>setc(false)}
          src="/981-consultation-outline (1).webp"
          alt=""
        />{c && <span className='bg-[#08a88a] py-2 px-4 text-gray-100  rounded-3xl'>Free consultation </span>}</a>

        </div>
      </div>
    </section>
  )
}

export default Services