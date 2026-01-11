import AboutPage from "@/components/AboutPage";
import FooterBar from "@/components/FooterBar";
import Navbar from "@/components/Navbar";
import SkillsText from "@/components/SkillsText";

export default function abouMainContentt() {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center px-5 gap-2 pt-30 pb-37" >
        <AboutPage />
      </div>
      <FooterBar />
    </>
  );
}
