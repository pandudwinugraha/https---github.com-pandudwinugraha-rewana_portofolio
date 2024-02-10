import React from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Logo1 from "@/public/Logo1.png";
import Logo2 from "@/public/Logo2.png";
import Logo3 from "@/public/Logo3.png";
import Logo4 from "@/public/Logo4.png";
import Logo5 from "@/public/Logo5.png";
import Logo6 from "@/public/Logo6.png";

const poppins = Poppins({ subsets: ["latin"], weight: "600" });

const Dukungan = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-16 4xl:px-0">
        <h2
          className={`${poppins.className} text-[45px] leading-[67px] text-center mb-2 font-bold`}
        >
          Didukung oleh
        </h2>
        <p className="text-center max-w-[555px] mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec consequat sapien. Nulla facilisi. Ut vehicula fermentum libero, vel ultricies leo molestie sit amet. Integer consequat libero at libero fermentum, nec ultricies nulla ullamcorper. 
        </p>
        <div className="grid grid-cols-3 gap-[21px] mt-8 items-center">
          <div className="flex justify-center">
            <Image src={Logo1} alt="projek1" width={200} height={100} />
          </div>
          <div className="flex justify-center">
            <Image src={Logo2} alt="projek2" width={180} height={64} />
          </div>
          <div className="flex justify-center">
            <Image src={Logo3} alt="projek3" width={180} height={64} />
          </div>
          <div className="flex justify-center">
            <Image src={Logo4} alt="projek4" width={150} height={64} />
          </div>
          <div className="flex justify-center">
            <Image src={Logo5} alt="projek5" width={180} height={64} />
          </div>
          <div className="flex justify-center">
            <Image src={Logo6} alt="projek6" width={150} height={64} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dukungan;
