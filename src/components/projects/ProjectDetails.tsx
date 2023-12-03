import ProjectMeta from "@/components/projects/ProjectMeta";
import { satoshiBlack } from "@/components/utils/font";
import projectInfo from "@/components/utils/projectInfo";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { BsBroadcast } from "react-icons/bs";
import { HiOutlineCode } from "react-icons/hi";
import { IoChevronBack } from "react-icons/io5";
import { PiFigmaLogoLight } from "react-icons/pi";

interface Props {
  project: string;
}

const ProjectDetails = (props: Props) => {
  const { project } = props;

  const currentProject = projectInfo.get(project)!;
  const iconSize = 25;

  const paragraphs = Object.values(currentProject.paragraphs).map(
    (paragraph, index) => {
      return (
        <p className="parapgraph" key={index}>
          {paragraph}
        </p>
      );
    }
  );

  return (
    <section className="flex flex-col gap-12 py-8">
      <header className="border-b-[1px] border-secondary/50">
        <span>{currentProject.icon}</span>
        <br></br>

        <h1 className={`${satoshiBlack.className} text-4xl lowercase`}>
          {currentProject.name}
        </h1>
        <br></br>

        <div className="py-4">
          <ProjectMeta
            icon={<HiOutlineCode size={iconSize} />}
            name="Stack"
            content={currentProject.stack}
          />
          <ProjectMeta
            icon={<AiFillGithub size={iconSize} />}
            name="Source"
            content={currentProject.source}
          />
          <ProjectMeta
            icon={<BsBroadcast size={iconSize} />}
            name="Demo"
            content={currentProject.demo}
          />
          <ProjectMeta
            icon={<PiFigmaLogoLight size={iconSize - 2} />}
            name="Figma"
            content={currentProject.figma}
          />
        </div>
      </header>

      <iframe
        className="rounded-lg  frame"
        src={`https://www.youtube.com/embed/${currentProject.youtubeID}?autoplay=1&mute=1&loop=1&controls=0&playlist=${currentProject.youtubeID}`}
      ></iframe>

      <article className="flex flex-col gap-12 pb-4">
        <h1 className={`${satoshiBlack.className} text-4xl lowercase`}>
          {currentProject.title}
        </h1>

        {paragraphs}

        <Link
          href="/#projects"
          className="flex gap-1 mt-2 opacity-80 items-center text-secondary"
        >
          <IoChevronBack className="cursor-pointer" size={20} />
          <span className="hover:underline hover:underline-offset-4">
            Back to Projects
          </span>
        </Link>
      </article>
    </section>
  );
};

export default ProjectDetails;
