import React from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "600" });
const poppinsLight = Poppins({ subsets: ["latin"], weight: "300" });
const Kontak = () => {
  return (
    <div className="container mx-auto my-10 px- xl:px-40">
      <div className="flex gap-10 items-center">
        <div className="hidden lg:block flex-1 w-full h-[728px] relative">
          <Image src={"/kontak.png"} alt="kontak" fill={true}/>
        </div>
        <div className= "flex-1">
          <h2 className={`title-section mb-5 !text-left ${poppins.className}`}>Kontak</h2>
          <p className={`${poppinsLight.className}`}>Tim kami akan membalas pesan anda dalam waktu 3 hari kerja</p>
          <form className="mt-10 flex flex-col gap-5">
            <input 
            type="text"
            placeholder="Nama"
            className="px-6 w-full py-4 rounded-md outline-none text-black bg-[#D9D9D9]" 
            />
            <input 
            type="Email"
            placeholder="Email"
            className="w-full px-6 py-4 rounded-md outline-none text-black bg-[#D9D9D9]" 
            />
            <textarea placeholder="Pesan" className="w-full h-[207px] rounded-md outline-none px-6 py-4 text-black bg-[#D9D9D9]"></textarea>
            <button className="px-6 py-4 rounded-md text-white bg-[#C10505] max-w-max">Kirim Pesan</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Kontak;
