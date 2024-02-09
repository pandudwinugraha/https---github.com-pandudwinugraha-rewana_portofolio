import Hero from "@/components/Home/Hero";
import Member from "@/components/Home/Member";
import Tentang from "@/components/Home/Tentang";
import Dokumentasi from "@/components/Home/dokumentasi";
import Dukungan from "@/components/Home/dukungan";
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
