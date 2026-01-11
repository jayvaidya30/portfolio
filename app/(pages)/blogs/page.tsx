import Navbar from "@/components/Navbar";

export default function blogs() {
  return (
    <>
      <Navbar />
      <div className=" flex items-center justify-center px-5 gap-2 pt-30 pb-35">
        <div className="flex flex-col max-w-5xl gap-5">
          <h1 className="text-3xl font-serif font-medium">~ ls Blogs</h1>

          <p className="text-xl flex items-center gap-2 text-neutral-500 font-medium ">
            Check them out on {"=>"}
            <a
              className="flex justify-center items-center gap-2 border border-neutral-700 bg-neutral-900 rounded-lg px-2 py-0.5"
              href="https://discord.gg/JMh3B5csuG"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="1em"
                height="1em"
                viewBox="0 0 48 48"
                stroke="currentColor"
                fill="currentColor"
              >
                <path
                  fill="#2962ff"
                  d="M42.164,17.126L30.874,5.835c-3.781-3.781-9.967-3.781-13.748,0L5.836,17.126	c-3.781,3.781-3.781,9.967,0,13.748l11.291,11.291c3.781,3.781,9.967,3.781,13.748,0l11.291-11.291	C45.945,27.093,45.945,20.907,42.164,17.126z M24,31c-3.866,0-7-3.134-7-7c0-3.866,3.134-7,7-7s7,3.134,7,7	C31,27.866,27.866,31,24,31z"
                ></path>
              </svg>{" "}
              Hashnode
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
