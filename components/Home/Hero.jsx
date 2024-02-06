import React from "react";
import Link from "next/link";
import { Poppins, Passion_One, Inter } from "next/font/google";

const fontPoppins = Poppins({ subsets: ["latin"], weight: "400" });
const fontPassionOne = Passion_One({ subsets: ["latin"], weight: "400" });
const fontInter = Inter({ subsets: ["latin"], weight: "700" });

const Hero = () => {
  return (
    <div className="py-[280px] bg-[url('/rewana.png')] bg-cover bg-right">
      <div className="container mx-auto px-4 xl:px-0 flex flex-col lg:flex-row">
        <div className="lg:w-1/2 mb-8 lg:mb-0 lg:order-1">
          <div
            className={`bg-gradient-to-r from-[#198528] to-[#47a0db] max-w-max rounded-md py-2 px-[20px] text-[36px] font-semibold ${fontPoppins.className} mb-[10px] text-white hover:bg-gradient-to-br from-[#47a0db] to-[#198528]`}
            style={{ borderRadius: "10px" }}
          >
            Selamat Datang!
          </div>
          <h1
            className={`text-[60px] leading-[75px] text-white font-bold ${fontPassionOne.className}`}
          >
            Di Rewana Portofolio
          </h1>
          <p className="text-[20px] max-w-[595px] my-4 text-white">
            Lorem ipsum dolor sit amet consectetur. Ut metus aliquam dictumst
            ut. Sem nunc volutpat elit ligula pharetra fringilla libero diam
            sagittis. Maecenas et mauris sed nisl.
          </p>
          <br />
          <Link
            className={`px-[24px] py-[11px] bg-[#045EE1] text-white rounded-md ${fontInter.className} mb-[20px] hover:bg-black`}
            href="/Kontak"
            style={{ borderRadius: "30px" }}
          >
            Hubungi Kami!
          </Link>
        </div>
        <div className="lg:w-1/2 lg:order-2" style={{ paddingRight: "50px" }}>
          <iframe
            width="85%"
            height="355"
            src="https://www.youtube.com/embed/HU0vv01s2wg?autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              borderRadius: "20px",
              border: "2px solid white",
              boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.4)",
              marginTop: "15px",
              marginLeft: "auto",
            }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Hero;
