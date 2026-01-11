import Image from "next/image";

export default function FooterBar() {
  return (
    <>
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
    </>
  );
}
