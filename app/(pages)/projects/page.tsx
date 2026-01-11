import Project from "@/app/constants";
import AboutPage from "@/components/AboutPage";
import FooterBar from "@/components/FooterBar";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectPageContent() {
  return (
    <>
      <Navbar />
      <div className=" flex items-center justify-center px-5 gap-2 pt-30 pb-35">
        <ProjectSection />
      </div>
      <FooterBar />
    </>
  );
}

const ProjectSection = () => {
  return (
    <>
      <div className="flex flex-col max-w-5xl gap-5">
        <h1 className="text-3xl font-serif font-medium">~ % ls Projects</h1>

        <p className="text-xl text-neutral-500 font-medium ">
          Where execution and excellence is tested
        </p>
        <div className="flex flex-wrap gap-4">
          {Project.map((Project) => (
            <ProjectCard key={Project.id} project={Project} />
          ))}
        </div>
      </div>
    </>
  );
};
