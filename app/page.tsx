import Image from "next/image";
import Navbar from "../components/Navbar";
import MainContent from "../components/MainContent";
import FooterBar from "../components/FooterBar";

export default function Home() {
  return (
    <main className="w-full ">
      <section className="min-h-screen bg-linear-to-t from-neutral-900 to-transparent">
        <Navbar />

        {/* Main Content / Name */}

        <div className="flex items-center justify-center px-5 gap-2 py-30 ">
          <MainContent />
        </div>

        <FooterBar />
      </section>
    </main>
  );
}
