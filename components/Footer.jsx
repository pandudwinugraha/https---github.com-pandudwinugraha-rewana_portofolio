import React from "react";
import Image from "next/image";
import instagram from "@/public/instagram.svg";
import youtube from "@/public/youtube.svg";
import github from "@/public/github.svg";

const Footer = () => {
  return (
    <div className="bg-[#0F0F0F]">
      <div className="container mx-auto px-4 2xl:px-0">
        <div className="flex flex-col justify-center items-center md:flex-row md:justify-between gap-[20px] py-[50px]">
          <div className="text-white">rewanateam@Copyright 2023</div>
          <div className="socmed flex justify-end items-center gap-[20px]">
            <a href="https://www.instagram.com/alfa_relzi/" target="_blank" rel="noopener noreferrer">
              <Image src={instagram} alt="instagram" />
            </a>
            <a href="https://www.youtube.com/@RewanaTeam" target="_blank" rel="noopener noreferrer">
              <Image src={youtube} alt="youtube" />
            </a>
            <a href="https://github.com/pandudwinugraha/https---github.com-pandudwinugraha-rewana_portofolio.git" target="_blank" rel="noopener noreferrer">
              <Image src={github} alt="github" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
