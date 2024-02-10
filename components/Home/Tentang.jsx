import imgAbout from "@/public/img-about.png";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "700" });
const Tentang = () => {
  return (
    <section className="py-10">
      <div className="conteiner mx-auto px-4 2xl:px-0">
        <div className="grid grid-4 lg:grid-cols-2 lg:gap-8">
          <Image src={imgAbout} alt="img-about" className="w-full" />
          <article className="h-full flex flex-col justify-center item-start">
            <br />
            <h2
              className={`${poppins.className} text-[45px] leading-[67px] mb-2 font-bold`}
            >
              Tentang Rewana
            </h2>
            <p className="text-[15px] max-w-[635px] my-4">
              Lorem ipsum dolor sit amet consectetur. Ut metus aliquam dictumst
              ut. Sem nunc volutpat elit ligula pharetra fringilla libero diam
              sagittis. Maecenas et mauris sed nisl. Faucibus neque nunc semper
              tincidunt. Ornare enim fermentum eget lorem orci egestas nulla.
              Sit donec facilisis pellentesque quam. Nec ac id nisl ac
              fermentum. Id placerat eu morbi lectus tellus mauris sem.
              Convallis aliquet ac sapien viverra nibh in. Suspendisse.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Tentang;
