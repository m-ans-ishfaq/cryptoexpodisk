"use client";
import Image from "next/image";
import Arrow from "../../../public/images/arrow-2.png";
import Carousel from "react-multi-carousel";
import { SPEAKERS } from "../data/speakers";

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

export function Speakers()
{
    return (
        <section id="speakers" className="flex justify-center py-20 px-4">
            <div className="container flex flex-col gap-4 justify-center">
                <div className="flex flex-col items-center gap-2 md:gap-4 text-center">
                    <h2 className="relative text-3xl md:text-5xl font-bold">
                        <span>Speakers</span>
                        <Image src={Arrow} alt="" className="hidden md:flex absolute -left-16 top-4" />    
                    </h2>
                    <p className="max-w-3xl md:text-xl font-medium text-neutral-800">
                        Here's a selection of the brightest names in branding that OnBrand will behosting and boasting on October 10, 2019.
                    </p>
                </div>
                <Carousel responsive={responsive} arrows={false} showDots autoPlay containerClass="pb-12">
                    {SPEAKERS.map(({name, avatar, company}, index) => (
                        <div key={index} className="mx-4 flex flex-col gap-4">
                            <div className="bg-primary-yellow overflow-hidden">
                                <Image src={avatar} alt={name} />
                            </div>
                            <div className="flex flex-col pl-6 relative">
                                <div className="absolute bg-primary-yellow w-2 h-5 left-0 top-5"></div>
                                <strong className="text-lg md:text-2xl font-semibold">{name}</strong>
                                <span className="font-medium text-neutral-400">{company}</span>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </section>
    );
}