import React from 'react'
import Cursor from '../components/Cursor'
import Canvas from '../components/Canvas'

const about = () => {
    return (
        <section className=" body-font ">
            <Cursor />
            <Canvas/>
            <div className="container px-5 py-12 z-20  mx-auto">
                <div className="xl:w-1/2 lg:w-3/4 w-full space-y-6 mx-auto text-xl  ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 mb-8" viewBox="0 0 975.036 975.036">
                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                    </svg>

                    <p className='font-semibold'>Hello everyone,</p>

                    <p>I am thrilled to introduce myself as a recent B.Tech graduate from the Computer Science and Engineering (CSE) branch, specializing in Full Stack Development. Throughout my academic journey, I have nurtured a deep interest in exploring the vast world of technology and its ever-evolving landscape.</p>

                    <p>For the past one and a half years, I have been honing my skills as a Full Stack Developer, with a primary focus on the MERN (MongoDB, Express.js, React.js, Node.js) stack. These technologies have enabled me to craft robust and interactive web applications that seamlessly integrate both front-end and back-end functionalities.</p>

                    <p>Beyond the MERN stack, I have also delved into various other technologies and tools, such as Spring Boot, Docker, GitHub, AWS, Google API, and Next.js, among others. My thirst for knowledge and my enthusiasm for learning have motivated me to broaden my expertise, ensuring that I stay up-to-date with the latest trends in the industry.</p>

                    <p>During my academic journey, I had the privilege of participating in two enriching internships. At Developers Infotech Pvt Ltd, I undertook the entire design and deployment process of an e-commerce website, a project that allowed me to apply my skills independently and gain valuable hands-on experience. My second internship, at Magic EdTech, provided me with comprehensive training in Spring Boot and React, strengthening my foundation in backend development.</p>

                    <p>In addition to internships, I have also ventured into the world of freelancing, taking on diverse projects ranging from captivating landing pages to compelling portfolios. These experiences have not only refined my technical abilities but have also honed my communication and project management skills.</p>

                    <p>I am truly passionate about leveraging technology to create innovative solutions and seamless user experiences. As a Full Stack Developer, I strive to deliver high-quality, efficient, and scalable applications that positively impact people&apos;s lives.</p>

                    <p>Thank you for taking the time to get to know me. I am eager to collaborate with like-minded individuals and contribute my skills to exciting and challenging projects that push the boundaries of technology.</p>

                    <p>Looking forward to new opportunities and collaborations!</p>
                    <span className="inline-block h-1 w-20 rounded bg-emerald-600 mt-8 mb-6"></span>
                    <div>
                        <h2 className=" font-medium title-font tracking-wider text-sm">Rohit Rawat</h2>
                        <p className="">Full Stack Developer</p>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default about