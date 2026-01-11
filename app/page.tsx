import Image from "next/image";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";

export default function Home() {
  return (
    <main className="w-full ">
      <section className="min-h-screen bg-linear-to-t from-neutral-900 to-transparent">
        <Navbar />

        {/* Main Content / Name */}

        <div className="flex items-center justify-center px-5 gap-2 py-30 ">
          <MainContent />
        </div>

        <div className="w-full z-50 bg-neutral-900 ">
          <div className="flex font-mono text-lg justify-around items-center py-4 border border-t-neutral-800 border-b-0 border-l-0 border-r-0  ">
            <div className="flex gap-2 ">
              <h1 className="text-neutral-500"> Copyright 2026</h1>
              <Image
                src={"/copyright.svg"}
                alt="Copyright Symbol"
                width={17}
                height={17}
              />
              Jay Vaidya
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
