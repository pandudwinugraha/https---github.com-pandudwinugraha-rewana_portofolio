import React from "react";
import Image from "next/image"
import { Poppins } from "next/font/google";
import projek1 from "@/public/projek1.png"
import projek2 from "@/public/projek2.png"
import projek3 from "@/public/projek3.png"
import projek4 from "@/public/projek4.png"

const poppins = Poppins({ subsets: ["latin"], weight: "600" });
const Dokumentasi = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-16 4xl:px-0">
        <h2 className={`${poppins.className} text-[45px] leading-[67px] text-center mb-2 font-bold`}>Dokuemntasi Kegiatan</h2>
        <p className="text-center max-w-[555px] mx-auto">
          Dsini adalah dokumentasi kami selama projek rewana berlangsung dan inilah beberapa kisah yang akan kami tuang melalui gambar dalam perjalanan ekspedisi rewana untuk menyebarkan digital ke penjuru indonesia
        </p>
        <div className="grid grid-cols-12 gap-[21px]">
          <div className="col-span-12 lg:col-span-5">
            <Image
            src={projek1}
            alt="projek1"
            className="w-full"
            />
          </div>
          <div className="col-span-12 lg:col-span-7">
          <Image
            src={projek2}
            alt="projek2"
            className="w-full"
            />
          </div>
          <div className="col-span-12 lg:col-span-7">
          <Image
            src={projek3}
            alt="projek3"
            className="w-full"
            />
          </div>
          <div className="col-span-12 lg:col-span-5">
          <Image
            src={projek4}
            alt="projek"
            className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dokumentasi;
