import Image from "next/image";

interface Links {
  title: string;
  href: string;
}

export default function Home() {
  const links = [
    {
      title: "Home",
      href: "/home",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Socials",
      href: "/socials",
    },
  ];

  return (
    <main className="w-full">
      <section className="min-h-screen">
        <div className="fixed top-0 left-0 w-full z-50 bg-black">
          <div className="flex font-mono font-medium text-2xl justify-around items-center py-5 border border-b-neutral-800 border-t-0 border-l-0 border-r-0  ">
            {/* navbar */}
            <div>Jay.</div>

            <div className="flex gap-5">
              {links.map((link, index) => (
                <div
                  key={index}
                  className="text-neutral-500 font-mono font-medium text-[18px] "
                >
                  {link.title}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content / Name */}

        <div className="flex items-center justify-center px-5 gap-2 mt-55 ">
          <div className=" flex flex-col max-w-5xl gap-5">
            <div className="flex">
              <Image
                src="pfp.svg"
                alt="Profile picture"
                width={100}
                height={100}
                className="rounded-xl"
              ></Image>
              <div className=" flex justify-center items-center mt-17 gap-3 ml-3 font-serif text-xl text-neutral-500">
                <a href="">Github</a>
                <a href="">LinkedIn</a>
                <a href="">𝕏</a>
                <a href="">Mail</a>
              </div>
            </div>
            <h1 className="text-5xl font-serif font-medium">
              ~ % sudo Jay Vaidya
            </h1>
            <p className="text-4xl font-serif font-medium ">
              I'm Jay Vaidya and here I document everything happening in my tech
              career
            </p>
            <p className="text-2xl text-neutral-500 font-serif font-medium ">
              Full-stack engineer and cracked developer obsessed with clean,
              maintainable code and diving deep into security to understand the
              internet from the ground up
            </p>
          </div>
        </div>




        <div className="flex items-center justify-center px-5 gap-2 mt-120 mb-150 ">
          <div className=" flex flex-col max-w-5xl gap-5">
            <h1 className="text-5xl font-serif font-medium">
              ~ % ls Projects
            </h1>
            
              


          </div>
        </div>



      </section>
    </main>
  );
}
