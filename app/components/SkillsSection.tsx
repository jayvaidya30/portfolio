import Skills from "./Skills";
import ReactJs from "@/icons/ReactJs";
import NextJs from "@/icons/NextJs";
import Javascript from "@/icons/Javascript";
import Typescript from "@/icons/Typescript";
import C from "@/icons/C";
import Docker from "@/icons/Docker";
import ExpressJs from "@/icons/ExpressJs";
import Figma from "@/icons/Figma";
import Git from "@/icons/Git";
import Github from "@/icons/Github";
import Linux from "@/icons/Linux";
import MongoDB from "@/icons/MongoDB";
import NodeJS from "@/icons/NodeJs";
import PostgresSQL from "@/icons/PostgresSQL";
import Postman from "@/icons/Postman";
import Prisma from "@/icons/Prisma";
import Redis from "@/icons/Redis";
import Shadcn from "@/icons/Shadcn";
import SQL from "@/icons/SQL";
import Tailwind from "@/icons/Tailwind";
import Vercel from "@/icons/Vercel";
import Zustland from "@/icons/Zustland";

export default function SkillsSection() {
  return (
    <>
      <Skills icon={<ReactJs />} label="ReactJs" />
      <Skills icon={<NextJs />} label="NextJs" />
      <Skills icon={<Typescript />} label="JavaScript" />
      <Skills icon={<C />} label="C" />
      <Skills icon={<Docker />} label="Docker" />
      <Skills icon={<ExpressJs />} label="ExpressJS" />
      <Skills icon={<Figma />} label="Figma" />
      <Skills icon={<Git />} label="Git" />
      <Skills icon={<Github />} label="Github" />
      <Skills icon={<Linux />} label="Linux" />
      <Skills icon={<MongoDB />} label="MongoDB" />
      <Skills icon={<NodeJS />} label="NodeJS" />
      <Skills icon={<PostgresSQL />} label="PostgresSQL" />
      <Skills icon={<Postman />} label="Postman" />
      <Skills icon={<Prisma />} label="Prisma" />
      <Skills icon={<Redis />} label="Redis" />
      <Skills icon={<Shadcn />} label="Shadcn" />
      <Skills icon={<SQL />} label="SQL" />
      <Skills icon={<Tailwind />} label="Tailwind" />
      <Skills icon={<Typescript />} label="TypeScript" />
      <Skills icon={<Vercel />} label="Vercel" />
      <Skills icon={<Zustland />} label="Zustland" />
    </>
  );
}
