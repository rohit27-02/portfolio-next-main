import { FC } from 'react'
import { useState,useEffect } from 'react'

const Services: FC = () => {
  const [c, setc] = useState(false)
  const [c1, setc1] = useState(false)
  const [c2, setc2] = useState(false)

  useEffect(() => {
 if(screen.width<768){
  setc(true)
  setc1(true)
  setc2(true)
 }
  }, [])
  
  return (
    <section className="text-white text-center  md:text-left body-font">
      <h1 className="text-center text-4xl my-[5vh]  ">Our services</h1>
      <div
        id="web"
        className="flex gap-[5vw] px-[5vw] lg:px-[15vw]  z-[2] lg:min-h-[70vh] items-center justify-center flex-col-reverse md:flex-row"
      >

        <div className='space-y-[3vh]'>
          <h1 data-scroll data-scroll-speed="0.5" className="title  text-[40px]">
            Web development
          </h1>
          <p data-scroll className="text-lg text-gray-200" id="story">
          A business website helps in accomplishing a number of digital marketing strategies that can help a business grow. Web advertising has a wide reach and is one of the most effective forms of advertising.
          </p>
          <a  data-scroll
          data-scroll-speed="1" className='flex cursor-pointer items-center'>
            <img
            className='w-[8vh] md:w-[8vw]'
         onMouseEnter={()=>setc(true)}
         onMouseLeave={()=>setc(false)}
          src="/981-consultation-outline (1).webp"
          alt=""
        />{c && <span className='bg-[#08a88a] py-2 px-4 animate-bounce text-gray-100  rounded-3xl'>Free consultation </span>}</a>

        </div>
        <img
          data-scroll
          data-scroll-speed="2"
          className="w-[20vh] md:w-[20vw]"
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
          className="w-[20vh] md:w-[20vw]"
          src="/1326-command-window-line-outline.webp"
          alt=""
        />
        <div className='space-y-[3vh]'>

          <h1 data-scroll data-scroll-speed="0.5" className="title text-[40px]">
            App development
          </h1>

          {/* Hide my age :v */}
          <p data-scroll className="text-lg text-gray-200" id="story">
          Mobile apps permit the users to have functional access to products, information, process, and services that they would demand in real-time. Moreover, it enables the business to send notifications about changes in products and services or something new. Even without the internet, the apps perform simple functions.
          </p>
          <a  data-scroll
          data-scroll-speed="1" className='flex cursor-pointer items-center'>
            <img
            className='w-[8vh] md:w-[8vw]'
         onMouseEnter={()=>setc2(true)}
         onMouseLeave={()=>setc2(false)}
          src="/981-consultation-outline (1).webp"
          alt=""
        />{c2  && <span className='bg-[#08a88a] animate-bounce py-2 px-4 text-gray-100  rounded-3xl'>Free consultation </span>}</a>

        </div>
      </div>

      <div
        id="data"
        className="flex gap-[5vw] px-[5vw] lg:px-[15vw] z-[2] lg:min-h-[70vh] items-center justify-center flex-col-reverse md:flex-row"
      >

        <div className='space-y-[3vh]'>
          <h1 data-scroll data-scroll-speed="0.5" className="title text-[40px]">
            Big data & analytics
          </h1>
          <p data-scroll className="text-lg text-gray-200" id="story">
          10 Bit provides experienced, professional statistical advice, technological solutions, consulting, information management, and analysis for the enterprise across the globe. The goal of the practice is to assist people to better understand and visualize the world around them, based on objective empirical analysis.
          </p>
          <a  data-scroll
          data-scroll-speed="1" className='flex cursor-pointer items-center'>
            <img
            className='w-[8vh] md:w-[8vw]'
         onMouseEnter={()=>setc1(true)}
         onMouseLeave={()=>setc1(false)}
          src="/981-consultation-outline (1).webp"
          alt=""
        />{c1 && <span className='bg-[#08a88a] py-2 px-4 animate-bounce text-gray-100  rounded-3xl'>Free consultation </span>}</a>

        </div>
        <img
          data-scroll
          data-scroll-speed="2"
          className="w-[20vh] md:w-[20vw]"
          src="/153-bar-chart-growth-outline.webp"
          alt=""
        />
      </div>

    </section>
  )
}

export default Services