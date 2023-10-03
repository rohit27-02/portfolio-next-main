import { FC, useState } from "react";
import { socialLinks } from "../shared/contants";
import { RingLoader } from "react-spinners";
import 'animate.css';

const Contact: FC = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [submitted, setsubmitted] = useState(false);
  const [toast, settoast] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setsubmitted(true)
    let data = { name, email }
    console.log('sending')
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        setname('')
        setemail('')
      }
      setsubmitted(false)
      settoast(true)
      setTimeout(() => {
        settoast(false)
      }, 2000);
    })
  }

  return (
    <div className="pb-20 relative">
      {toast && <div className='absolute animate__animated animate__zoomIn text-emerald-800 md:-top-52 -top-96 font-medium z-50 bg-white p-6 rounded-xl right-[17%] md:right-12 drop-shadow-sm '>Notification sent successfully ! 😀</div>}
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
          {submitted ? <div className='flex justify-center  w-full items-center h-full'>
            <RingLoader
              color="#06a987"
              loading={submitted}
              size={80}
              aria-label="Loading Spinner"
              data-testid="loader"
            /></div>
            : <form onSubmit={(e) => handleSubmit(e)} className="md:space-x-10  rounded-lg md:items-center flex flex-col justify-evenly md:flex-row  w-full ">

              <div className="relative md:w-1/3 md:mb-0 mb-4">
                <input value={name} onChange={(e) => setname(e.currentTarget.value)} placeholder="Full name" type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>

              <div className="relative md:w-1/3 md:mb-0 mb-4">
                <input value={email} onChange={(e) => setemail(e.currentTarget.value)} placeholder="Email" type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <input type="submit" className="py-[10px] px-[30px] text-white cursor-pointer  rounded transition duration-300 flex items-center gap-[10px] bg-[#06a987] hover:text-dark hover:bg-[white] mr-auto" value="Send"/>
            </form>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
