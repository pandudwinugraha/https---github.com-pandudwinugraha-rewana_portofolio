import React from 'react'
import Image from "next/image"
import banner from "@/public/tentang/banner.png"
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "600" });
const Tentang = () => {
  return (
    <section>
      <div className="banner-page">
       <Image src={banner} alt="banner tentang" className='w-full'/>
      </div>
      <div className="container mx-auto px-4 py-16 2xl:px-0">
        <article>
          <h2 className={`title-page ${poppins.className}`}>Tentang Rewana</h2>
          <p>Desa Mukai Tengah memiliki sumber air swakelola yang digunakan untuk kebutuhan sehari-hari, tetapi menghadapi kendala administratif dan kurangnya monitoring kualitas air. Khususnya, kendala yang dihadapi adalah pendataan manual pembayaran bulanan air, pengecekan kualitas air yang tidak rutin, potensi kebocoran pipa, dan keterbatasan energi untuk penggunaan teknologi IoT. Kami mengusulkan implementasi sistem berbasis Internet of Things (IoT) untuk monitoring real-time kualitas air dan deteksi kebocoran pipa. Ini termasuk penggunaan sensor Analog Turbidity dan Water Flow Sensor. Selain itu, solusi ini juga menggunakan energi terbarukan dari panel surya untuk menggerakkan sistem IoT dan digitalisasi administrasi pembayaran melalui pembuatan website dengan fitur pemindai barcode. Kami berharap manfaat dari hadirnya REWANA bertujuan untuk meningkatkan transparansi dan efisiensi dalam pengelolaan sumber daya air di Desa Mukai Tengah, Kabupaten Kerinci, Provinsi Jambi.</p>
        <p>Saat ini, Desa Mukai Tengah mengalami dampak banjir dan longsor, mempengaruhi infrastruktur pipa untuk pemasangan IoT. Hal ini mengharuskan penyesuaian strategi, seperti memprioritaskan perbaikan infrastruktur dan menyesuaikan lokasi pemasangan IoT. Progres proyek mencakup pembelian perangkat IoT dan pengembangan skema IoT, workflow, serta desain website dan database. Langkah berikutnya adalah menyesuaikan implementasi proyek untuk mengatasi dampak alam, dengan fokus utama pada digitalisasi administrasi pengelolaan air demi efisiensi dan transparansi yang lebih baik.</p>
        </article>
      </div>
    </section>
  )
}

export default Tentang