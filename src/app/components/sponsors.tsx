"use client";
import Image from "next/image";
import BG1 from "../../../public/images/backgrounds/bg-1.png";
import Arrow from "../../../public/images/arrow-1.png";
import { SPONSORS } from "../data/sponsors";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

export function Sponsors()
{
    return (
        <section id="sponsors" className="relative py-20 flex flex-col justify-center items-center px-4">
            <div className="absolute z-[-2] h-full w-full bg-black"></div>
            <Image src={BG1} alt="" className="absolute z-[-1] w-full h-full object-cover opacity-20" />
            <div className="container max-w-3xl text-white flex flex-col gap-2 md:gap-4 items-center text-center">
                <h2 className="relative text-3xl md:text-5xl font-bold">
                    <span>Our Sponsors</span>
                    <Image src={Arrow} alt="" className="hidden md:flex absolute -left-16 top-4" />    
                </h2>
                <p className="md:text-xl font-medium mb-4">Here's the  selection of the brightest names in branding that OnBrand will be hosting and boasting on January 15 2024</p>
            </div>
            <div className="container max-w-5xl">
                <Carousel responsive={responsive} arrows={false} showDots autoPlay containerClass="pb-12">
                    {SPONSORS.map(({image, url}, index) => (
                        <a key={index} href={url} target="_blank" className="bg-white py-4 mx-2 h-full flex justify-center items-center">
                            <Image src={image} alt="url" className="w-40" />
                        </a>
                    ))}
                </Carousel>
            </div>
            <button className="mt-4 py-1 px-3 md:py-3 md:px-8 bg-primary-yellow font-bold rounded-full text-neutral-900">Become a Sponsor</button>
        </section>
    )
}