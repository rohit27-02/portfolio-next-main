import { BiLinkExternal } from "react-icons/bi";
import { FC } from "react";
import { allDataType } from "../shared/types";

type SetLoadingFunction = (loading: boolean) => void;
interface MainProjectsProps {
  projects: allDataType["projects"];
  setloading:SetLoadingFunction;
}

const MainProjects: FC<MainProjectsProps> = ({ projects ,setloading}) => {

  return (
    <>
      <h1 className="text-center text-4xl mb-10 md:mb-20">Selected projects</h1>
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`item flex gap-[20px] lg:gap-[50px] w-full px-[5vw] md:min-h-[60vh] mb-20 md:my-10 ${
            index % 2 === 1
              ? "flex-col lg:flex-row"
              : "flex-col lg:flex-row-reverse"
          }`}
        >
          <div data-scroll data-scroll-speed="2" className="lg:flex-1">
          <div className={`border-[#888] border-2 rounded-[20px] overflow-hidden`}>
              <div className="border-black object-contain overflow-hidden rounded-[20px] border-[8px]">
             <video
                 
                  className="w-full  rounded-[12px]"
                  src={project.image.url}
                  autoPlay
                  loop
                  muted
                  onLoadedData={()=>setloading(false)}
                
                />
              </div>
            </div>
          </div>
          <div className="item-info lg:flex-1">
            <h1 className="text-4xl font-semibold">{project.title}</h1>
            <p className="text-lg text-justify my-3">
              {project.description}
            </p>

            <div className="flex gap-[5px]">
              {project.technologies.map((tech) => (
                <img
                  key={tech.url}
                  className="w-[30px] h-[30px]"
                  src={tech.url}
                  alt=""
                />
              ))}
            </div>

            <div className="flex mt-[25px] gap-[20px]">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="h-[45px] px-[15px] text-white  rounded transition duration-300 flex items-center gap-[10px] bg-[#06a987] hover:text-dark hover:bg-[white]"
              >
                <BiLinkExternal size={25} />
                <span> Live Demo</span>
              </a>
            
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MainProjects;
