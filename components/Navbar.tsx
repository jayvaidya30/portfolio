
import Link from "next/link";

interface LinkInterface {
  id: string;
  title: string;
  href: string;
}

const Links: LinkInterface[] = [
  {
    id: "1",
    title: "About",
    href: "/about",
  },
  {
    id: "2",
    title: "Projects",
    href: "/projects",
  },
  {
    id: "3",
    title: "Blogs",
    href: "/blogs",
  },
  {
    id: "4",
    title: "Contact",
    href: "/contact",
  },
];

export async function Navbar() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-black ">
        <div className="flex font-mono font-medium text-2xl justify-around items-center py-3 border border-b-neutral-800 border-t-0 border-l-0 border-r-0  ">
          {/* navbar */}
          <Link href={"/"}>Jay.</Link>

          <div className="flex flex-wrap items-center gap-2">
            {Links.map((link) => (
              <Link
                href={link.href}
                key={link.id}
                className="text-lg text-neutral-500 font-medium flex"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
