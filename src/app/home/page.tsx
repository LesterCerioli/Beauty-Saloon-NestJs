"use client";

import { NextPage } from "next";
import Image from "next/image";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

import banner from "@/assets/example_saloon.jpeg";
import { images } from "@/constants/carouselPlaceholderConstants";
import { serviceList } from "@/constants/serviceConstants";
import { ServiceButton } from "../components/ServiceButton";
import Link from "next/link";
import { responsive } from "@/constants/carouselSizeConstants";
import { SaloonCardDetails } from "../components/SaloonCardDetails";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Login from "../components/Login";  // Importe o componente Login

interface Servico {
  id: number;
  title: string;
  img: string;
  link: string;
}

interface ImageProps {
  id: number;
  path: string | StaticImport;
}

const Home: NextPage = () => {
  return (
    <main className="relative flex flex-1 flex-col mt-6 p-4 last:pb-24">
      <header className="flex flex-row justify-between h-fit">
        <div className="w-fit">
          <h1 className="text-[#111111] text-2xl font-bold">
            Seja bem-vindo ao Beauty Saloon
          </h1>
          <span className="text-[#50555C] text-sm">
            Encontre o serviço que procura, e cuide de si mesma!
          </span>
        </div>
        <div className="w-fit h-fit">
          <button className="flex px-3 py-3 text-white items-center justify-center bg-btn-primary-color rounded-full">
            <FaMagnifyingGlass size={24} />
          </button>
        </div>
      </header>

      {/* Improved Image Loading */}
      <Image
        className="w-screen h-72 mt-6 rounded-lg"
        src={banner}
        alt="Banner"
        priority
        placeholder="blur" // Show blurred version while loading
      />

      <section className="mt-6 font-bold text-base">
        <h5 className="text-[#111111]">O que você está procurando?</h5>
        <div className="mt-6 grid gap-4 grid-cols-4">
          {serviceList.map(({ id, title, img, link }: Servico) => (
            <ServiceButton key={id} id={id} img={img} title={title} link={link} />
          ))}
        </div>
      </section>

      <section className="mt-6">
        <div className="flex items-center justify-between">
          <h5 className="font-bold">Salões em destaque</h5>
          <Link
            className="font-semibold text-sm text-btn-primary-color hover:underline decoration-1"
            href="#"
          >
            Ver todos
          </Link>
        </div>

        {/* Enhanced Carousel */}
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={2500}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          draggable
          infinite
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          responsive={responsive}
          shouldResetAutoplay
          showDots={false}
          swipeable
          transitionDuration={800}
        >
          {images.map((image) => (
            <SaloonCardDetails key={image.id} img={image.img} />
          ))}
        </Carousel>
      </section>

      {/* Login Card positioned in the top-right corner */}
      <div className="absolute top-4 right-4 w-80 p-4 bg-white shadow-lg rounded-lg">
        <Login />
      </div>
    </main>
  );
};

export default Home;
