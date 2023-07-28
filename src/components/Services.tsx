import { FC } from 'react'
import { useState, useEffect } from 'react'

const Services: FC = () => {
  const [c, setc] = useState(false)
  const [c1, setc1] = useState(false)
  const [c2, setc2] = useState(false)

  useEffect(() => {
    if (screen.width < 768) {
      setc(true)
      setc1(true)
      setc2(true)
    }
  }, [])

  return (
    <section className="text-white text-center  md:text-left body-font">
      <h1 className="text-center text-4xl my-[5vh]  ">My services</h1>
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