"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Meera_Inimai, Poppins } from "next/font/google";
import emailjs from "@emailjs/browser";

const poppins = Poppins({ subsets: ["latin"], weight: "600" });
const poppinsLight = Poppins({ subsets: ["latin"], weight: "300" });
const Kontak = () => {
  const formRef = useRef();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false)
  const [inputVal, setInputVal] = useState({
    nama: "",
    email: "",
    pesan: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    emailjs
      .sendForm(
        process.env.SERVICE_ID,
        process.env.TEMPLATE_ID,
        formRef.current,
        process.env.PUBLIC_KEY
      )
      .then(
        (result) => {
          if (result.text == "OK") {
            setMessage("Pesan berhasil dikirim!");
            setInputVal({ ...inputVal, nama: "", email: "", pesan: "" });
            setLoading(false)
            setTimeout(() => {
              setMessage ("");
            }, 3000);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="container mx-auto my-10 px-6 xl:px-40">
      <div className="flex gap-10 items-center">
        <div className="hidden lg:block flex-1 w-full h-[728px] relative">
          <Image src={"/kontak.png"} alt="kontak" fill={true} sizes="100%" />
        </div>
        <div className="flex-1">
          <h2 className={`title-section mb-5 !text-left ${poppins.className}`}>
            Kontak Rewana
          </h2>
          <p className={`${poppinsLight.className}`}>
          Tim kami akan membalas pesan anda dalam waktu kerja,
          Silahkan isi form berikut untuk menyampaikan pesan dan kendala anda :
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col gap-5"
          >
            <input
              type="text"
              name="nama"
              placeholder="Nama"
              className="px-6 w-full py-4 rounded-md outline-none text-black bg-[#D9D9D9]"
              value={inputVal.nama}
              onChange={(e) =>
                setInputVal({ ...inputVal, nama: e.target.value })
              }
            />
            <input
              type="Email"
              name="email"
              placeholder="Email"
              className="w-full px-6 py-4 rounded-md outline-none text-black bg-[#D9D9D9]"
              value={inputVal.email}
              onChange={(e) =>
                setInputVal({ ...inputVal, email: e.target.value })
              }
            />
            <textarea
              name="pesan"
              placeholder="Pesan"
              className="w-full h-[207px] rounded-md outline-none px-6 py-4 text-black bg-[#D9D9D9]"
              value={inputVal.pesan}
              onChange={(e) =>
                setInputVal({ ...inputVal, pesan: e.target.value })
              }
            ></textarea>
            <button className="px-6 py-4 rounded-md text-white bg-[#C10505] max-w-max">
              {loading ? "Processing..." : "Krim Pesan"}
            </button>
            {message && (
              <div className="p-5 bg-green-500 text-center text-white rounded-md">
                {message}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Kontak;
