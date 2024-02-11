import Dokumentasi from "@/components/Home/Dokumentasi";
import Dukungan from "@/components/Home/Dukungan";
import Hero from "@/components/Home/Hero";
import Member from "@/components/Home/Member";
import Misi from "@/components/Home/Misi";
import React from "react";

const Beranda = () => {
  return (
    <>
      <Hero />
      <Misi/>
      <Member />
      <Dokumentasi />
      <Dukungan />
    </>
  );
};

export default Beranda;
