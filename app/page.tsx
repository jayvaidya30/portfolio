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
    <div className="min-h-screen">
      {/* navbar */}
      <div className="flex font-mono font-medium  text-2xl justify-around items-center mt-3 ">
        <div>Jay.</div>

        <div className="flex gap-5">
          {links.map((link, index) => (
            <div key={index} className="text-neutral-500 font-mono font-medium text-[18px] ">
              {link.title}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content / Name */}

      <div className="flex  items-center ml-150 max-w-2xl gap-2 mt-80 ">
        <div className=" flex flex-col gap-2">
          <Image src={"X-pfp.jpg"} alt="Profile picture" width={50} height={50}></Image>
          <h1 className="text-4xl font-mono font-medium ">~ % sudo Jay Vaidya</h1>
          <p className="text-3xl font-mono font-medium ">Yo! Jay Here.</p>
          <p className= " text-xl text-neutral-500 font-mono font-medium ">Fullstack Engineer, I write clean and maintable code <br /> Open to work!</p>
        </div>
      </div>
    </div>
  );
}
