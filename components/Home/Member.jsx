import { Pembina } from "@/data/Pembina";
import React from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "600" });

const Member = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 2xl:px-0">
        <h2
          className={`${poppins.className} text-[45px] leading-[67px] text-center mb-2 `}
        >
          Rewana Team
        </h2>
        <p className="text-center text-bold">
          berikut pesan partispan yang terlibat di projek besar rewana tim da
        </p>
        <div className="px-4 2xl:px-0 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-5 mt-8">
          {Pembina.map((pembina, i) => (
            <div
              className="px-6 3xl:px-0 item-pembina flex flex-col py-[45px] pyx-[30px] bg-[#ebebebb2] rounded-[20px] hover:shadow-lg transition duration-300"
              key={i}
            >
              <div className="logo-pembina relative w-[150px] h-[150px] mb-4">
                <Image src={pembina.gambar} alt={pembina.nama} fill />
              </div>
              <h3
                className={`${poppins.className} px-6 3xl:px-0 text-[20px] font-bold text-[#474747]`}
              >
                {pembina.nama}
              </h3>
              <h2 className="px-6 3xl:px-0 text-[16px] leading-[37px] font-semibold text-[#616161]">
                {pembina.status}
              </h2>
              <br />
              <p className="px-6 text-[15px] max-w-[1000px] 3xl:px-0 text-[#6d6c6c] mb-5">
                {pembina.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Member;
