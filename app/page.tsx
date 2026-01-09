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
          <div className=" flex flex-col max-w-4xl gap-5">
            <div className="flex">
              <Image
                src="pfp.svg"
                alt="Profile picture"
                width={100}
                height={100}
                className="rounded-xl"
              ></Image>
              <div className=" flex justify-center items-center mt-17 gap-3 ml-3 text-xl text-neutral-500">
                <a href="">Github</a>
                <a href="">LinkedIn</a>
                <a href="">𝕏</a>
                <a href="">Mail</a>
              </div>
            </div>
            <h1 className="text-3xl font-serif font-medium">
              ~ % sudo Jay Vaidya
            </h1>
            <p className="text-xl font-medium ">
              I'm Jay Vaidya and here I document everything happening in my tech
              career
            </p>
            <p className="text-xl text-neutral-500 font-medium ">
              Full-stack engineer and cracked developer obsessed with clean,
              maintainable code and diving deep into security to understand the
              internet from the ground up
            </p>
            <h1 className="text-3xl font-serif font-medium">
              ~ % Reach out to me
            </h1>

            <div className="flex flex-wrap items-center gap-2">
              <a
                className="flex justify-center items-center gap-2 border border-neutral-700 bg-neutral-900 rounded-lg px-2 py-2"
                href=""
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 640 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path>
                </svg>
                Discord
              </a>

              <a
                className="flex justify-center items-center gap-2 border border-neutral-700 bg-neutral-900 rounded-lg px-2 py-2"
                href=""
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                </svg>
                Twitter
              </a>

              <a
                className="flex justify-center items-center gap-2 border border-neutral-700 bg-neutral-900 rounded-lg px-2 py-2"
                href=""
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 4.99L4 6h16zm0 12H4V8l8 5 8-5v10z"></path>
                </svg>
                Email
              </a>
            </div>

            <h1 className="text-3xl font-serif font-medium">~ % Hire Me</h1>

            <p className="text-xl text-neutral-500 font-medium ">
              I'm currently available for internships, full-time opportunities,
              and freelance projects. If you're looking for someone passionate,
              skilled, and ready to contribute, I'm here to help bring your
              ideas to life!
            </p>

            <a
              className="flex max-w-28 py-2 px-1 justify-center items-center gap-2 border border-neutral-700 bg-neutral-900 rounded-lg "
              href=""
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 256 256"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M216,48H180V40a28,28,0,0,0-28-28H104A28,28,0,0,0,76,40v8H40A20,20,0,0,0,20,68V196a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V68A20,20,0,0,0,216,48ZM100,40a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4v8H100ZM212,72v64H44V72ZM44,192V160H212v32Z"></path>
              </svg>
              Hire Me
            </a>

            {/* Projects */}

            <h1 className="text-3xl font-serif font-medium">~ % ls Projects</h1>
            <div className="flex flex-wrap items-center gap-2">



              
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
