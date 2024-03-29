"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "../public/logo.svg";
import Link from "next/link";
import { menu } from "@/data/menu";
import { HiOutlineX, HiMenuAlt3 } from "react-icons/hi";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const currentPage = usePathname();
  const newURL = currentPage.split("/");
  console.log(newURL);
  const [show, setShow] = useState(false);
  return (
    <section
      className={`${currentPage !== "/" ? "border-b-4 border-blue-400" : ""}`}
    >
      <div className={`container mx-auto px-4 2xl:px-0`}>
        <div className="py-6 flex justify-between items-center">
          <Image
            src={logo}
            alt="logo"
            width={120}
            height={100}
            borderRadius="20px"
            priority
          />
          <HiMenuAlt3
            size={30}
            className="cursor-pointer lg:hidden"
            onClick={(prev) => setShow(!prev.show)}
          />
          <div
            className={`fixed lg:relative bg-white lg:bg-transparent top-0 w-full h-screen lg:h-auto
          ${show ? "right-0" : "-right-full"} lg:right-0
          flex gap-10 flex-col lg:flex-row justify-center lg:justify-end items-center transition-all duration-500 top_nav`}
          >
            <HiOutlineX
              size={30}
              className="text-black absolute top-7 right-7 cursor-pointer lg:hidden"
              onClick={() => setShow(false)}
            />

            {menu.map((item, i) => {
              return (
                <Link
                  className={`/${newURL[1]}` == item.url ? "active" : ""}
                  key={i}
                  href={item.url}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
