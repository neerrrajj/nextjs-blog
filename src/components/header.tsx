"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    href: "/",
    label: "home",
  },
  {
    href: "/posts",
    label: "posts",
  },
  {
    href: "/create-post",
    label: "create post",
  },
];

export default function Header() {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <header className="flex justify-between items-center py-4 px-6 border-b">
      <Link href="/">
        <Image
          src="https://bytegrad.com/course-assets/youtube/example-logo.png"
          alt="logo"
          className="w-[35px] h-[35px]"
          width={35}
          height={35}
        />
      </Link>
      <nav>
        <ul className="flex gap-x-5 text-[14px]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`font-medium ${
                  link.href === pathName ? "text-zinc-800" : "text-zinc-400"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
