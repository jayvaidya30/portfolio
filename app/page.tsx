import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-evenly">
      <div className="font-serif italic text-4xl mt-36">
        <h1>
          Jay Vaidya <span className="text-2xl">(jayvaidya30)</span>
        </h1>
        <p className="font-serif  leading-[120%] [word-spacing:0.15rem] text-4xl"> Obession {">>>"} anything</p>
      </div>
      <div>photos</div>
    </div>
  );
}
