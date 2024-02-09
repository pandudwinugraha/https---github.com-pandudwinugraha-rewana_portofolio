import Dokumentasi from "@/components/Home/Dokumentasi";
import Dukungan from "@/components/Home/Dukungan";
import Hero from "@/components/Home/Hero";
import Member from "@/components/Home/Member";
import Tentang from "@/components/Home/Tentang";
import React from "react";

const Beranda = () => {
  return (
    <>
      <Hero />
      <Tentang />
      <Member />
      <Dokumentasi/>
      <Dukungan/>
    </>
  );
};

export default Beranda;
